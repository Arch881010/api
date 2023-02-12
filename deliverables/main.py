try:
    from flask import jsonify, Flask
except:
    input("""You are about to download flask, as it was unable to be imported/located. Press Enter after clicking near this text; otherwise kill the terminal. """)
    import os
    os.system("pip install flask")
    from flask import jsonify, Flask
try:
    apikey = open("deliverables/apikey.txt","r").read()
except:
    apikey = 0
app = Flask(__name__)

@app.route(f'/data|{apikey}')
def data():
    data = open("deliverables/data.json","r").read()
    return data

@app.route('/')
def home():
    a="""<title>Basic Title</title>
    <style> body {
        color: white;
        background-color: black;
        font: message-box;
    }
    </style>
    <h1>Basic Page</h1><br>
    <b1>Basic Text</b1>"""
    return a

if __name__ == '__main__':
    app.run(host="0.0.0.0")
#Run this for your server to start