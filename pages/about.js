// import React from 'react';
// import Container from '@material-ui/core/Container';
// import Typography from '@material-ui/core/Typography';
// import Box from '@material-ui/core/Box';
// import Button from '@material-ui/core/Button';
// import ProTip from '../src/ProTip';
// import Link from '../src/Link';
// import Copyright from '../src/Copyright';

// export default function About() {
//   return (
//     <Container maxWidth="sm">
//       <Box my={4}>
//         <Typography variant="h4" component="h1" gutterBottom>
//           Next.js example
//         </Typography>
//         <Button variant="contained" color="primary" component={Link} naked href="/">
//           Go to the main page
//         </Button>
//         <ProTip />
//         <Copyright />
//       </Box>
//     </Container>
//   );
// }


import React from 'react';
import Link from 'next/link';

/* middleware */
import {
  absoluteUrl,
  getAppCookies,
  verifyToken,
  setLogout,
} from '../middleware/utils';

/* components */
import Layout from '../components/layout/Layout';

export default function About(props) {
  const { profile } = props;

  function handleOnClickLogout(e) {
    setLogout(e);
  }

  return (
    <Layout title="Next.js with JWT Authentication | About Page">
      <div className="container">
        <main>
          <h1 className="title">About Page</h1>
          {!profile ? (
            <a href="/">Login to continue</a>
          ) : (
            <div>
              <div style={{ margin: '.5rem 0rem' }}>
                <Link href={{ pathname: '/' }}>
                  <a style={{ marginRight: '.75rem' }}>&bull; Home Page</a>
                </Link>
                <a href="#" onClick={e => handleOnClickLogout(e)}>
                  &bull; Logout
                </a>
              </div>
              <div style={{ textAlign: 'left' }}>
                <fieldset>
                  <legend>
                    <h3>Your Profile</h3>
                  </legend>
                  <h4>ID: {profile.id}</h4>
                  <h4>Email: {profile.email}</h4>
                  <h4>Created: {profile.createdAt}</h4>
                </fieldset>
              </div>
            </div>
          )}
        </main>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const { req } = context;
  const { origin } = absoluteUrl(req);

  const baseApiUrl = `${origin}/api/about`;

  const { token } = getAppCookies(req);
  const profile = token ? verifyToken(token.split(' ')[1]) : '';

  return {
    props: {
      baseApiUrl,
      profile,
    },
  };
}
