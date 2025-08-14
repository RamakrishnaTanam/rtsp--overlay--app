import os
from flask import Flask
from overlays.routes import overlays_bp
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": os.environ.get("DOMAIN", "*")}})
app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY', 'supersecretkey')
app.register_blueprint(overlays_bp, url_prefix='/api/overlays')

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000)