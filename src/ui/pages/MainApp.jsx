import { useEffect, useState } from 'react';
import { LoginChat } from '../organisms/LoginChat';
import { ChatContainer } from '../organisms/ChatContainer';
import { Container, Typography } from '@mui/material';
import { SELF_DATA } from '../../helpers/variable';
import { getSelfFromStorage, getGroupNameFromStorage } from '../../helpers/login';

export const MainApp = () => {
  const [SelfExist, setSelfExist] = useState(false)

  useEffect(() => {
    setSelfExist(!!(getSelfFromStorage().id));
    window.addEventListener(SELF_DATA, (val) => {setSelfExist(!!(getSelfFromStorage().id))}, false);
  }, []);

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" textAlign="left" marginTop={4}>
        {!!getGroupNameFromStorage() ? `${getGroupNameFromStorage()} Group Chat!` : ''}
      </Typography>
      {SelfExist ? <ChatContainer/>: <LoginChat />}
    </Container>
  );
};
