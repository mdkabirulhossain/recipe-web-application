import React from 'react';
import RecipeDetails from '@/components/recipe-details/RecipeDetails';
async function fetchRecipeDetails(ID) {
    try {
        const apiResponse = await fetch(`https://dummyjson.com/recipes/${ID}`);
        const data = apiResponse.json();
        return data;
    } catch (error) {
        throw new Error(error);
        
    }
}

const Details = async ({params}) => {
    const recipeDetails = await fetchRecipeDetails(params?.id);
    return (
        <div>
            {/* The food id name{params.id} */}
            <RecipeDetails recipeDetails={recipeDetails}></RecipeDetails>
        </div>
    );
};

export default Details;