import React,{ useState, useEffect } from 'react';
import axios from 'axios';
import './response.css';

//function to retrieve data and store in an array
const PokemonGetter = () => {
    const [pokemon, setPokemon] = useState('');
    const [pkmnData, setPkmnData] = useState([]);
    const [pkmnType, setPkmnType] = useState("");
    
    const getPokemon = async () => {
        const array = [];
        try {
            const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
            const res = await axios.get(url);
            array.push(res.data);
            setPkmnType(res.data.types[0].type.name);
            setPkmnData(array);
            console.log(res);
        } catch (e) {
            console.log(e);
        }

    };

    const handleChange = (e) => {
        setPokemon(e.target.value.toLowerCase())
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        getPokemon();
    }
    useEffect(() => {
        getPokemon();
    }, []);

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    <input
                        type="text"
                        onChange={handleChange}
                        placeholder="Enter Pokemon Name"
                        />
                </label>
            </form>
            {pkmnData.map((data) => {
                return(
                    <div className="container">
                        <div className="divTable">
                            <div className="divTableBody">
                                <h1> {data.name.toUpperCase()}</h1>
                                        <div className="label">
                                            <h3> Default </h3>
                                            <h3> Shiny </h3>
                                        </div>
                                    <div className="sprites">
                                        <img src={data.sprites["front_default"]} alt=""/>
                                        <img src={data.sprites["back_default"]} alt=""/>
                                        <img src={data.sprites["front_shiny"]} alt=""/>
                                        <img src={data.sprites["back_shiny"]} alt=""/>
                                    </div>
                                <div className="divTableRow">
                                    <div className="divTableCell">Types</div>
                                    <div className="divTableCell">{pkmnType}</div>
                                </div>
                                <div className="divTableRow">
                                    <div className="divTableCell">Height</div>
                                    <div className="divTableCell">{" "}{Math.round(data.height * 3.9)} " </div>
                                </div>
                                <div className="divTableRow">
                                    <div className="divTableCell">Weight</div>
                                    <div className="divTableCell">{" "}{Math.round(data.weight / 4.3)} lbs</div>
                                </div>
                                <div className="divTableRow">
                                    <div className="divTableCell">Base Experience</div>
                                    <div className="divTableCell">{data.base_experience}</div>
                                </div>
                                <div className="bottom-spacing"></div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    );
};

export default PokemonGetter;


