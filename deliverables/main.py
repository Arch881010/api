try:
    from flask import jsonify, Flask
except:
    import os
    os.system("pip install flask")
    from flask import jsonify, Flask
try:
    apikey = open("deliverables/apikey.txt","r").read()
except:
    apikey = 0
app = Flask(__name__)

@app.route(f'/data{apikey}')
def list_of_books():
    books = open("deliverables/data.json","r").read()
    return books
@app.route('/')
def home():
    a="""<h1>Test</h1>"""
    return a
if __name__ == '__main__':
    app.run()
#Run this for your server to start