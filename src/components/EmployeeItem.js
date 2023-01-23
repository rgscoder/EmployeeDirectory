import React from 'react'
import image from './image.png';
function employeeitem() {
  return (
    <div className="items">
        <div className="img-placeholder"><img src={image} alt="Placeholder" /></div>
        <div className='description'>
            <h3>Name:</h3>
            <p>Position:</p>
        </div>
    </div>
  )
}

export default employeeitem
