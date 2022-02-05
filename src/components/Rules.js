import React from "react";
import NavBar from './NavBar';
import Card from './Card';
import tar from "../media/tar.png";
import cou from "../media/cou.png"
import sta from "../media/sta.png"
import fig from "../media/fig.png"
import ban from "../media/ban.png"
import lan from "../media/lan.png"
import dra from "../media/dra.png"

const Rules = () => {

    let targaryen = {colour: "bg-danger", 
                    name: "Daenerys Targaryen",
                    img: "dany_targaryen.jpg",
                    banner: "targaryen_logo.png",
                    quote: '"I’m not going to stop the wheel. I’m going to break the wheel."',
                    point: "A Targaryen card with no Dragon on it scores nothing." }

    return (
        <div>
            <NavBar />
            <div className="App got_bg text-center pt-5 container-fluid">
                <h1 className="titleFont">RULES</h1>
                        <div className="card container-fluid p-3 m-1 bgGold">
                            <div className="row">
                                <div className="col-6">
                                    <div className="card bgSilver">
                                        <div className="card-body">
                                            <h3 className="card-title">CONTENTS</h3>
                                            <h4>108 Cards</h4>
                                            <table className="table table-dark table-borderless table-sm">
                                                <tbody>
                                                    <tr>
                                                        <td>14 x</td>
                                                        <td>Stark</td>
                                                        <td>10 x</td>
                                                        <td>Drogon</td>
                                                    </tr>
                                                    <tr>
                                                        <td>14 x</td>
                                                        <td>Lannister</td>
                                                        <td>5 x</td>
                                                        <td>Vyserion</td>
                                                    </tr>
                                                    <tr>
                                                        <td>14 x</td>
                                                        <td>Houses</td>
                                                        <td>5 x</td>
                                                        <td>Rhegal</td>
                                                    </tr>
                                                    <tr>
                                                        <td>12 x</td>
                                                        <td>2* Fighters</td>
                                                        <td>10 x</td>
                                                        <td>Gods</td>
                                                    </tr>
                                                    <tr>
                                                        <td>8 x</td>
                                                        <td>3* Fighters</td>
                                                        <td>6 x</td>
                                                        <td>Targaryen</td>
                                                    </tr>
                                                    <tr>
                                                        <td>6 x</td>
                                                        <td>1* Fighters</td>
                                                        <td>4 x</td>
                                                        <td>Counsil</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <h3 className="card-title">SETUP</h3>
                                            <ul>
                                                <li>
                                                Shuffle all the cards well and deal the following, depending on the number of players:
                                                </li>
                                            </ul>
                                            <table className="table table-dark table-borderless table-sm">
                                                <tbody>
                                                    <tr>
                                                        <td>2 player game</td>
                                                        <td>10 cards to each player</td>
                                                    </tr>
                                                    <tr>
                                                        <td>3 player game</td>
                                                        <td>9 cards to each player</td>
                                                    </tr>
                                                    <tr>
                                                        <td>4 player game</td>
                                                        <td>8 cards to each player</td>
                                                    </tr>
                                                    <tr>
                                                        <td>5 player game</td>
                                                        <td>7 cards to each player</td>
                                                    </tr>
                                                </tbody> 
                                            </table>   
                                            <h6>(Hold your cards in your hand, secret from opponents.)</h6>
                                            <ul>
                                                <li>
                                                    Place the rest of the cards in a face-down pile in the center of the playing area
                                                </li>
                                                <li>
                                                    Grab a pice of paper and pencil to keep score and designate one player as the scorekeeper
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="card bgBrass">
                                        <div className="card-body">
                                            <h3 className="card-title">HOW TO PLAY</h3>
                                            <h4>PLAYING AROUND</h4>
                                            <p>The game takes place over 3 rounds. To start a round, all players simultaneously choose any 1 card from their hands that they would like to keep and place it face-down in front of them. When each player has done this, everyone reveals their chosen cards.
                                            </p>
                                            <p>After revealing cards, pass your remaining hand face-down to the player on your left. Everyone picks up their new hands and the next turn begins. You now have a new and smaller hand to choose from.
                                            </p>
                                            <p>
                                            NOTE: Face-up cards remain with you until the end of the round, when they are scored. It is helpful to group cards of the same type together.
                                            </p>
                                            <div className="row justify-content-center">
                                                <Card imagen={tar} size={"102%"}/>
                                                <div className="col-8 px-5">
                                                    <h4 className="pt-3">USING TARGARYEN</h4>
                                                    <p className="pt-3">If you choose a squid, salmon or egg nigiri card, and already have a wasabi card in front of you then this nigiri must be placed on top of the wasabi. This is to show that the nigiri has been dipped in wasabi and has tripled in value!
                                                    </p>
                                                    <p className="pt-3">NOTE: You may have multiple wasabi cards in front of you but only 1 nigiri card may be placed on each wasabi card.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card bgGold container-fluid p-3 m-1">
                            <div className="row">
                                <div className="col-6">
                                    <div className="card bgBrass">
                                        <div className="row justify-content-center pt-3">
                                            <Card imagen={cou} size={"102%"}/>
                                            <div className="col-8 px-5">
                                                <h4 className="pt-3">USING COUNSIL</h4>
                                                <p className="pt-3">If you already have a chopsticks card in front of you, you may take 2 sushi cards on a future turn!
                                                </p>
                                                <p className="pt-3">Here’s how it works: Choose the first card you would like from your hand as usual. Before everyone else reveals their cards, call out “Sushi Go!” and take a second card from your hand, also placing it face-down on the table. Then all players reveal their cards.
                                                </p>
                                                <p>
                                                Before passing hands, put the chopsticks card back into your hand. This means it will now be passed on, and other players may take it to use again.
                                                </p>
                                                <p>
                                                NOTE: You may have multiple chopsticks cards in front of you but may only use 1 per turn.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                        <h4 className="pt-1">ENDING A ROUND</h4>
                                            <p>When the final remaining card of each hand is passed on, simply place it face-up with the other cards you have collected. (Often this final card won’t be of much use, but sometimes an unfortunate player will be forced to leave you with something valuable!)
                                            </p>
                                            <p>Now score the cards you have collected, as follows:
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="card bgSilver">
                                        <div className="card-body">
                                            <h3 className="card-title">SCORING</h3>
                                            <div className="row justify-content-center">
                                                <Card imagen={fig} size={"85%"}/>
                                                <div className="col-8 px-5">
                                                    <h4 className="pt-3">FIGHTERS</h4>
                                                    <p className="pt-3">Each player adds up the maki roll icons at the top of all their maki roll cards. The player with the most icons scores 6 points. If multiple players tie for the most, they split the 6 points evenly (ignoring any remainder) and no second place points are awarded.
                                                    </p>
                                                    <p className="pt-3">The player with the second most icons scores 3 points. If multiple players tie for second place, they split the points evenly (ignoring any remainder).
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="row justify-content-center">
                                            <div className="col-8 px-5">
                                                    <h4 className="pt-5">HOUSES</h4>
                                                    <p className="pt-3">The more dumpling cards you have, the more points you will score, as follows:
                                                    </p>
                                                    <table className="table table-dark table-borderless table-sm">
                                                        <tbody>
                                                            <tr>
                                                                <td>Houses:</td>
                                                                <td>1</td>
                                                                <td>2</td>
                                                                <td>3</td>
                                                                <td>4</td>
                                                                <td>5</td>
                                                                <td>or more</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Points:</td>
                                                                <td>1</td>
                                                                <td>3</td>
                                                                <td>6</td>
                                                                <td>10</td>
                                                                <td>15</td>
                                                                <td> </td>
                                                            </tr>
                                                        </tbody> 
                                                    </table>   
                                                </div>
                                                <Card imagen={ban} size={"90%"}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card bgGold container-fluid p-3 m-1">
                            <div className="row">
                                <div className="col-6">
                                    <div className="card bgSilver">
                                        <div className="card-body">
                                            <div className="row justify-content-center">
                                                <Card imagen={sta} size={"105%"}/>
                                                <div className="col-8 px-5">
                                                    <h4 className="pt-3">STARK</h4>
                                                    <p className="pt-3">A set of 2 tempura cards scores 5 points. A single tempura card is worth nothing. You may score multiple sets of tempura in a round.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="row justify-content-center">
                                                <div className="col-8 px-5">
                                                    <h4 className="pt-5">LANNISTER</h4>
                                                    <p className="pt-5">A set of 3 sashimi cards scores 10 points. A single sashimi card or a set of only 2 is worth nothing. You may score multiple sets of sashimi in a round, although this is very hard to do!
                                                    </p>
                                                </div>
                                                <Card imagen={lan} size={"105%"}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="card bgBrass">
                                        <div className="card-body">
                                            <div className="row justify-content-center">
                                                <Card imagen={tar} size={"70%"}/>
                                                <Card imagen={dra} size={"70%"}/>
                                                <div className="col-4 px-5">
                                                    <h4 className="pt-5">TARGARYEN AND DRAGONS</h4>
                                                    <p className="pt-5">Drogon scores 3 points. If on top of a targaryen card it scores 9 points.
                                                    </p>
                                                    <p>Vyserion scores 2 points. If on top of a targaryen card it scores 6 points.
                                                    </p>
                                                    <p>Rhegal scores 1 point. If on top of a targaryen card it scores 3 points.</p>
                                                    <p>A targaryen card alone scores nothing.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="row justify-content-center pt-2">
                                                <Card imagen={cou} size={"70%"}/>
                                                <div className="col-8 px-5">
                                                    <h4 className="pt-5">COUNSIL</h4>
                                                    <p className="pt-5">A chopsticks card scores nothing.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    )
}

export default Rules