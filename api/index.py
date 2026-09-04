from flask import Flask, request, jsonify
import os

app = Flask(__name__)

@app.route('/')
def home():
    return 'D190 Bot is Running'

@app.route('/api/webhook', methods=['POST'])
def webhook():
    return jsonify({'ok': True})

if __name__ == '__main__':
    app.run()
