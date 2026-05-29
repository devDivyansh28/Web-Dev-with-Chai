import React from 'react'


// @ts-ignore
const catching_all_routes = async ({params}) => {
    const {slug} = await params
    const response = slug.join("/")
  return (
    <div>
      <p>{response}</p>
    </div>
  )
}

export default catching_all_routes
