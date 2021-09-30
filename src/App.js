import logo from './logo.svg';
import './App.css';
import {Grommet, Box, Text, Button, Header, Main, Heading} from 'grommet';
import Choice from './Choice';
import FirstStep from './firststep';
import SecondStep from './secondstep';

function App() {
  const choice = false;
  // <SecondStep />
  return (
    <Main>
        {
          choice? <Choice /> : <SecondStep />
        }
      </Main>
  );
}

export default App;
