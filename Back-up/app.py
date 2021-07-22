from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def index():
    return render_template("index.html")


@app.route('/overview')
def overview():
    return render_template("Overview.html")


@app.route('/about_us')
def about_us():
    return render_template("AboutUs.html")


@app.route('/data_viz')
def data_viz():
    return render_template("DataViz.html")


@app.route('/graph_a')
def graph_a():
    return render_template("GraphA.html")


@app.route('/graph_b')
def graph_b():
    return render_template("GraphB.html")


@app.route('/graph_c')
def graph_c():
    return render_template("GraphC.html")


if __name__ == '__main__':
    app.run()
