import flask
import requests
from bs4 import BeautifulSoup
import json

app = flask.Flask(__name__)
app.config["DEBUG"] = True

soundcloudUrl = "https://soundcloud.com/"
instagramUrl = "https://instagram.com/"

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.183 Safari/537.36',
    'From': 'spektrel@gmail.com'  # This is another valid field
}
# User Soundcloud Router
@app.route('/soundcloud/user/<path:username>')
def soundcloudGetUser(username):
    page = requests.get(soundcloudUrl + username, headers=headers)
    soup = BeautifulSoup(page.content, 'html.parser')
    responseArray = json.loads(str(soup.find_all('script')[-1]).split("data")[9][2:-13])
    return responseArray[0]

# Soundcloud Track Router
@app.route('/soundcloud/track/<path:user>/<path:trackname>')
def soundcloudGetTrack(user, trackname):
    page = requests.get(soundcloudUrl + user + "/" + trackname, headers=headers)
    soup = BeautifulSoup(page.content, 'html.parser')
    responseArray = json.loads(str(soup.find_all('script')[-1]).split("\"data\"")[8][1:-13])
    return responseArray[0]

app.run()
