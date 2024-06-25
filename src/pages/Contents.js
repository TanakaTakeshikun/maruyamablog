import Head from '../components/Contents/Head';
import Box from '@mui/material/Box';

function Contents() {
  return (
    <>
    <Head />
    <Box component="main" sx={{ p: 6 }}>
    <h1>ソースコード：<a href='https://github.com/TanakaTakeshikun/maruyamablog'>Github</a><br/>作成中...</h1>
    </Box>
    </>
  );
}

export default Contents;