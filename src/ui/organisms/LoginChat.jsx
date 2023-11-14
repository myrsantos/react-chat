import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import { Button, TextField, Typography } from '@mui/material';

export const LoginChat = () => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      minHeight={'100vh'}
    >
      <Grid xs={12}>
        <Stack spacing={4}>
          <Typography variant="h2" textAlign="center">
            Welcome!
          </Typography>
          <Typography variant="h4" textAlign="center">
            Login to start chating!
          </Typography>
          <TextField
            fullWidth
            label="Chat Group"
            rows={4}
            placeholder="Name Your Chat Group"
          />
          <TextField fullWidth label="Name" rows={4} placeholder="Your Name" />
          <Button variant="contained">Login</Button>
        </Stack>
      </Grid>
    </Grid>
  );
};
