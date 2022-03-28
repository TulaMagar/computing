import React, { useState, useEffect } from 'react';
import './RouterWithBootstrap.css';
import {Helmet} from "react-helmet";
import {Link} from 'react-router-dom';


function RouterWithBootstrap () {

    const textInput = React.createRef();  // React use ref to get input value
    

    const datas = [{url:"test", description: "this is this website"}, 
        {url:"test", description: "../About/About.js"},
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

                        <p className='input-container'>
                            <input id="filter"
                                className='input'
                                name="filter"
                                type="text"
                                value={filter}
                                placeholder="type to search for similar question and answer"
                                onChange={event => setFilter(event.target.value)}
                            />
                        </p>
                        <ul className='question-list'>
                            {datas.filter(f => f.description.toString().toLowerCase().includes(filter.toString().toLowerCase()) || filter === '')
                                .map((f, index) => 
                                    <div key={index}>
                                        <li> {f.url} </li>
                                        {/* <Link to={`/shop/${index}`}>{f.description}</Link> */}
                                        <Link to={f.description}>{f.description}</Link>
                                    </div>
                                )} 
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