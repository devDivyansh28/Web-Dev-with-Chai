import Image from 'next/image'

import React from 'react'



const Image_component = () => {
  return (
    <div>
      <h1>Hello We are now working in Image Component...</h1>
      <Image
        src="https://the-spiritualtalks.com/wp-content/uploads/2025/12/radha-rani-ke-28-naam.jpg"
        width={200}
        height={200}
        alt="Divaynsh Sharma User..."
      ></Image>
      <Image
        src="/undraw_empty-wallet_j0kn.svg"
        width={200}
        height={200}
        alt="Divaynsh Sharma User..."
      ></Image>
      <Image
        src="/undraw_empty-wallet_j0kn.svg"
        width={200}
        height={200}
        alt="Divaynsh Sharma User..."
      ></Image>
    </div>
  );
}

export default Image_component
