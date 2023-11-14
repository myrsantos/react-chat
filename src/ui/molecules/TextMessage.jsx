import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import moment from "moment";

export const TextMessage = ({ self = false, chat }) => (
  <Stack>
    <Grid container justifyContent="space-around">
      <Grid item textAlign="left" xs>
        {!self && (
          <Typography variant="overline" display="block">
            {chat.name}
          </Typography>
        )}
      </Grid>
      <Grid item textAlign="right" xs="auto">
        <Typography variant="overline" display="block">
        {moment(chat.time).format('MMMM Do YYYY, h:mm:ss a')}
        </Typography>
      </Grid>
    </Grid>
    <Typography variant="body2" textAlign="left">
    {chat.message}
    </Typography>
  </Stack>
);
