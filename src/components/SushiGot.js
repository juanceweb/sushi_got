import React from "react";
import NavBar from './NavBar';


const SushiGot = () => {

    return (
        <div>
            <NavBar />
            <div className="App bg_throne text-center pt-5">
                <h1 className="titleFont">SUSHI GOT</h1>
                <h5 className="textFont textpadding">Sushi Got is inspired by the tabletop game Sushi Go! And the story of Fire and Ice!</h5>
                <h5 className="textFont">We felt the game was fun, but the tematic could be improved (though we love sushi!)</h5>
                <h5 className="textFont">Thats how we arrived to the love child of this tabletop game, and the worldwide known series game of Thrones</h5>
            </div>
        </div>
    )
}

export default SushiGot