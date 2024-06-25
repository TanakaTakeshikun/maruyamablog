import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Phone from './Head/Phone';
import PC from './Head/PC'
const navItems = [{ name: "test1", link: "https://jp.pornhub.com/" }, { name: "test2", link: "https://www.xvideos.com/lang/japanese" }, { name: "test2", link: "https://missav.com/dm4/ja" }]
function DrawerAppBar() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <Phone navItems={navItems} />
          <PC navItems={navItems} />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default DrawerAppBar;