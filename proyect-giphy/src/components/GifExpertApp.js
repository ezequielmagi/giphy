import React, { useState } from 'react'

export const GifExpertApp = () => {

  // const categories = ['One Punch' , 'Samuray X' , 'Dragon Ball']

  const [categories, setCategories] = useState(['One Punch' , 'Samuray X' , 'Dragon Ball'])

  const handleAdd = () => {
    setCategories( [...categories , 'X Men'] )
  }

  return (
<>
      <h2>GiftExpertApp</h2>
      <hr /> 

      <button onClick={handleAdd}>ADD</button>

      <ol>
        {
          categories.map( category=> {
            return <li key={category} > { category } </li>
          }) 
        }
      </ol>
      
</>
  )
}
