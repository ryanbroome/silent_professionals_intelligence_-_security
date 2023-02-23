from flask import Flask, request, render_template
from flask_debugtoolbar import DebugToolbarExtension
from random import randint, choice, sample
from customers import Customer, customer

app = Flask(__name__)
app.config["SECRET_KEY"] = "supersecretpassword"
debug = DebugToolbarExtension(app)
# todo setup python

# todo

# todo setup virtual environment


@app.route("/")
def home_page():
    """
    returns home page template 
    """
    return render_template("index.html")


@app.route("/contact")
def show_contact():
    """
    uses the story.prompts from the instantiated story 
    """

    return render_template("contact.html")


@app.route("/products")
def show_productsy():
    """
    generates string story from request arguments
    """

    return render_template('products.html')


@app.route("/services")
def show_services():
    """
    generates string story from request arguments
    """

    return render_template('services.html')
