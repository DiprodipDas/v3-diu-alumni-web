import React from 'react'

const AlumniAcordians = () => {
  return (
    <div className='bg-amber-100'>
        <div className='max-w-screen container mx-auto py-10 px-5'>
        <div className="carousel w-full">
  <div id="item1" className="carousel-item w-full">
    <img
      src="https://i.ibb.co.com/c4Rg6JJ/freepik-adjust-78685.png"
      className="w-full" />
  </div>
  <div id="item2" className="carousel-item w-full">
    <img
      src="https://i.ibb.co.com/G4tD9tBp/freepik-adjust-78692.jpg"
      className="w-full" />
  </div>
  <div id="item3" className="carousel-item w-full">
    <img
      src="https://i.ibb.co.com/hxGtDXGV/freepik-adjust-78688.png"
      className="w-full" />
  </div>
  <div id="item4" className="carousel-item w-full">
    <img
      src="https://i.ibb.co.com/99hR8HbN/freepik-adjust-78687.png"
      className="w-full" />
  </div>
</div>
<div className="flex w-full justify-center gap-2 py-2">
  <a href="#item1" className="btn btn-xs">1</a>
  <a href="#item2" className="btn btn-xs">2</a>
  <a href="#item3" className="btn btn-xs">3</a>
  <a href="#item4" className="btn btn-xs">4</a>
</div>
    </div>
    </div>
  )
}

export default AlumniAcordians