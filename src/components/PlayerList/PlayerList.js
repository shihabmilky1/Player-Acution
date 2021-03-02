import React, { useEffect, useState } from 'react';
import fakeData from '../../fakedata/data.json'
import Checkout from '../Checkout/Checkout';
import Player from '../Player/Player';
const PlayerList = () => {
    const [players, setPlayers] = useState([]);
    useEffect(()=>{
        setPlayers(fakeData);
    },[])
    const [addPlayer,setAddPlayer] = useState([]);
    const handleAddPlayer = (Player) => {
        const newPlayers = [...addPlayer,Player];
        setAddPlayer(newPlayers);
    } 
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    {
                        players.map(player => <Player player={player} key={player.id} handleAddPlayer={handleAddPlayer} ></Player>)
                    }
                </div>
                <div className="col-md-4">
                <div className="checkout">
                    <Checkout addPlayer={addPlayer}></Checkout>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlayerList;