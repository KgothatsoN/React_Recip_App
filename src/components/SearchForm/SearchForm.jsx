import React, {useState, useEffect} from 'react';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search'
import Recipe from '../Recipes/Recipe';
import CSS from '../SearchForm/SearchForm.module.css';

const API_ID = "f0dfae94";
const API_KEY = "24e5df6bea8503395b52ec04b39c08ca";

const SearchForm = () =>    {
    
    const [search, setSearch] = useState('')
    const [urlParam, setURLParam] = useState('beef')
    const [recipes, setRecipes] = useState([]);
    const URL = `https://api.edamam.com/search?q=${urlParam}&app_id=${API_ID}&app_key=${API_KEY}`;

    useEffect(() => {
        fetchRecipes();
    }, [urlParam]);

    const fetchRecipes = async () =>  {
        const res = await fetch(URL);
        const data = await res.json();
        setRecipes(data.hits)
    };

    const getSearch = (e) =>    {
        e.preventDefault();
        setURLParam(search)
        setSearch('')
    }

    const updateSearch = (e) => {
        setSearch(e.target.value)
    }

    return(
        <div>
            <form className={CSS.form} onSubmit={getSearch}>
                <input type="text" className={CSS.bar} value={search} onChange={updateSearch}/>
                <Button type="submit" variant="contained" color="primary" style={{borderRadius: '0', height: '39px'}}><SearchIcon /></Button>
            </form>
            <div className={CSS.card}>
                {recipes.map(recipe  => 
                (<Recipe key={recipe.recipe.label} 
                title={recipe.recipe.label} 
                calories={Math.round(recipe.recipe.calories)} 
                ingredients={recipe.recipe.ingredients}
                image={recipe.recipe.image}/>))}
            </div>
            
        </div>
        
    )
}

export default SearchForm;