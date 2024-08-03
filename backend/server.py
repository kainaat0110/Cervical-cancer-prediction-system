from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import pandas as pd

app = Flask(__name__)
CORS(app)  # Add this line to enable CORS for all routes

# Path to the downloaded model file on your local machine
model_file_path = '/home/kainaat/Downloads/RandomForestModel.pkl'

# Load the model
RandomForest_model = joblib.load(model_file_path)

@app.route('/predict', methods=['POST'])
def predict():
    # Get the user inputs from the request body
    user_inputs = request.json

    # Prepare input data from user inputs
    input_data = {
        'Age': [user_inputs['age']],
        'Smoking': [user_inputs['smoking']],
        'Pregnancies': [user_inputs['pregnancies']],
        'DX:HPV': [user_inputs['dx_hpv']],
        'First intercourse': [user_inputs['first_intercourse']],
        'Hinselmann': [user_inputs['hinselmann']],
        'Schiller': [user_inputs['schiller']],
        'Citology': [user_inputs['citology']],
        'Biopsy': [user_inputs['biopsy']],
        'Oral Contraceptives': [user_inputs['oral_contraceptives']]
    }

    # Convert input data to DataFrame
    input_df = pd.DataFrame(input_data)

    # Make predictions using the loaded model
    predictions = RandomForest_model.predict(input_df)

    # Convert predictions to a list and return as JSON
    predictions_list = predictions.tolist()
    return jsonify({'predictions': predictions_list})

if __name__ == '__main__':
    app.run(debug=True, port=8001)
