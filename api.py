import flask
import requests
from bs4 import BeautifulSoup
import json

app = flask.Flask(__name__)
app.config["DEBUG"] = True

@app.route('/soundcloud/user/<path:username>')
def soundcloudGetUser(username):
    url = "https://soundcloud.com/"
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.183 Safari/537.36',
        'From': 'spektrel@gmail.com'  # This is another valid field
    }
    page = requests.get(url + username, headers=headers)
    soup = BeautifulSoup(page.content, 'html.parser')
    return str(soup.find_all('script')[-1]).split("data")[9][2:-13]

# @app.route('/instagram', methods=['GET'])
# def api_all():
#     return flask.jsonify(insta)

app.run()
