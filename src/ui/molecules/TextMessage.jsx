import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export const TextMessage = ({ self = false }) => (
  <Stack>
    <Grid container justifyContent="space-around">
      <Grid item textAlign="left" xs>
        {!self && (
          <Typography variant="overline" display="block">
            Name
          </Typography>
        )}
      </Grid>
      <Grid item textAlign="right" xs="auto">
        <Typography variant="overline" display="block">
          1 Nov 2023 10:12 PM
        </Typography>
      </Grid>
    </Grid>
    <Typography variant="body2" textAlign="left">
      body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
      blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
      neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti?
      Eum quasi quidem quibusdam.
    </Typography>
  </Stack>
);
