import logo from './logo.svg';
import './App.css';
import {Grommet, Box, Text, Button, Header, Main, Heading} from 'grommet';
import Choice from './Choice';
import FirstStep from './firststep';

function App() {
  const choice = false;
  return (
    <Main>
        {
          choice? <Choice /> : <FirstStep />
        }
      </Main>
  );
}

export default App;
