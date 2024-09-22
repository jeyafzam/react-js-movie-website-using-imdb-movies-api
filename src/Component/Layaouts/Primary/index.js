import { Fragment } from "react";
import Header from "../../Header";
import Footer from "../../Footer";

export default function PrimaryLayout(props){
    const {children} = props
    return(
        <Fragment>
            <Header/>
            {children}
            <Footer/>
        </Fragment>
    )
}