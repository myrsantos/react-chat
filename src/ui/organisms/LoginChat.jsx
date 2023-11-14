import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import { Button, TextField, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { setSelfIntoStorage, setGroupNameIntoStorage, getGroupNameFromStorage } from '../../helpers/login';
import { GROUP_NAME } from '../../helpers/variable';

export const LoginChat = () => {
  const [name, setName] = useState('')
  const [nameGC, setNameGC] = useState('')
  const [GCExist, setGCExist] = useState(false)

    useEffect(() => {
      setGCExist(!!getGroupNameFromStorage());
      window.addEventListener(GROUP_NAME, (val) => {setGCExist(!!getGroupNameFromStorage())}, false);
    }, []);

  const login = () => {
    setSelfIntoStorage(name);
    !GCExist && setGroupNameIntoStorage(nameGC);
  }

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      minHeight={'100vh'}
    >
      <Grid item xs={12}>
        <Stack spacing={4}>
          <Typography variant="h2" textAlign="center">
            Welcome!
          </Typography>
          <Typography variant="h4" textAlign="center">
            Login to start chating {GCExist ? `in ${getGroupNameFromStorage()} Group Chat!` : ''}!
          </Typography>
          {!GCExist && <TextField
            fullWidth
            label="Chat Group"
            rows={4} onChange={(val)=>setNameGC(val.target.value)}
            placeholder="Name Your Chat Group"
          />}
          <TextField fullWidth label="Name" rows={4} onChange={(val)=>setName(val.target.value)} placeholder="Your Name"/>
          <Button variant="contained" onClick={() => {login()}}>Login</Button>
        </Stack>
      </Grid>
    </Grid>
  );
};
