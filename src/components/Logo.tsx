import React, { FC } from 'react';
import { Typography, useTheme } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
interface LogoProps {}
const Logo: FC<LogoProps> = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  return (
    <Typography onClick={()=>navigate("/")} fontWeight="700" fontSize="1.7rem" style={{ cursor: 'pointer' }}>
      Movie<span style={{ color: theme.palette.primary.main }}>Flex</span>
    </Typography>
  );
};
export default Logo;