from flask import Blueprint, request, jsonify
from pymongo import MongoClient
from bson import ObjectId
import os

overlays_bp = Blueprint('overlays', __name__)

MONGO_URI = os.environ.get('MONGO_URI', 'mongodb://mongo:27017/rtsp_overlay')
client = MongoClient(MONGO_URI)
db = client.get_default_database()
overlays_collection = db['overlays']

@overlays_bp.route('/', methods=['GET'])
def get_overlays():
    overlays = list(overlays_collection.find())
    for overlay in overlays:
        overlay['_id'] = str(overlay['_id'])
    return jsonify(overlays)

@overlays_bp.route('/', methods=['POST'])
def create_overlay():
    data = request.json
    result = overlays_collection.insert_one(data)
    return jsonify({"_id": str(result.inserted_id)}), 201

@overlays_bp.route('/<id>', methods=['PUT'])
def update_overlay(id):
    data = request.json
    overlays_collection.update_one({'_id': ObjectId(id)}, {'$set': data})
    return jsonify({"msg": "updated"}), 200

@overlays_bp.route('/<id>', methods=['DELETE'])
def delete_overlay(id):
    overlays_collection.delete_one({'_id': ObjectId(id)})
    return jsonify({"msg": "deleted"}), 200