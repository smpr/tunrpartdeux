import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import styled from 'styled-components'
const BodyWrapper = styled.div`
display: flex;
justify-content: flex-start;
flex-direction: row-wrap;
border: 2px rgba(138, 134, 132, .75);
box-shadow: 10px 10px 5px #888888;
border-radius: 10px;
width: 400px;
height: 275px;
margin: 100px auto;
padding: 10px;
background-color: rgba(58, 69, 215, .45);
text-align: center;
`

const ArtistBlock = styled.div`

margin: 100px auto;
padding: 10px;

text-align: center;
`
const ArtistList = (props) => {
    return (
        <BodyWrapper>
            
            <ArtistBlock>
            {
                props.artists.map((artist)=>{
                    return (
                    <div><Link to={`/artists/${artist.id}`}>{artist.name}</Link>
                    </div>
                    
                    )
                
                })
                
            }
            </ArtistBlock>
           
        </BodyWrapper>
    )
}

export default ArtistList;