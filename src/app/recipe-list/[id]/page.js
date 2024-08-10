import React from 'react';


const RecipeDetails = ({params}) => {
    return (
        <div>
            The food id name{params.id}
        </div>
    );
};

export default RecipeDetails;