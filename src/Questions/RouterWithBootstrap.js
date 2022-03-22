import React, { useState } from 'react';
import './RouterWithBootstrap.css';
import {Helmet} from "react-helmet";

function RouterWithBootstrap () {

    const textInput = React.createRef();  // React use ref to get input value
    const [data, setData] = useState();

    const datas = [{url:"test", description: "this is this website"}, 
        {url:"test", description: "this is that website"},
        {url:"test", description: "this is this website"}, 
        {url:"test", description: "this is that website"},
        {url:"test", description: "this is this website"}, 
        {url:"test", description: "this is that website"},
        {url:"test", description: "this is this website"}, 
        {url:"test", description: "this is that website"},
        {url:"test", description: "this is this website"}, 
        {url:"test", description: "this is that website"},
        {url:"test", description: "this is this website"}, 
        {url:"test", description: "this is that website"},
        {url:"test", description: "this is this website"}, 
        {url:"test", description: "this is that website"}]

    const onOnclickHandler = (e) => {
        console.log(textInput.current.value); 
    }

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>questions</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div id="container">
                <div id="left">
                    <h1>RIGHT SIDE</h1><br /><h1>RIGHT SIDE</h1><br /><h1>RIGHT SIDE</h1><br /><h1>RIGHT SIDE</h1>
                </div>
        
                <div id="middle">
                    <input ref={textInput} type="text" />
                    <button onClick={onOnclickHandler}>Click Here</button>
                    <div>{ datas.map( (dats) => <li> {dats.url} :: {dats.description}</li> )}</div>
                </div>
        
                <div id="right">
                    <h1>RIGHT SIDE</h1><br /><h1>RIGHT SIDE</h1><br /><h1>RIGHT SIDE</h1><br /><h1>RIGHT SIDE</h1><br /><h1>RIGHT SIDE</h1><br /><h1>RIGHT SIDE</h1><br /><h1>RIGHT SIDE</h1><br /><h1>RIGHT SIDE</h1><br /><h1>RIGHT SIDE</h1><br /><h1>RIGHT SIDE</h1><br /><h1>RIGHT SIDE</h1><br /><h1>RIGHT SIDE</h1><br /><h1>RIGHT SIDE</h1><br /><h1>RIGHT SIDE</h1><br /><h1>RIGHT SIDE</h1><br /><h1>RIGHT SIDE</h1><br /><h1>RIGHT SIDE</h1><br /><h1>RIGHT SIDE</h1><br /><h1>RIGHT SIDE</h1><br /><h1>RIGHT SIDE</h1><br /><h1>RIGHT SIDE</h1><br /><h1>RIGHT SIDE</h1><br /><h1>RIGHT SIDE</h1><br /><h1>RIGHT SIDE</h1><br /><h1>RIGHT SIDE</h1><br /><h1>RIGHT SIDE</h1><br /><h1>RIGHT SIDE</h1><br /><h1>RIGHT SIDE</h1><br /><h1>RIGHT SIDE</h1><br /><h1>RIGHT SIDE</h1><br /><h1>RIGHT SIDE</h1><br /><h1>RIGHT SIDE</h1><br /><h1>RIGHT SIDE</h1><br /><h1>RIGHT SIDE</h1><br /><h1>RIGHT SIDE</h1><br /><h1>RIGHT SIDE</h1><br />
                </div>
            </div>
        </>


    );
    
}

export default RouterWithBootstrap;