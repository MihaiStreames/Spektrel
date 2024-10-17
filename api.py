import flask
import requests
from bs4 import BeautifulSoup
import json

app = flask.Flask(__name__)
app.config["DEBUG"] = True

soundcloudUrl = "https://soundcloud.com/"
instagramUrl = "https://instagram.com/"

headers = {
    'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36',
    'From': 'spektrel@gmail.com'  # This is another valid field
}


# Soundcloud User Router
@app.route('/soundcloud/user/<path:username>')
def soundcloudGetUser(username):
    page = requests.get(soundcloudUrl + username, headers=headers)
    soup = BeautifulSoup(page.content, 'html.parser')

    # Bruteforce user data out of page
    response = str(soup.find_all('script')).split("\"data\"")[-1][1:]  # Apparently it's always the last one
    responseJSON = json.loads(response.split(';')[0][0:-2])

    # Clean up the response to a more simple object
    result = {
        "Username": responseJSON["username"],
        "Profile_Picture": responseJSON["avatar_url"],
        "Followers": responseJSON["followers_count"],
        "Following": responseJSON["followings_count"],
        "Tracks": responseJSON["track_count"],
    }
    return result

# Soundcloud Track Router
@app.route('/soundcloud/track/<path:user>/<path:trackname>')
def soundcloudGetTrack(user, trackname):
    page = requests.get(soundcloudUrl + user + "/" + trackname, headers=headers)
    soup = BeautifulSoup(page.content, 'html.parser')

    # Bruteforce track data out of page
    response = str(soup.find_all('script')).split("\"data\"")[-1][1:]
    responseJSON = json.loads(response.split('media')[0][0:-2] + '}') # Same here but weirder

    result = {
        "Plays": responseJSON["playback_count"],
        "Likes": responseJSON["likes_count"],
        "Comments": responseJSON["comment_count"],
        "Reposts": responseJSON["reposts_count"],
        "Downloads": responseJSON["download_count"],
        "Cover": responseJSON["artwork_url"],
        "Title": responseJSON["title"],
    }
    return result


app.run()
