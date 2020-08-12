import React, { useEffect } from 'react';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

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
    //   width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    root: {
        minWidth: 275,
      },
      bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
      },
      title: {
        fontSize: 14,
      },
      pos: {
        marginBottom: 12,
      },
}));

export default function Details(props) {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    const [fullDetails, setFullDetails] = React.useState()
    const [change, setChange] = React.useState(false);
    // console.log(fullDetails)
    
    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     getDetails();
    //   }
    //   console.log(props)

    useEffect(()=>{
        const data = fetch(`https://www.omdbapi.com/?apikey=9ab3c92d&i=${props.movie.imdbID}`);
        data.then(res => {
            return res.json()
        }).then(movie => {
            setFullDetails(
                movie
            )
            console.log(fullDetails,"prop")

        })
    },[]) 
    // {
    //     const data = fetch(`https://www.omdbapi.com/?apikey=9ab3c92d&i=${this.state.imdbID}`);
    //     data.then(res => {
    //         return res.json()
    //     }).then(movie => {
    //         this.setState({
    //             movie: movie
    //         })
    //         console.log(movie,"det")

    //     })
    // }
  
    return (
        // <Grid alignItems="center"
        // justify="center" container spacing={3} direction="column">
        //   <Grid item xs>
      <Card >
        <CardContent>
            {/* {fullDetails} */}
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            Word of the Day
            
          </Typography>
          {/* {
             fullDetails.map((det,i) => <React.Fragment>
             {det}
          </React.Fragment>
          )
            } */}
          <Typography variant="h5" component="h2">
            be{bull}nev{bull}o{bull}lent
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            adjective
          </Typography>
          <Typography variant="body2" component="p">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    //   </Grid>
    //   </Grid>
    );
  }
  

// export default class MovieDetails extends React.Component {

//     static async getInitialProps({ query }) {
//         return {
//             searchId: query.id
//         }
//     }

//     constructor(props) {
//         super(props);

//         this.state = {
//             searchId: this.props.searchId,
//             movie: {

//             }
//         }
//     }

//     componentDidMount() {
//         const data = fetch(`https://www.omdbapi.com/?apikey=9ab3c92d&i=${this.state.imdbID}`);
//         data.then(res => {
//             return res.json()
//         }).then(movie => {
//             this.setState({
//                 movie: movie
//             })
//             console.log(movie,"det")

//         })
//     }

//     render() {
//         return (

//                 // <br /><br />
//                 // <div className="container">
//                 //     <div className="row">
//                 //         <div className="col-md-4">
//                 //             <img src={this.state.movie.Poster} />
//                 //         </div>
//                 //         <div className="col-md-8">
//                 //             <div className="row">
//                 //                 <div className="col">
//                 //                     <h2>
//                 //                         {this.state.movie.Title}
//                 //                     </h2>
//                 //                     <p className="text-muted">
//                 //                         {this.state.movie.Genre} | {this.state.movie.Year} | Rating: {this.state.movie.imdbRating}/10
//                 //                     </p>
//                 //                     <p>
//                 //                         Plot: <br />{(this.state.movie.Plot) ? this.state.movie.Plot : 'N/A'}
//                 //                     </p>
//                 //                     <p>
//                 //                         Actors: <br />
//                 //                         {(this.state.movie.Actors) ? this.state.movie.Actors : 'N/A'}
//                 //                     </p>
//                 //                     <p>
//                 //                         Awards:<br />
//                 //                         {(this.state.movie.Awards) ? this.state.movie.Awards : 'N/A'}
//                 //                     </p>
//                 //                 </div>
//                 //             </div>
//                 //             <div className="row">
//                 //                 <div className="col-md-3">
//                 //                     <p className="card bg-primary">
//                 //                         Director:<br />
//                 //                         {(this.state.movie.Director) ? this.state.movie.Director : 'N/A'}
//                 //                     </p>
//                 //                 </div>
//                 //                 <div className="col-md-3">
//                 //                     <p className="card bg-primary">
//                 //                         Released: <br />{(this.state.movie.Released) ? this.state.movie.Released : 'N/A'}
//                 //                     </p>
//                 //                 </div>
//                 //                 <div className="col-md-3">
//                 //                     <p className="card bg-primary">
//                 //                         Language: <br />
//                 //                         {(this.state.movie.Language) ? this.state.movie.Language : 'N/A'}
//                 //                     </p>
//                 //                 </div>
//                 //                 <div className="col-md-3">
//                 //                     <p className="card bg-primary">
//                 //                         Runtime:<br />
//                 //                         {(this.state.movie.Runtime) ? this.state.movie.Runtime : 'N/A'}
//                 //                     </p>
//                 //                 </div>
//                 //             </div>

//                 //             <div className="row">
//                 //                 <div className="col-md-3">
//                 //                     <p className="card bg-primary">
//                 //                         Country: <br />{(this.state.movie.Country) ? this.state.movie.Country : 'N/A'}
//                 //                     </p>
//                 //                 </div>
//                 //                 <div className="col-md-3">
//                 //                     <p className="card bg-primary">
//                 //                         Box Office Earnings: <br />
//                 //                         {(this.state.movie.BoxOffice) ? this.state.movie.BoxOffice : 'N/A'}
//                 //                     </p>
//                 //                 </div>
//                 //                 <div className="col-md-3">
//                 //                     <p className="card bg-primary">
//                 //                         Produced By: <br />
//                 //                         {(this.state.movie.Production) ? this.state.movie.Production : 'N/A'}
//                 //                     </p>
//                 //                 </div>
//                 //                 <div className="col-md-3">
//                 //                     <p className="card bg-primary">
//                 //                         Writen by: <br />
//                 //                         {(this.state.movie.Writer) ? ((this.state.movie.Writer).length > 20 ? this.state.movie.Writer.substring(0, 20) + '...' : this.state.movie.Writer) : 'N/A'}
//                 //                     </p>
//                 //                 </div>
//                 //             </div>
//                 //         </div>

//                 //     </div>
//                 // </div>
//                 <React.Fragment>
//       <div >
//         <h2 id="simple-modal-title">Text in a modal</h2>
//         <p id="simple-modal-description">
//           Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
//         </p>
//         {/* <SimpleModal /> */}
//         <h1>{this.props.movie.imdbID}</h1>
//       </div>
//                 </React.Fragment>

//         )
//     }
// }
