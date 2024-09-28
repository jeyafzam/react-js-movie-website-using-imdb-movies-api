import { useEffect } from "react";
import PrimaryLayout from "../../Components/Layaouts/Primary";
import MovieList from "../../Components/MovieList";
import { pageTitleMaker } from "../../Helpers/TitleMaker";

export default function HomePage(){
    useEffect(function(){
       pageTitleMaker("FlixGo-Online Movies,TV Show & Cinema")
    },[])
    return(
        <PrimaryLayout>
              <MovieList />     
        </PrimaryLayout>
    )
}