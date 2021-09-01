// import React from 'react';

// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import RaisedButton from 'material-ui/RaisedButton';
// import TextField from 'material-ui/TextField';


// import Button from '@material-ui/core/Button';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
// import Grid from '@material-ui/core/Grid';
// import Box from '@material-ui/core/Box';
// import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';
// import Container from '@material-ui/core/Container';

// const useStyles = makeStyles((theme) => ({
//     paper: {
//       marginTop: theme.spacing(8),
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center',
//     },
//     form: {
//       width: '100%',
//       marginTop: theme.spacing(1),
//     },
//     submit: {
//       margin: theme.spacing(3, 0, 2),
//     },
//   }));


// // class LoginPage extends React.Component {
// // constructor(props){
// //   super(props);
// //   this.state={
// //   username:'',
// //   password:''
// //   }
// //  }
// export default function LoginPage() {
//     const classes = useStyles();
   
//     return (
//     <Container component="main" maxWidth="xs">
//       <CssBaseline />
//       <div className={classes.paper}>
//         <MuiThemeProvider>
            
//           <div>
//             <Typography component="h4" variant="h6">
//                 Open doors with Accordio
//             </Typography>

//         <form className={classes.form} noValidate>     
//            <TextField
//              variant="outlined"
//              margin="normal"
//              required
//              fullWidth
//              id="email"
//              label="Email Address"
//              name="email"
//             //  autoComplete="email"
//              autoFocus
//              hintText="Enter your Email"
//              floatingLabelText="Enter your email"
//             //  onChange = {(event,newValue) => this.setState({username:newValue})}
//              />
//            <br/>
//              <TextField
//                variant="outlined"
//                margin="normal"
//                required
//                fullWidth
//                name="password"
//                label="Password"
//                type="password"
//             //    autoComplete="current-password"
//                hintText="Enter your Password"
//                floatingLabelText="Password"
//             //    onChange = {(event,newValue) => this.setState({password:newValue})}
//                />
//              <br/>
//              {/* <FormControlLabel
//                 control={<Checkbox value="remember" color="primary" />}
//                 label="Remember me"
//             /> */}
//              <Grid container>
//                 <Grid item xs>
//                     <Link href="#" variant="body2">
//                         Forgot password?
//                     </Link>
//                 </Grid>
//                 {/* <Grid item>
//                     <Link href="#" variant="body2">
//                         {"Don't have an account? Create One"}
//                     </Link>
//                 </Grid> */}
//             </Grid>
//             </form>
//         </div>

//              <br/>
//              <RaisedButton 
//                 type="submit"
//                 fullWidth
//                 variant="contained"
//                 color="primary"
//                 label="Continue" 
//                 primary={true} 
//                 // style={style} 
//                 // onClick={(event) => this.handleClick(event)} />
//                 />
//             <br/>
//             <center>Or</center>
//             <br/>
//             <RaisedButton 
//                 type="submit"
//                 fullWidth
//                 variant="contained"
//                 color="white"
//                 label="Continue with Google" 
//                 primary={true} 
//                 // style={style} 
//                 // onClick={(event) => this.handleClick(event)}/>
//                 />
//          </MuiThemeProvider>
//       </div>
//     </Container>
//     );
//   }

// // const style = {
// //  margin: 15,
// // };
// // export default LoginPage;


import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="https://material-ui.com/">
//         Accordio
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        
        <Typography component="h1" variant="h6">
          Open doors with Accordio
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          {/* <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          /> */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Continue
          </Button>

          <br/>
            <center>Or</center>
           {/* <br/> */}
          <Button 
                type="submit"
                fullWidth
                variant="contained"
                color="white"
                className={classes.submit}
                label="Continue with Google" 
                // primary={true} 
                // style={style} 
                // onClick={(event) => this.handleClick(event)}/>
            >
                Continue with Google
            </Button>
            
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Create One"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        {/* <Copyright /> */}
      </Box>
    </Container>
  );
}

