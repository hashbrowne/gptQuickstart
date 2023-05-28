import os

import openai
from flask import Flask, redirect, render_template, request, url_for

app = Flask(__name__)
openai.api_key = os.getenv("OPENAI_API_KEY")


@app.route("/", methods=("GET", "POST"))
def index():
    if request.method == "POST":
        genre = request.form["genre"]
        response = openai.Completion.create(
            model="text-davinci-003",
            prompt=generate_prompt(genre),
            temperature=0.6,
        )
        return redirect(url_for("index", result=response.choices[0].text))

    result = request.args.get("result")
    return render_template("index.html", result=result)


def generate_prompt(genre):
    return """Suggest an obscure artist from the genre and one of their popular songs

Genre: Electronic
Artists: Electronic: Boards of Canada - Roygbiv
Genre: {}
Names:""".format(
        genre.capitalize()
    )
