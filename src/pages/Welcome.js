import breakingBad from '../data/breakingBad.jpeg';
// import {NavLink} from 'react-router-dom';

const Welcome = () => {
  return (
    <div>
      <h1>Welcome To...</h1>
      <img src={breakingBad} alt="breaking bad" style={{width: "100%",}}/>

     {/* <NavLink to="/characters" style={{color: "white", textDecoration: "none", margin: 0, padding: 0}}> <h3>Click to view all Breaking Bad characters</h3></NavLink>; */}

    </div>
  );
};

export default Welcome;
