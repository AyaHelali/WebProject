import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className="home-container">
            <h2>Home</h2>
            <div className="photo-card">
                <h2>Mariposa azul</h2>
                <img src="https://previews.123rf.com/images/dianamk/dianamk1904/dianamk190400007/123239429-mariposa-azul-ilustraci%C3%B3n-de-vector-de-mariposa-ex%C3%B3tica-aislada-sobre-fondo-blanco-morpho-menelaus.jpg" alt="Le splendide papillon morpho bleu captive autant les collectionneurs que les scientifiques. Ses ailes chatoyantes présentent des propriétés physiques et optiques étonnantes qui témoignent de l’ingéniosité de dame Nature. Hélas, l’éclat de cet insecte facilite sa capture dans le but d’étoffer des collections ou de créer des objets décoratifs. Quel dommage de ne pas laisser ce magnifique lépidoptère orner les paysages luxuriants d'Amérique latine." className="photo"/>
                <p className="photo-description">Le splendide papillon morpho bleu captive autant les collectionneurs que les scientifiques. Ses ailes chatoyantes présentent des propriétés physiques et optiques étonnantes qui témoignent de l’ingéniosité de dame Nature. Hélas, l’éclat de cet insecte facilite sa capture dans le but d’étoffer des collections ou de créer des objets décoratifs. Quel dommage de ne pas laisser ce magnifique lépidoptère orner les paysages luxuriants d'Amérique latine.</p>
            </div>
            <div className="photo-card">
                <h2>Fleur de tulipe</h2>
                <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTOrMNz3BHenLXvLrJeh1UzWDK1ZtaXrwG84T65A2LrA3JlI_cU" alt="La tulipe est une fleur très appréciée, omniprésente chez les fleuristes, elle permet d'apporter une touche de couleurs aux bouquets et autres compositions florales. Toutefois, il faut prendre garde à sa signification pour éviter tout impair." className="photo"/>
                <p className="photo-description">La tulipe est une fleur très appréciée, omniprésente chez les fleuristes, elle permet d'apporter une touche de couleurs aux bouquets et autres compositions florales. Toutefois, il faut prendre garde à sa signification pour éviter tout impair.</p>
            </div>
        </div>
    );
};

export default Home;