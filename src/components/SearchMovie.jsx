import React from "react";
import styles from './SearchMovie.module.css';
import {FaSearch} from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
import { useQuery } from "../hooks/useQuery";


function SearchMovie() {
    const query = useQuery();
    const search = query.get("search");
    

    const history = useNavigate();
   

    const handleSubmit = (e) =>{
        e.preventDefault();
        
    }

    
  return (
    <form className={styles.searchContainer} onSubmit={handleSubmit}>
      <div className={styles.searchBox}>
        <input 
        placeholder="Search..." 
        className={styles.searchInput} 
        type="text" 
        value={search} 
        onChange={(e) => {
          const value = e.target.value;
          history("/?search=" + value);
          }} />
        
            <FaSearch size={20} className={styles.searchButton}/>
        
      </div>
    </form>
  );
}

export { SearchMovie };
