import React, { useState, useEffect } from 'react';
import './RouterWithBootstrap.css';
import {Helmet} from "react-helmet";

function RouterWithBootstrap () {

    const textInput = React.createRef();  // React use ref to get input value
    

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

    const fruit = [['apple', 'banana'], 'orange', 'grapefruit',
    'mango', 'strawberry', 'peach', 'apricot'];

    const [filter, setFilter] = useState('');

    useEffect(() => {
        
    })
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>questions</title>
                {/* <link rel="canonical" href="http://mysite.com/example" /> */}
            </Helmet>
            <div id="container">
                <div id="left">
                    <h1>RIGHT SIDE</h1><br /><h1>RIGHT SIDE</h1><br /><h1>RIGHT SIDE</h1><br /><h1>RIGHT SIDE</h1>
                </div>
        
                <div id="middle">

                        <p>
                            Type to filter the list:
                            <input id="filter"
                                name="filter"
                                type="text"
                                value={filter}
                                onChange={event => setFilter(event.target.value)}
                            />
                        </p>
                        <ul>
                            {datas.filter(f => f.description.toString().toLowerCase().includes(filter.toString().toLowerCase()) || filter === '')
                                .map((f, index) => <li key={index}> {f.url} {f.description}</li>)}
                        </ul>
                </div>
        
                <div id="right">
                    <h1>RIGHT SIDE</h1><br /><h1>RIGHT SIDE</h1><br /><h1>RIGHT SIDE</h1><br /><h1>RIGHT SIDE</h1><br /><h1>RIGHT SIDE</h1><br /><h1>RIGHT SIDE</h1><br /><h1>RIGHT SIDE</h1><br /><h1>RIGHT SIDE</h1><br /><h1>RIGHT SIDE</h1><br /><h1>RIGHT SIDE</h1><br /><h1>RIGHT SIDE</h1><br /><h1>RIGHT SIDE</h1><br /><h1>RIGHT SIDE</h1><br /><h1>RIGHT SIDE</h1><br /><h1>RIGHT SIDE</h1><br /><h1>RIGHT SIDE</h1><br /><h1>RIGHT SIDE</h1><br /><h1>RIGHT SIDE</h1><br /><h1>RIGHT SIDE</h1><br /><h1>RIGHT SIDE</h1><br /><h1>RIGHT SIDE</h1><br /><h1>RIGHT SIDE</h1><br /><h1>RIGHT SIDE</h1><br /><h1>RIGHT SIDE</h1><br /><h1>RIGHT SIDE</h1><br /><h1>RIGHT SIDE</h1><br /><h1>RIGHT SIDE</h1><br /><h1>RIGHT SIDE</h1><br /><h1>RIGHT SIDE</h1><br /><h1>RIGHT SIDE</h1><br /><h1>RIGHT SIDE</h1><br /><h1>RIGHT SIDE</h1><br /><h1>RIGHT SIDE</h1><br /><h1>RIGHT SIDE</h1><br /><h1>RIGHT SIDE</h1><br /><h1>RIGHT SIDE</h1><br />
                </div>
            </div>
        </>


    );
    
}

export default RouterWithBootstrap;