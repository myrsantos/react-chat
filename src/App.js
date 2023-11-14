import './App.css';

import {ChatContainer} from "./ui/organisms/ChatContainer";
import { Container } from '@mui/material';

function App() {
  return (
    <div className="App">
      <Container maxWidth="sm" >
        <ChatContainer/>
      </Container>
    </div>
  );
}

export default App;
