import React from 'react';

const Event = () => {
    return (
        <div>
            <h4 className='py-3'> Event Gallery</h4>
            <div class="card mb-3" >
  <div class="row g-4">
    <div class="col-md-6">
    <img 
     className='imageEvent'
     src="https://i.ibb.co/3YYgtkp/event.jpg" alt="" />
    </div>
    <div class="col-md-6">
      <div class="card-body">
        <h5 class="card-title">Cricket tournaments</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-muted">It was hold in 12-January-2022</small></p>
      </div>
    </div>
  </div>
</div>
          
            <div class="card mb-3" >
  <div class="row g-4">
    <div class="col-md-6">
    <img 
     className='imageEvent'
     src="https://scontent.fdac99-1.fna.fbcdn.net/v/t39.30808-6/279092038_153431267183840_678174244601256892_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFSywYXvqRbSHtNssVRSZzwLgRLsXk-hjIuBEuxeT6GMtVdbsGj2V5qe7DPON7pKvO5MC-4kuPpfPP4nu4qp1SM&_nc_ohc=A4OGcoSzDsYAX9HovJ8&_nc_ht=scontent.fdac99-1.fna&oh=00_AT8jsB_OnRWpRmcKN6j8oqX8MD4sI-UDGPjt74nauisJEA&oe=62ADBDEA" alt="" />
    </div>
    <div class="col-md-6">
      <div class="card-body">
        <h5 class="card-title">Iftar and Duowa Mahfile</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-muted">It was hold in 22-April 2022</small></p>
      </div>
    </div>
  </div>
</div>
            

        </div>
    );
}

export default Event;
