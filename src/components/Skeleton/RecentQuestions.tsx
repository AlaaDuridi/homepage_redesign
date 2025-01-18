import { FC } from 'react';
import { Grid, Skeleton, useMediaQuery, useTheme } from '@mui/material';

const QuestionSkeleton: FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      {!isMobile ? (
        <Grid
          container
          spacing={4}
          justifyContent='center'
          alignItems='center'
          sx={{
            padding: theme.spacing(3),
            textAlign: isMobile ? 'center' : 'left',
          }}
        >
          {/* Left Column (Text Content) */}
          <Grid item md={6} sm={12} xs={12} container spacing={2} direction='column'>
            {Array.from({ length: 3 }).map((_, index) => (
              <Grid item key={index}>
                <Skeleton variant='text' width='60%' height={30} />
                <Skeleton
                  variant='text'
                  width='30%'
                  height={20}
                  sx={{ marginTop: theme.spacing(1) }}
                />
                <Skeleton
                  variant='text'
                  width='50%'
                  height={20}
                  sx={{ marginTop: theme.spacing(1) }}
                />
              </Grid>
            ))}
          </Grid>

          {/* Right Column (Image) */}
          <Grid item md={6} sm={12} xs={12} container justifyContent='center' alignItems='center'>
            <Skeleton
              variant='rectangular'
              width={isMobile ? '80%' : 300}
              height={isMobile ? 200 : 300}
              sx={{ borderRadius: theme.spacing(1) }}
            />
          </Grid>
        </Grid>
      ) : (
        <Grid
          container
          spacing={2}
          justifyContent='center'
          alignItems='center'
          sx={{
            padding: theme.spacing(3),
            textAlign: isMobile ? 'center' : 'left',
          }}
        >
          {/* Image Skeleton */}
          <Grid item md={6} sm={12} xs={12} container justifyContent='center' alignItems='center'>
            <Skeleton
              variant='rectangular'
              width='80%'
              height={200}
              sx={{ borderRadius: theme.spacing(1) }}
            />
          </Grid>

          {/* Text Skeleton */}
          <Grid
            item
            md={6}
            sm={12}
            justifyContent='center'
            alignItems='center'
            xs={12}
            container
            spacing={2}
            direction='column'
          >
            <Skeleton variant='text' width='60%' height={30} />
            <Skeleton variant='text' width='50%' height={20} />
            <Skeleton variant='text' width='80%' height={20} />
            <Skeleton variant='text' width='40%' height={20} />
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default QuestionSkeleton;
