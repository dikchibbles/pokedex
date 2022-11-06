import React from "react";
import "../styles/Pokedex.css";
import { 
    fetchRandPokemon, 
    turnScreenOn, 
    turnScreenOff, 
    saveCurPokemon,
    fetchSpecificPokemon,
    searchPokemon
} from "../actions";
import { connect } from "react-redux";

class Pokedex extends React.Component {
    constructor (props) {
        super(props);

        this.inputRef = React.createRef(null);
    }

    componentDidMount() {
        this.props.fetchRandPokemon();
        this.props.saveCurPokemon(this.props.pokemon.id);
    }

    renderPokemon = () => {
        return !this.props.pokemon.sprites ? null : this.props.pokemon.sprites.front_default;
    }

    screenOnOrOff = () => {
        if(this.props.screen === 'block') {
            this.props.turnScreenOff();
        } else {
            this.props.turnScreenOn()
        }
    }

    handleRightArrowClick = () => {
        this.props.saveCurPokemon(this.props.pokemon.id)
        this.props.fetchRandPokemon();
    }

    handleLeftArrowClick = () => {
        this.props.fetchSpecificPokemon(this.props.prevPokemon);
    }

    createBlueBtnGrid = () => {
        const table = [];
        for (let i=0; i < 10; i++) {
            table.push(<div className="blue-btn" key={i}></div>);
        }
        return table;
    }

    onPokemonSearch = (e) => {
        e.preventDefault();
        this.props.searchPokemon(this.inputRef.current.value);
    }

    render() {
        return (
            <div className="pokedex-container">
                <div className="pokedex">
                    <div className="pokedex-top">
                        <div className="top-blue-light">
                            <div className="top-blue-light-2"></div>
                        </div>
                        <div className="top-three-dots">
                            <i className="fa-solid fa-circle fa-sm top-lights-red"></i>
                            <i className="fa-solid fa-circle fa-sm top-lights-yellow"></i>
                            <i className="fa-solid fa-circle fa-sm top-lights-green"></i>
                        </div>
                    </div>
                    <div className="pokedex-monitor">
                        <div className="pokedex-screen-lights">
                            <i className="fa-solid fa-circle fa-2xs pokedex-light"></i>
                            <i className="fa-solid fa-circle fa-2xs pokedex-light"></i>
                        </div>
                        <div className="pokedex-screen">
                            <div className="pokedex-pokemon" style={{display: this.props.screen, backgroundImage: `url(${this.renderPokemon()})`}}></div>
                        </div>
                        <div className="pokedex-screen-tools">
                            <i className="fa-solid fa-circle pokedex-light turn-btn" onClick={this.screenOnOrOff}></i>
                            <i className="fa-solid fa-bars"></i>                        
                        </div>
                    </div>
                    <div className="pokedex-tools">
                        <div className="pokedex-tools-dot">
                            <i className="fa-solid fa-circle fa-2xl tools-dot"></i>
                        </div>
                        <div className="pokedex-tools-screen">
                            <div className="pokedex-tools-screen-line">
                                <div className="screen-line red"></div>
                            </div>
                            <div className="pokedex-tools-screen-line">
                                <div className="screen-line blue"></div>
                            </div>
                            <div className="tools-screen">
                                <div className="tools-green-screen">
                                </div>
                            </div>
                        </div>
                        <div className="pokedex-tools-arrows">
                            <div className="arrows-up tools-arrow"></div>
                            <div onClick={this.handleRightArrowClick} className="arrows-right tools-arrow"></div>
                            <div className="arrows-down tools-arrow"></div>
                            <div onClick={this.handleLeftArrowClick} className="arrows-left tools-arrow"></div>
                            <div className="arrows-middle tools-arrow"></div>
                        </div>
                    </div>
                </div>
                <div className="pokedex right-side">
                    <form onSubmit={this.onPokemonSearch}>
                        <input ref={this.inputRef} type="text" placeholder={this.props.pokemon.name} className="right-side-black-screen"></input>
                    </form>
                    <div className="right-side-blue-buttons">
                        {this.createBlueBtnGrid()}
                    </div>
                    <div className="right-side-random-btns">
                        <div className="random-white-btns">
                            <div className="random-white-btn"></div>                        
                            <div className="random-white-btn"></div>
                        </div>
                        <div className="random-other-btns">
                            <div className="random-two-black-btns">
                                <div className="random-black-btn"></div>
                                <div className="random-black-btn"></div>
                            </div>
                            <div className="random-yellow-btn">
                                <div className="rnd-yel-btn"></div>
                            </div>
                        </div>
                    </div>
                    <div className="right-side-two-black-screens">
                        <div className="right-side-black-screen"></div>
                        <div className="right-side-black-screen"></div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { 
        pokemon: state.pokemon,
        prevPokemon: state.prevPokemon.id,
        screen: state.screen.isOn
    }
}

export default connect(mapStateToProps, { 
    fetchRandPokemon, 
    turnScreenOff, 
    turnScreenOn,
    saveCurPokemon,
    fetchSpecificPokemon,
    searchPokemon
})(Pokedex);


