import React from 'react';

const Checkout = (props) => {
  const checkOutPlayer = props.addPlayer;
  const totalPlayer = checkOutPlayer.length;
  let total=0;
  for (let i = 0; i < checkOutPlayer.length; i++) {
    const SinglePlayer = checkOutPlayer[i];
    total = total + SinglePlayer.salary;
  }
    return (
        <div>
        <table className="table table-striped table-hover mt-5">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Salary</th>
    </tr>
  </thead>
  <tbody>
      {
        checkOutPlayer.map(player=><tr><td>{player.first_name} {player.last_name}</td><td>${player.salary/1000000}M</td></tr>)
      }
  </tbody>
</table>
      <div className="mt-5">
        <h5>Total Player Added : {totalPlayer}</h5>
        <h5>Total Salary : ${total / 1000000}M</h5>
      </div>
        </div>
    );
};

export default Checkout;