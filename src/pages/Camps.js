import React from 'react'
import '../style.css';

function Camps() {
  return (
    <div>
      <section className="home" id="home">
        <div className="box" style= {{backgroundImage: "url('images/camp-bg.jpg')" }}>
        {/* style="background: url(images/home-bg-1.jpg) no-repeat;" */}
            <div className="content">
                <span>never stop</span>
                <h3>exploring</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit unde ex molestias soluta consequatur saepe aliquam, excepturi delectus consequuntur minus!</p>
                <a href="#" className="btn">get started</a>
            </div>
        </div>
      </section>
      
      <h1 className="heading"> Camps Data </h1>
    </div>
  )
}

export default Camps