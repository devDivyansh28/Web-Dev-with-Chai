import React from 'react'

// @ts-ignore
const page = async ({params}) => {
    const {category , id} = await params
      return (
    <div>
      <h1>you are in {category} and id is {id}</h1>  
    </div>
  )
}

export default page
