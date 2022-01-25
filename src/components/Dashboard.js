import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Dashboard = ({match}) => {
  let history = useHistory();
  return <div>
    <center>
    <h2>Dashboard param: {match.params.name} </h2>
      <button onClick={()=>history.push('/about')}>Go to About with useHistory</button>
    </center>
  </div>;
};

export default Dashboard;
