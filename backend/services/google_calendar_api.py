from database.google_calendar_model import ModelGoogleCalendar
import google.oauth2.credentials
import google_auth_oauthlib.flow
from flask import url_for
from pprint import pprint
from utils import save_response

#Using the google api client libary
#This handles tasks we would otherwise need to define
#Determines when the application can use refresh stored access tokens 
#Determines when the application must reacquire consent 
#Generates correct redirect URLS
#Helps to implement redirect handlers that exchange authorization codes for access tokens

#--------------------------------OAUTH2----------------------------
state = ''
def authenticate():
    flow = google_auth_oauthlib.flow.Flow.from_client_secrets_file(
        'services/client_secret.json',
        #this is the scope
        ['https://www.googleapis.com/auth/calendar.addons.execute'])
    #will need to upate the redirect uri name in the google oath form
    flow.redirect_uri = 'https://localhost:5000/google'

    authorization_url, state = flow.authorization_url(
        access_type = 'offline',
        include_granted_scopes = 'true')

    return authorization_url

def callback(auth_response):
    flow = google_auth_oauthlib.flow.Flow.from_client_secrets_file(
    'services/client_secret.json',
    scopes=['https://www.googleapis.com/auth/calendar.addons.execute'],
    state=state)
    #url_for builds a url so we do not need to generate the whole url
    #flow.redirect_uri = url_for('googleCallBack')
    #add this to yaml file
    flow.redirect_uri = "https://localhost:5000/google"
    authorization_response = auth_response
    flow.fetch_token(authorization_response=authorization_response)

    #need to have error handling
    response = credentials_to_dict(flow.credentials)
    #add user id here
    save_response.save_response(id=5, new_model=ModelGoogleCalendar(**response), model=ModelGoogleCalendar, response=response)

    #does not need a return statement
    return flow.credentials


def credentials_to_dict(credentials):
  return {'access_token': credentials.token,
          'refresh_token': credentials.refresh_token,
          'token_uri': credentials.token_uri,
          } 
#--------------------------------API Functions--------------------
