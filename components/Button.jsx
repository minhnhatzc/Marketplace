import { Button as ButtonMui } from '@mui/material';

const Button = ({ btnName, handleClick }) => (
  <ButtonMui
    variant="contained"
    size="medium"
    sx={{ px: 3,
      backgroundColor: '#1976d2 !important',
      borderRadius: 2 }}
    onClick={handleClick}
  >
    {btnName}
  </ButtonMui>
);

export default Button;
