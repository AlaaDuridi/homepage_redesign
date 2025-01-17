import { Grid } from '@mui/material';
import { APP_STORE_IMAGE, GOOGLE_PLAY_IMAGE } from '../../../constants/layout.ts';
import { BACKEND_IMAGES } from '../../../constants/common.ts';

const MobileApps = () => {
  return (
    <Grid
      container
      direction='row'
      justifyContent='center'
      alignItems='center'
      spacing={2}
      sx={{ mt: 2 }}
    >
      <Grid item>
        <img src={`${BACKEND_IMAGES}${APP_STORE_IMAGE}`} alt='App Store' />
      </Grid>
      <Grid item>
        <img src={`${BACKEND_IMAGES}${GOOGLE_PLAY_IMAGE}`} alt='Google Play' />
      </Grid>
    </Grid>
  );
};

export default MobileApps;
