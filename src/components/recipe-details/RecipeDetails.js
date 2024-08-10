import Link from 'next/link';
import React from 'react';

const RecipeDetails = ({ recipeDetails }) => {
    console.log(recipeDetails);
    return (
        <div>
            <div className='p-6 lg:max-w-6xl max-w-2xl mx-auto'>
                <div className='md:grid grid-cols-2 gap-20'>
                    <div className='m-2'>
                        <img
                            src={recipeDetails.image}
                            alt={recipeDetails.name}
                            className='w-1/2 rounded object-cover md:w-full '
                        ></img>
                    </div>

                    <div>
                        <h1 className='font-bolder text-2xl'>{recipeDetails?.name}</h1>
                        <h1>Cuisine: {recipeDetails?.cuisine}</h1>
                        <h1>Rating: {recipeDetails?.rating}</h1>
                        <h1>Prepare Time: {recipeDetails?.prepTimeMinutes}</h1>
                        <h1>Cook Time: {recipeDetails?.cookTimeMinutes}</h1>
                        <ul>
                            <h1 className='font-bold'>Ingredients</h1>
                            {
                                recipeDetails?.ingredients.map(ingredient =>
                                    <li key={ingredient.id}>{ingredient}</li>
                                )
                            }
                        </ul>
                        <ul>
                            <h1 className='font-bold'>Instructions</h1>
                            {
                                recipeDetails?.instructions.map(instruction =>
                                    <li key={instruction.id}>{instruction}</li>
                                )
                            }
                        </ul>
                    </div>
                        
                </div>
                <div className='text-center m-4'>
                <Link href={'/recipe-list'}><button type='button' className='bg-orange-500 p-2 rounded'>Back to Recipe List</button> </Link>
                </div>
            </div>
        </div>
    );
};

export default RecipeDetails;