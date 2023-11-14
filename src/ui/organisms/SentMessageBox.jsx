import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import { useState } from 'react';
import { Button, TextField } from '@mui/material';
import {Send} from '@mui/icons-material';

export const SentMessageBox = ({sendMsg}) => {
  const [text, setText] = useState('');

  return (
    <Stack>
      <Grid container justifyContent="space-around" alignContent="flex-start">
        <Grid item textAlign="left" xs>
          <TextField  
            fullWidth
            id="outlined-multiline-static"
            label="Send Message"
            multiline
            onChange={(val) => setText(val.target.value)}
            rows={4}
            placeholder="Type your message here"
          />
        </Grid>
        <Grid item textAlign="right" xs="auto">
        <Button style={{marginLeft: "10px"}} onClick={() => sendMsg(text)} variant="contained" endIcon={<Send />}>
          Send
        </Button>
        </Grid>
      </Grid>
    </Stack>
  )
}