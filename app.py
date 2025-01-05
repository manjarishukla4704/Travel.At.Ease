from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/recommend', methods=['POST'])
def recommend():
    # Static response for testing
    recommendations = [
        {"Destination": "Paris", "Budget": 5000, "TravelMode": "Flight", "Season": "Winter"},
        {"Destination": "New York", "Budget": 7000, "TravelMode": "Flight", "Season": "Autumn"},
        {"Destination": "Tokyo", "Budget": 9000, "TravelMode": "Train", "Season": "Spring"}
    ]
    return jsonify(recommendations)

if __name__ == '__main__':
    app.run(debug=True)
