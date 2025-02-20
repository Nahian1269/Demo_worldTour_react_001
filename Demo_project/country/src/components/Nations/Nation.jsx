import { useState } from "react";
import "./Nation.css";
import PropTypes from 'prop-types';
// import Countries from "../Countries/Countries";

const Nation = ({ country }) => {
  const { name, flags, population, area ,continents , capital ,maps  } = country;
  const [visited, setVisited] = useState(false);
    const handleVisited = () => {
        setVisited(!visited);
    };

    
    
  return (
    <div>
  
    <div className={visited ? 'visited_nations' : 'nation'}>
        <h3>{name.common} </h3>
      <div className="country">
        <div className="flags">
          <img src={flags.png} alt="" />
        </div>
        <div className="details">
          <div className="Cname">
            <div className="population">Population: {population}</div>
            <div className="area"> Area : {area} Sq.km </div>
            <div className="continent"> Continent : {continents} </div>
            <div className="capital"> Capital : {capital} </div>
          </div>
        </div>
      </div>
      <div className="btn">
      <button onClick={() => window.open(maps.googleMaps, '_blank')} className="btn_flag">MAP</button>
      <button onClick={handleVisited}  className="btn_visit">{visited ? 'Visited' : 'visit'}</button>
      
      
    </div>
    </div>
    </div>
  );
};

Nation.propTypes = {
    country: PropTypes.shape({
      name: PropTypes.shape({
        common: PropTypes.string.isRequired,
      }).isRequired,
      flags: PropTypes.shape({
        png: PropTypes.string.isRequired,
      }).isRequired,
      population: PropTypes.number.isRequired,
      area: PropTypes.number.isRequired,
      continents: PropTypes.arrayOf(PropTypes.string).isRequired,
      capital: PropTypes.string.isRequired,
      maps: PropTypes.shape({
        googleMaps: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  };


export default Nation;
