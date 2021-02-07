import React, {useEffect} from 'react';
import ListItem from '../ListItem/ListItem';
import './List.css';


export default function List  () {
  const [allRepositories, setAllRepositories] = React.useState(null);
  
  useEffect(()=>{
    if(allRepositories === null)
      loadAllRepositories();
  });
  

  const loadAllRepositories=()=>{
    fetch('https://api.github.com/search/repositories?q=awesome+list&sort=updated&order=desc&per_page=10')
    .then((result)=>{
        result.json()
        .then((resultjson)=>{
            setAllRepositories(result.ok?resultjson.items:[])
        })
    })
    .catch((err)=>{
        console.log(Error)
    });
  }
  
  return ( 
    <div>
        <header className='horizontalBar'>
          <div className='wrapper'>
            <img className='logo title' src='/logo.png'/>
            <h1 className='title'>Top 10 awesome!</h1>
          </div>
        </header>
        <main className='wrapper'>
          <ul className='mainList'>
            {(allRepositories||[]).map((element)=>(
              <li key={element.id}><ListItem Element={element}/></li>
            ))}
          </ul>
        </main>
        <footer className='horizontalBar'><div className='wrapper'>Make with love by Raquel ❤️</div></footer>
    </div>
  );
}
