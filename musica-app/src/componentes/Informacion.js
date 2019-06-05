import React from 'react';

function Informacion(props) {

    if(Object.keys(props.info).length === 0) return null;

    const { strArtistThumb, strGenre, strBiographyES, strFacebook, strTwitter, strLastFMChart } = props.info;
    
    return(
        <div className="card border-light">
            <div className="card-header bg-primary text-light font-weight-bold">
                Información Artista
            </div>
            <div className="card-body">
                <img src={strArtistThumb} alt="Logo Artista"/>
                <p className="card-text">Género: {strGenre}</p>
                <h2 className="card-text text-center">Biografía</h2>
                <p className="card-text">{strBiographyES}</p>
                <p className="card-text">
                    <a href={`http://${strFacebook}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook"></i>
                    </a>
                    <a href={`http://${strTwitter}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href={`${strLastFMChart}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-lastfm"></i>
                    </a>
                </p>
            </div>
        </div>
    )
}

export default Informacion;