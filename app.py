import os # importamos os

# importar la libreria flask
from flask import Flask, render_template, request


app = Flask(__name__) # Creación de una instancia de la clase Flask
app.debug = False # indicamos que no estamos en modo debug
app._static_folder = os.path.abspath("templates/static/") # indicamos que la carpeta static esta en la carpeta templates



@app.route('/')
def principal():
    """
    Esta función esta encarga de abrir la página principal
    desde donde se ejecutara el html y las funciones que hemos
    programado en javascript
    Returns:
        Retorna la página principal, denomindad index.html
    """
    #Index es nuestra página principal
    return render_template('layouts/principal.html') 

@app.route('/videojuego')
def videojuego():
    """
    Esta función esta encarga de abrir la página principal
    desde donde se ejecutara el html y las funciones que hemos
    programado en javascript
    Returns:
        Retorna la página principal, denomindad index.html
    """
    #Index es nuestra página principal
    return render_template('layouts/index.html') 

# Main del programa
if __name__ == '__main__':
    app.run(debug=True)