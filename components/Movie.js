import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import Details from './Details'

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

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
    paper2: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
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
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
    const [fullDetails, setFullDetails] = React.useState({})
    // const [id, setId] = React.useState(props.imdbID)
    // console.log(props)
    // useEffect(()=>{
    //   setId(props.imdbID);

    // },[id])

    const handleOpen = () => {
      // const data = fetch(`https://www.omdbapi.com/?apikey=9ab3c92d&i=${id}`);
      //   data.then(res => {
      //       return res.json()
      //   }).then(movie => {
      //       setFullDetails({
      //           movie
      //       })
      //       console.log(movie,"det")
      //       setOpen(true);
      //   })
        // console.log(id,"open")
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    // const handleSubmit = (event) => {
    //     // let id = this.props.movie.imdbID;
    //     Router.push({ pathname: '/movie-details', query: { id: id } });
    // }

    const body = (
      <div style={modalStyle} className={classes.paper2}>
        <h2 id="simple-modal-title">Text in a modal</h2>
        <p id="simple-modal-description">
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </p>
        {/* <SimpleModal /> */}
        {/* <h1>{props.movie.imdbID}</h1> */}
      </div>
      
    );
    
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
                <Button variant="contained" color="primary" onClick={handleOpen}>
                    Details
                </Button>
                {/* <button type="button" onClick={handleOpen}>
        Open Modal
      </button> */}

      <Modal
        style={{display:'flex',alignItems:'center',justifyContent:'center'}}
        open={open}
        onClose={handleClose}
      >
        {/* <h1>{props.movie.imdbID}</h1> */}
        {/* <Grid alignItems="center"
      justify="center" container spacing={3} direction="column"> */}
        
        <Details movie={props.movie}/>
        {/* </Grid> */}
       
        
        {/* {body} */}
      </Modal>

                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
        <br/>
      </React.Fragment>
    );
}