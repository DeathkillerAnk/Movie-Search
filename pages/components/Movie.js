import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      margin: 'auto',
      maxWidth: 500,
    },
    image: {
      width: 128,
      height: 128,
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
    },
}));


// export default class Movie extends React.Component {
//     constructor(props) {
//         super(props);

//         this.onSubmit = this.onSubmit.bind(this);
//     }

//     onSubmit() {
//         let id = this.props.movie.imdbID;
//         Router.push({ pathname: '/movie-details', query: { id: id } });
//     }

//     render() {
//         return (
//             <tr>
//                 <td >
//                     <img style={{ height: '50%', width: 'auto' }} src={this.props.movie.Poster} />
//                 </td>
//                 <td>
//                     <p style={{ marginTop: '90px' }}>
//                         {this.props.movie.Title}
//                     </p>
//                 </td>
//                 <td>
//                     <p style={{ marginTop: '90px' }}>
//                         {this.props.movie.Year}
//                     </p>
//                 </td>
//                 <td>
//                     <p style={{ marginTop: '90px' }}>
//                         {(this.props.movie.Type == 'movie') ? 'Movie' : (this.props.movie.Type == 'series') ? 'Series' : ''}
//                     </p>
//                 </td>
//                 <td>
//                     <p style={{ marginTop: '90px' }}>
//                         <button onClick={this.onSubmit} className="btn btn-primary">Details</button>
//                     </p>
//                 </td>
//             </tr>

//             // real

//         )
//     }
// }


export default function Movie(props) {
    const classes = useStyles();

    const handleSubmit = (event) => {
        let id = this.props.movie.imdbID;
        Router.push({ pathname: '/movie-details', query: { id: id } });
    }
    
    return (
      <React.Fragment className={classes.root}>
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase className={classes.image}>
                <img className={classes.img} alt="complex" src={props.movie.Poster} />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1">
                    {props.movie.Title}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    {props.movie.Year}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {(props.movie.Type == 'movie') ? 'Movie' : (props.movie.Type == 'series') ? 'Series' : ''}
                  </Typography>
                </Grid>
                <Grid item>
                <Button variant="contained" color="primary" onClick={handleSubmit}>
                    Details
                </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
        <br/>
      </React.Fragment>
    );
}