import React from 'react';
import './ListItem.css';


export default function ListItem  (props) {
  
  
  return ( 
    <div> 
      <h3><a href={props.Element.html_url} target='_blank'>{props.Element.name}</a></h3>
      <p>{props.Element.description}</p>
      <p>{props.Element.stargazers_count}⭐</p>
    </div>
  );
}
