import React from 'react';
import {
    Card,
    CardContent,

} from "@/components/ui/card"
import Link from 'next/link';

const RecipeList = ({ recipeList }) => {
    // console.log(recipeList?.recipes);
    const { recipes } = recipeList;
    return (
        <div>
            <h1 className='text-center font-extrabold text-4xl p-4 m-2'>All The Available Recipe</h1>
            
            <div className='grid grid-cols-1 md: grid-cols-2 lg: grid-cols-3 gap-8'>
                {
                    // recipes && recipes > 0 ? 

                    recipes.map(recipe => (<Link key={recipe.id} href={`/recipe-list/${recipe.id}`}>
                        <Card>
                            <CardContent className="bg-white rounded-md overflow-hidden shadow-md cursor-pointer hover: scale[1.1] transition-all">
                                {/* <div className='w-full aspect-w-16 aspect-h-8 lg:h-80'>
                                    <Image
                                        src={recipe.image}
                                        width={500}
                                        height={500}
                                        alt="Picture of the author"
                                    />
                                </div> */}
                                <div className='w-full aspect-w-16 aspect-h-8 lg:h-80'>
                                    <img src={recipe.image} alt={recipe.name} 
                                    className='h-full w-full object-cover object-top'
                                    />
                                    
                                </div>
                                <div className='p-4'>
                                    <h3 className='text-xl font-bold'>{recipe.name}</h3>
                                </div>
                                <div className='flex justify-between pl-4'>
                                    <div className='font-bold'>Rating: {recipe.rating}</div>
                                    <div className='font-medium'>{recipe.cuisine}</div>

                                </div>
                            </CardContent>
                        </Card>
                    </Link>))

                }
            </div>
            <div className='text-center'>
            <Link href='/'><button className='bg-orange-500 rounded p-2 m-4'>Back Home</button></Link> 
            </div>
            
        </div>
    );
};

export default RecipeList;