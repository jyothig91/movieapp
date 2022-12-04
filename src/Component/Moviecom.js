
import styled from "styled-components";
const MovieContainer=styled.div`
display:flex;
flex-direction:column;
padding:10px;
width:280px;
cursor:pointer;
box-shadow:0 3px 10px 0 #aaa;
`;
const CoverImage=styled.img`
object-fit:cover;
height:362px;`;
const MovieName=styled.span`
font-size:16px;
font-weight:500;
color:black;
margin:15px 0;
`
const InfoCol=styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;`;
const MovieInfo=styled.div`
font-size:16px;
font-weight:500;
color:black;`;

const  Moviecom=(props) =>{
    const{Title,Year,Type,Poster,imdbID}=props.movie;

  return (
  <MovieContainer onClick={()=>{props.onMovieSelect(imdbID)}}>
    <CoverImage src={Poster}/>
    <MovieName>{Title}</MovieName> 
    <InfoCol>
        <MovieInfo>Year:{Year}</MovieInfo>
        <MovieInfo>Type:{Type}</MovieInfo>
     </InfoCol>
    </MovieContainer>
  );
};

export default Moviecom;