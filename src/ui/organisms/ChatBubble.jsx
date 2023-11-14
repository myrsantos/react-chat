import Grid from '@mui/material/Grid';
import {TextMessage} from '../molecules/TextMessage';
import { Avatar, Paper } from '@mui/material';

export const ChatBubble = ({self = false}) => (
  <Paper
    sx={{
      my: 1,
      mx: 'auto',
      p: 2,
    }}
  >
    <Grid container wrap="nowrap" spacing={2} direction={self ? 'row-reverse' : 'row'}>
      <Grid item>
        {!self && <Avatar>W</Avatar>}
      </Grid>
      <Grid item xs>
      <TextMessage self={self}/>

      </Grid>
    </Grid>
  </Paper>
)