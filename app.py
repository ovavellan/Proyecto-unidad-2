import os # importamos os

# importar la libreria flask
from flask import Flask, render_template, request


app = Flask(__name__) # Creación de una instancia de la clase Flask
app.debug = False # indicamos que no estamos en modo debug
app._static_folder = os.path.abspath("templates/static/") # indicamos que la carpeta static esta en la carpeta templates


