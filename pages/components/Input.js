import React, {useEffect} from 'react';
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
  const [offSet, setOffset] = React.useState(0);
  const [perPage, setPerPage] = React.useState(8);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [pageCount, setPageCount] = React.useState(1);
  const [displayData, setDisplayData] = React.useState([]);

  const handleChange = (event) => {
    setCategory(event.target.value);
  };
  
  const onSearchInputChange = (event) => {
    setSearchKey(event.target.value);
    console.log(searchKey);
  }

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log(category, searchKey);
  //   const data = fetch(`https://www.omdbapi.com/?apikey=9ab3c92d&s=${searchKey}`);
  //       data.then(res => {
  //           return res.json()
  //       }).then(movies => {
  //           const d = movies.Search
  //           setList(d)
  //           setMovies(true)
  //           console.log(d,"submit");
            
  //       })
  //       console.log(list,"submited");    
  //   getList();
  //   // console.log("event.target.value")
  // }

  useEffect(()=> {
    console.log(category, searchKey);
    const data = fetch(`https://www.omdbapi.com/?apikey=9ab3c92d&s=${searchKey}`);
        data.then(res => {
            return res.json()
        }).then(movies => {
            const d = movies.Search
            setList(d)
            setMovies(true)
            
            console.log(movies,"submit");

        })
    
        // console.log(list,"submited");
    // console.log("event.target.value")
},[searchKey])
const handleSubmit = (event) => {
  event.preventDefault();
  setCurrentPage(1)
  getList();
}

  //pages

  useEffect(()=> {
    // handlePageChange()
    getList()
    

},[currentPage])
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
    let offset = (value-1) * perPage;
    setOffset(offset);
    getList();
  };
  
  const getList = () => {
    // event.preventDefault();
    console.log(list,"list");
    let movies = list;
    // if(movies == undefined){
    //   return(
    //     <h1>Enter movie name and search</h1>
    //   )
    // }
    // let slice = movies.slice(offset, offset + perPage)
    // // const movieList = slice.map(pd => <React.Fragment>
    // //     <p>{pd.title}</p>
    // //     <img src={pd.thumbnailUrl} alt=""/>
    // // </React.Fragment>)
    // // slice = movies.slice(offset, offset + perPage)
    // let count = Math.ceil(movies.length / perPage);
    // setPageCount(count)
    // React.useEffect(() => {
      if(movies!=undefined){
        let slice = movies.slice(offSet, offSet + perPage)
        let count = Math.ceil(movies.length / perPage);
        setPageCount(count)
        console.log(slice,"sl")
        setDisplayData(slice);
        console.log(slice,"ingetlist")
      }

    // });


    // let movieData = slice.map((movie,i) => <React.Fragment>
    //    <Movie movie={movie} key={i} />
    // </React.Fragment>
    // )
    // console.log(slice,"sl")
    // setDisplayData(slice);
    // console.log(slice,"ingetlist")

  }
  //new refactor
  // useEffect(()=>{
  //   getList()
  // })
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
    {getList}
    <React.Fragment>
    { 
        
        
        displayData.map((movie,i) => <React.Fragment>
       <Movie movie={movie} key={i} />
    </React.Fragment>
    )
    
    }
    {console.log(displayData,"jsx")}
    </React.Fragment>
    <React.Fragment>
      {/* {console.log(list)} */}
      {/* {displayData} */}
      <br/>
      <Grid alignItems="center"
      justify="center" container spacing={3} direction="column-reverse">
      {list?
        <Pagination count={pageCount} page={currentPage} onChange={handlePageChange} /> 
        :<h5>Search to see data</h5>
      }
      {/* <Pagination count={pageCount} page={currentPage} onChange={handlePageChange} />  */}
      {/* //onChange={handlePageChange} */}
      </Grid>
    </React.Fragment>
    
    </React.Fragment>
    
  );
}
