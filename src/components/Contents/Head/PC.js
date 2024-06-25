import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";

function DrawerAppBar({ navItems }) {
  return (
    <>
      <Typography
        variant="h6"
        component="div"
        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
      >
        MARUYAMA Blog
      </Typography>
      <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
        {navItems.map(item => (
          <Button key={item.name} sx={{ color: '#fff' }} component={Link} to={item.link}>
            {item.name}
          </Button>
        ))}
      </Box>
    </>
  );
}


export default DrawerAppBar;