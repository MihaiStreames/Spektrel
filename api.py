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
    # Bruteforce get all the data from the user's page
    responseJSON = json.loads(str(soup.find_all('script')[-1]).split("data")[9][2:-13])
    return responseJSON[0]

# Soundcloud Track Router
@app.route('/soundcloud/track/<path:user>/<path:trackname>')
def soundcloudGetTrack(user, trackname):
    page = requests.get(soundcloudUrl + user + "/" + trackname, headers=headers)
    soup = BeautifulSoup(page.content, 'html.parser')
    # Bruteforce get all the data from the user's page
    responseJSON = json.loads(str(soup.find_all('script')[-1]).split("\"data\"")[8][1:-13])
    return responseJSON[0]

# User Instagram Router
# this some g00d code 💋💋💋💋💋💋💋💋💋💋
@app.route('/instagram/user/<path:user>/')
def instagramGetUser(user):
    page = requests.get(instagramUrl + user, headers=headers)
    soup = BeautifulSoup(page.content, 'html.parser')
    
    # Bruteforce get all the data from the user's page
    # theres an error when the user doesnt have more than 12 posts therefore:
    # try for user with less than 12 posts

    try: 
        responseJSON = json.loads(str(soup.find_all('script')[3]).split("\"graphql\"")[1][1:].split(",\"toast_content_on_load\"")[0])
    except:
        # try for user with more than 12 posts
        try:
            responseJSON = json.loads(str(soup.find_all('script')[4]).split("\"graphql\"")[1][1:].split(",\"toast_content_on_load\"")[0])
        # if both fail it means theres no user to begin with so we return not found
        except:
            result = {
                "message": "Error 404: Page not found",
            }
            return result
    
    # Clean up the response to a more simple object
    result = {
        "followers": responseJSON["user"]["edge_followed_by"]["count"],
        "following": responseJSON["user"]["edge_follow"]["count"],
        "media": responseJSON["user"]["edge_owner_to_timeline_media"]["count"],
    }
    return result
app.run()