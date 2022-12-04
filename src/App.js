import React,{ useState } from "react";
import styled from 'styled-components';
import axios from "axios";
import Moviecom from './Component/Moviecom';
import MovieInfocom from "./Component/MovieListcom";

export const API_KEY="59ad14e6";

const Container=styled.div`
display:flex;
flex-direction:column;
`;

const Header=styled.div`
display:flex;
flex-direction:row;
background-color:black;
color:white;
justify-content:space-between;
align-items:center;
padding:10px`;

const AppName=styled.div`
display:flex;
flex-direction:row;
align-items:center`;

const SearchBox=styled.div`
display:flex;
flex-direction:row;
padding:10px 10px;
background-color:white;
width:50%;
border-radius:6px;
align-items::center;
margin-left:20px;

`;
const SearchIcon=styled.img`
width=30px;
height:30px`;
const SearchInput=styled.input`
color:black;
font-size:20px;
font-weight:bold;
outline:none;
border:none;
margin:left:15px;
`;
const  MovieContainer=styled.div`
display:flex;
flex-direction:row;
flex-wrap:wrap;
padding:30px;
gap:24px;
justify-content:space-evenly;
`;
function App() {
  const[search,setSearch] = useState();
  const[timeout,setTimeout]=useState();
  const[movieList,setMovieList]=useState([]);
  const[selectedMovie,onMovieSelect]=useState();

  const fetchData=async (searchString)=>{
   const response=await axios.get(`https://www.omdbapi.com/?s=${searchString}&apikey=${API_KEY}`)
  console.log(response);
  setMovieList(response.data.Search);
  };
 const onTextchange =(e)=>{
  onMovieSelect("");
  clearTimeout(timeout);
 setSearch(e.target.value);
 const timeou=setTimeout(()=>fetchData(e.target.value),500);
 setTimeout(timeou);
 }
  return(
   <Container>
    <Header>
      <AppName>React Movie App</AppName>
    <SearchBox>
    <SearchIcon src='/search-icon.svg'/>
    <SearchInput  value={search} onChange={onTextchange}/>
    </SearchBox>
    </Header>
    {selectedMovie && <MovieInfocom selectedMovie={selectedMovie} onMovieSelect={onMovieSelect}/>}
    <MovieContainer>
     {
      movieList?.length ?
        movieList.map((movie,index)=>(
          <Moviecom key={index} movie={movie} 
          onMovieSelect={onMovieSelect}/>
          )): "no movie"}
     
    </MovieContainer>
   </Container>
  );
}

export default App;
