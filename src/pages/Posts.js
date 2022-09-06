import React from 'react'
import '../style.css';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


function Posts() {
  return (
    <div style={{marginTop: "40px"}}>
      <section className="blogs" id="blogs">
      <div>
      <h1 className="heading"> our daily posts </h1>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <Paper>
            <div className="slide">
                <img src={require('../images/img-1.jpg')} /> 
                  {/* <img src="images/img-1.jpg" alt=""> */}
                  <div className="icons">
                      <a href="#"> <i className="fas fa-calendar"></i> 21st may, 2021 </a>
                      <a href="#"> <i className="fas fa-user"></i> by admin </a>
                  </div>
                  <h3>blog title goes here.</h3>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, deserunt.</p>
                  <a href="#" className="btn">read more</a>
            </div></Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper><div className="slide">
                <img src={require('../images/img-2.jpg')} /> 
                  {/* <img src="images/img-2.jpg" alt=""> */}
                  <div className="icons">
                      <a href="#"> <i className="fas fa-calendar"></i> 21st may, 2021 </a>
                      <a href="#"> <i className="fas fa-user"></i> by admin </a>
                  </div>
                  <h3>blog title goes here.</h3>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, deserunt.</p>
                  <a href="#" className="btn">read more</a>
            </div></Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper>
            <div className="slide">
                <img src={require('../images/img-3.jpg')} /> 
                  {/* <img src="images/img-3.jpg" alt=""> */}
                  <div className="icons">
                      <a href="#"> <i className="fas fa-calendar"></i> 21st may, 2021 </a>
                      <a href="#"> <i className="fas fa-user"></i> by admin </a>
                  </div>
                  <h3>blog title goes here.</h3>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, deserunt.</p>
                  <a href="#" className="btn">read more</a>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper>
            <div className="slide">
                <img src={require('../images/img-4.jpg')} /> 
                  {/* <img src="images/img-4.jpg" alt=""> */}
                  <div className="icons">
                      <a href="#"> <i className="fas fa-calendar"></i> 21st may, 2021 </a>
                      <a href="#"> <i className="fas fa-user"></i> by admin </a>
                  </div>
                  <h3>blog title goes here.</h3>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, deserunt.</p>
                  <a href="#" className="btn">read more</a>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper>
            <div className="slide">
                <img src={require('../images/img-5.jpg')} /> 
                  {/* <img src="images/img-5.jpg" alt=""> */}
                  <div className="icons">
                      <a href="#"> <i className="fas fa-calendar"></i> 21st may, 2021 </a>
                      <a href="#"> <i className="fas fa-user"></i> by admin </a>
                  </div>
                  <h3>blog title goes here.</h3>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, deserunt.</p>
                  <a href="#" className="btn">read more</a>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper>
            <div className="slide">
                <img src={require('../images/img-6.jpg')} /> 
                  {/* <img src="images/img-6.jpg" alt=""> */}
                  <div className="icons">
                      <a href="#"> <i className="fas fa-calendar"></i> 21st may, 2021 </a>
                      <a href="#"> <i className="fas fa-user"></i> by admin </a>
                  </div>
                  <h3>blog title goes here.</h3>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, deserunt.</p>
                  <a href="#" className="btn">read more</a>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>




      </section>
    </div>
  )
}

export default Posts