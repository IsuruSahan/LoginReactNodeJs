import {StyledContainer} from './components/Styles';
import Home from './pages/Home';
import { BrouserRouter as Router, Switch, Route} from 'react-router-dom';



function App() {
  return (

    <Router>
    <StyledContainer>
      <Home/>
    </StyledContainer>
    </Router>


  );
}

export default App;
