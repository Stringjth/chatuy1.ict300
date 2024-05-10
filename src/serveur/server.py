from flask import Flask, request, jsonify
from google.cloud import dialogflow
import os
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app, resources={r"/webhook": {"origins": "http://localhost:5173"}})
@app.route('/webhook', methods=['POST'])
def webhook():
    request_json = request.get_json()
    query = request_json['query']
    response = detect_intent_texts(query)
    response_json = jsonify(response)
    response_json.headers.add('Access-Control-Allow-Origin', '*')  # Autoriser toutes les origines
    return response_json

def detect_intent_texts(query):
    # Chemin relatif vers le fichier dialogflow.json
    dialogflow_json_path = "./dialogflow.json"

    # Vérifie si le fichier dialogflow.json existe dans le dossier courant
    if os.path.exists(dialogflow_json_path):
        os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = dialogflow_json_path
    else:
        print("Le fichier dialogflow.json n'a pas été trouvé.")
    session_client = dialogflow.SessionsClient.from_service_account_json('dialogflow.json')
    session = session_client.session_path('mtbot-pqip', 'unique-session-id')
    text_input = dialogflow.TextInput(text=query, language_code='fr-FR')
    query_input = dialogflow.QueryInput(text=text_input)
    response = session_client.detect_intent(session=session, query_input=query_input)
    return response.query_result.fulfillment_text

if __name__ == '__main__':
    app.run(debug=True)
