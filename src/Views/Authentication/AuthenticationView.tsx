import { Grid2 } from '@mui/material';
import { FC, PropsWithChildren } from 'react';
import Typography from '@mui/material/Typography';

export const AuthenticationView: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Grid2 container sx={{ mt: 7 }}>
      <Grid2 size={{ md: 4, xs: 0 }} />
      <Grid2 size={{ md: 4, xs: 12 }}>
        <Typography
          id={'authentication-ui-course-title-text'}
          data-testid={'authentication-ui-course-title-text'}
          variant={'h6'}
          sx={{ textAlign: 'center' }}>
          UI Course
        </Typography>
        {children}
      </Grid2>
      <Grid2 size={{ md: 4, xs: 0 }} />
    </Grid2>
  );
};
