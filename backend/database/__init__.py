"""
The `database` package encapsulates all the database management capabilities and exposes it to the rest of the app.

Sub-Packages:
    `database.models`: exposes the data models/tables used in this app.
"""
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, scoped_session
from .constants import db_url

engine = create_engine(db_url, convert_unicode=True)
Base = declarative_base()
Base.metadata.bind = engine

db_session = scoped_session(sessionmaker(bind=engine))

Base.query = db_session.query_property