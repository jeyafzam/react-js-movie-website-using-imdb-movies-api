import { useEffect } from "react";
import PrimaryLayout from "../../Component/Layaouts/Primary";
import MovieList from "../../Component/MovieList";
import { pageTitleMaker } from "../../Helpers/TitleMaker";

export default function HomePage(){
    useEffect(function(){
       pageTitleMaker("FlixGo-Online Movies,TV Show & Cinema")
    },[])
    return(
        <PrimaryLayout>
              <MovieList title="Recently Updated" link="/" pageId="1"/>
             
        </PrimaryLayout>
    )
}