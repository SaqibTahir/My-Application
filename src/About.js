import React from 'react'

export default function About(props) {
  return (
    <>
    <h1 className='my-3' style={{color:props.mode==='light'?'black':'white'}}>About Me :</h1>
    <div className="accordion my-4" id="accordionExample" >
      <div className={`accordion-item bg-${props.mode}`}>
        <h2 className="accordion-header">
          <button className={`accordion-button bg-${props.mode}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{color:props.mode==='light'?'black':'white'}}>
           React.js #
          </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
          <div className="accordion-body" style={{color:props.mode==='light'?'black':'white'}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quasi nihil similique repellendus hic in omnis ratione ea fugiat minus, delectus unde exercitationem sapiente blanditiis adipisci tenetur deserunt. Repudiandae minima molestias, laborum modi voluptates ad! Fugiat tempora voluptate perspiciatis incidunt asperiores doloribus, provident nobis maxime dolores officia eum quasi amet?
          </div>
        </div>
      </div>
      <div className={`accordion-item bg-${props.mode}`}>
        <h2 className="accordion-header">
          <button className={`accordion-button bg-${props.mode}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{color:props.mode==='light'?'black':'white'}}>
            Develpoment #
          </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div className="accordion-body" style={{color:props.mode==='light'?'black':'white'}}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem reprehenderit laudantium dicta rem quas non molestias necessitatibus voluptas magnam voluptates at ullam consequuntur sint voluptate itaque aperiam odio, atque quis iusto dolorum alias quam aliquam ducimus. Quibusdam mollitia recusandae veniam quidem, odit laudantium corrupti, accusamus architecto quisquam dolore dolor ipsum.
          </div>
        </div>
      </div>
      <div className={`accordion-item bg-${props.mode}`}>
        <h2 className="accordion-header">
          <button className={`accordion-button bg-${props.mode}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={{color:props.mode==='light'?'black':'white'}}>
            Experience #
          </button>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div className="accordion-body" style={{color:props.mode==='light'?'black':'white'}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi aut neque labore voluptatem est, alias id sequi! Debitis perspiciatis repellendus facilis maiores, voluptates ut libero voluptatem, voluptate praesentium delectus dolores, fugiat ad commodi assumenda expedita totam architecto non quaerat dignissimos nam! Unde quia consectetur vel ratione esse fugiat perspiciatis nulla.
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
