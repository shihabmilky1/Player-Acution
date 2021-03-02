import React from 'react';
import './Player.css'
const Player = (props) => {
    const { first_name, last_name, img, age, national, current_club, salary } = props.player;
    return (
        <div className="players-container">
            <div className="player-list">
             
                        <div className="card mb-3 mt-3 custom-card shadow" style={{maxWidth: '700px'}} >
                        <div className="row gy-3">
                            <div className="col-md-5">
                            <img src={img} className="img-fluid h-100 img-modify"alt="..."/>
                            </div>
                            <div className="col-md-7">
                            <div className="card-body text-left">
                                <h5 className="card-title">Name: {first_name} {last_name}</h5>
                                <p className="card-text">Age : {age}</p>
                                <p className="card-text">National : {national}</p>
                                <p className="card-text">Current Club : {current_club}</p>
                                <p className="card-text">Salary : {salary}</p>
                                <button onClick={() => props.handleAddPlayer(props.player)} className="btn btn-info">Add Team</button>
                            </div>
                            </div>
                        </div>
                        </div>
            </div>
        </div>
    );
};

export default Player;