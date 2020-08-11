import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Pagination from '@material-ui/lab/Pagination';
import Movie from './Movie'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    innerRoot: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      width: 400,
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },

  },
}));



export default function Input() {
  
  const classes = useStyles();
  const [category, setCategory] = React.useState('title');
  const [searchKey, setSearchKey] = React.useState('');
  const [showMovies, setMovies] = React.useState(false);
  const [list, setList] = React.useState([]);
  const [offset, setOffset] = React.useState(0);
  const [perPage, setPerPage] = React.useState(8);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [pageCount, setPageCount] = React.useState(1);
  const [displayData, setDisplayData] = React.useState();

  const handleChange = (event) => {
    setCategory(event.target.value);
  };
  
  const onSearchInputChange = (event) => {
    setSearchKey(event.target.value);
    console.log(searchKey);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(category, searchKey);
    const list = fetch(`https://www.omdbapi.com/?apikey=9ab3c92d&s=${searchKey}`);
        list.then(res => {
            return res.json()
        }).then(movies => {
            setList(movies.Search)
            setMovies(true)
            // console.log(movies);
        })
    getList();
    // console.log("event.target.value")
  }

  //pages
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
    let offset = currentPage * perPage;
    setOffset(offset);
    getList();
    
  };

  const getList = (event) => {
    // event.preventDefault();
    console.log(list);
    let movies = list;
    if(movies == undefined){
      return(
        <h1>Enter movie name and search</h1>
      )
    }
    let slice = movies.slice(offset, offset + perPage)
    // const movieList = slice.map(pd => <React.Fragment>
    //     <p>{pd.title}</p>
    //     <img src={pd.thumbnailUrl} alt=""/>
    // </React.Fragment>)
    // slice = movies.slice(offset, offset + perPage)
    let count = Math.ceil(movies.length / perPage);
    setPageCount(count)
    // React.useEffect(() => {
    //   slice = movies.slice(offset, offset + perPage)
    //   let count = Math.ceil(movies.length / perPage);
    //   setPageCount(count)
    // });


    setDisplayData(slice.map((movie,i) => {
      return <Movie movie={movie} key={i} />
    }))
  }

  return (
    <React.Fragment>
<React.Fragment>
      <br/>
      <Grid alignItems="center" direction="column"
      justify="center" container spacing={3}>
        <Grid item xs>
        <Paper component="form" className={classes.innerRoot} direction="column">
      <IconButton className={classes.iconButton} aria-label="menu">
      
      </IconButton>
      <InputBase
        className={classes.input}
        placeholder="Movie title/year"
        inputProps={{ 'aria-label': 'search google maps' }}
        onChange={onSearchInputChange}
        value={searchKey}
      />
      <IconButton type="submit" className={classes.iconButton} aria-label="search" onClick={handleSubmit}>
        <SearchIcon />
      </IconButton>
{/* radio button */}
      </Paper>
        </Grid>
        <Grid>
        <FormControl component="fieldset">
        <FormLabel component="legend">Search In</FormLabel>
        <RadioGroup aria-label="category" row name="category" value={category} onChange={handleChange}>
          <FormControlLabel value="title" control={<Radio />} label="Title" />
          <FormControlLabel value="year" control={<Radio />} label="Year" />
        </RadioGroup>
        </FormControl> 
        </Grid>
      </Grid>

   
  
    </React.Fragment>
    <br/>
    <React.Fragment>
      {/* {console.log(list)} */}
      {displayData}
      <Pagination count={pageCount} page={currentPage} onChange={handlePageChange} />
    </React.Fragment>
    
    </React.Fragment>
    
  );
}
