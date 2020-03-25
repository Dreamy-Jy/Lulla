from database.base import db_session
from sqlalchemy import inspect

#need to change look up to UID
#will change location of access token storage with proper table

#turns the query object into a dic
def object_as_dict(obj):
    return {c.key: getattr(obj, c.key)
            for c in inspect(obj).mapper.column_attrs}

#for row in user:
#		print(object_as_dict(row))
#need more error handling
#check if the model already exists
def save_response(**kwargs):
	#will filter by something kwargs['']
	user = db_session.query(kwargs['model']).filter_by(id=kwargs['id'])
	
	if user.all() == []:
		model = kwargs['new_model']
		db_session.add(model)
	else:
		user.update(kwargs["response"])

	db_session.commit()

