import React from 'react'

// @ts-ignore
const dhappaaa = async ({params}) => {
    const {slug} = await params
  return (
    <div>
      {slug ? <h1>{slug}</h1> : <p>"I am single 😔😔"</p>}
    </div>
  )
}

export default dhappaaa
