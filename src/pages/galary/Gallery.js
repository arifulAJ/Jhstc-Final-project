import React from 'react';
import ReactPlayer from 'react-player'
import "./Gallary.css"
const Gallery = () => {
  return (
    <div>
       <h4 className='py-3'>  Video Gallery</h4>
       <div class="card mb-3" >
  <div class="row g-4">
    <div class="col-md-6">
    <ReactPlayer 
width="100%"
 height="215px"
  
 controls 
 url='https://www.youtube.com/embed/zRnMlmBraB8'
  />
    </div>
    <div class="col-md-6">
      <div class="card-body">
        <h5 class="card-title">Henry Vubon With Dr. Jannat Ara Henry</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
       <div class="card mb-3" >
  <div class="row g-4">
    <div class="col-md-6">
    <ReactPlayer 
width="100%"
 height="215px"
  
 controls 
 url='https://www.youtube.com/embed/zRnMlmBraB8'
  />
    </div>
    <div class="col-md-6">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
       

    </div>
  );
}

export default Gallery;
