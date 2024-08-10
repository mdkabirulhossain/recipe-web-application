import RecipeList from '@/components/recipe-list/RecipeList';
import Link from 'next/link';
import React from 'react';

async function fetchOfRecipes() {
    try {
        const apiResponse = await fetch('https://dummyjson.com/recipes');
        const data = apiResponse.json();
        return data;
    } catch (error) {
        throw new Error(error);
        
    }
}

const Recipes =async () => {
    const recipeList = await fetchOfRecipes();
    return (
        <div>
            <RecipeList recipeList={recipeList}/>
            
        </div>
    );
};

export default Recipes;
