import Grid from '@mui/material/Grid';
import { TextMessage } from '../molecules/TextMessage';
import { Avatar, Paper } from '@mui/material';

export const ChatBubble = ({ self = false, chat }) => (
  <Paper
    sx={{
      my: 1,
      mx: 'auto',
      p: 2,
    }}
    style={{marginRight: self ? 0 : 100, marginLeft: !self ? 0 : 100,}}
  >
    <Grid
      container
      wrap="nowrap"
      spacing={2}
      direction={self ? 'row-reverse' : 'row'}
    >
      <Grid item>{!self && <Avatar>{chat.name}</Avatar>}</Grid>
      <Grid item xs>
        <TextMessage self={self} chat={chat}/>
      </Grid>
    </Grid>
  </Paper>
);
