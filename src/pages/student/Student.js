import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import Slider from "react-slick";
import './Student.css'

export default class Student extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="container py-5" id="student">
        <h2 className="text-center py-5"> What Our Student Says</h2>
        <Slider {...settings}>
          <div>
          <Row className='gy-5' >
    <Col   sm={6}>
          <div class="card mb-3" >
  <div class="row g-0">
    <div class="col-md-6 studentImg">
      <img src="https://scontent.fdac99-1.fna.fbcdn.net/v/t39.30808-6/271598983_1070583870459873_5954301305638945876_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=174925&_nc_eui2=AeEuBkoJ0JgOXFQ-W_NKkBOIcBqbq8S20kNwGpurxLbSQ4G7OxZyvt9XW5qi87AHFerVRHVRPk-kD4Iucak56uHF&_nc_ohc=KZMpUqxDrG4AX9bEKdF&_nc_ht=scontent.fdac99-1.fna&oh=00_AT8dIuaxVOAYjbcvgSgljnCFTDLgECZ8R2-Ahf1RDvvwsg&oe=62ADAF70" class="img-fluid rounded-start" alt="..."/>
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
</Col>
    <Col sm={6}>
          <div class="card mb-3" >
  <div class="row g-0">
    <div class="col-md-6 studentImg">
      <img src="https://scontent.fdac99-1.fna.fbcdn.net/v/t1.6435-9/32381026_584149431959718_8345417280590446592_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeG1Kyi43dj8KS64VPfi-bHiile78GP88wuKV7vwY_zzCyCVGnKtfgHA_pCy2IfxZV6QzlEn2tc6j2PleBm_SUcJ&_nc_ohc=PFFbWLGRu2MAX_vH3yX&_nc_ht=scontent.fdac99-1.fna&oh=00_AT-fmfhyuMMH9PnBBikKfENtfwdlx6-6DniRkwHnwk7KHA&oe=62CD5BBE" class="img-fluid rounded-start" alt="..."/>
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
</Col>
  </Row>
          </div>
          <div>
          <Row className='gy-5' >
    <Col   sm={6}>
          <div class="card mb-3" >
  <div class="row g-0">
    <div class="col-md-6 studentImg">
      <img src="https://scontent.fdac99-1.fna.fbcdn.net/v/t1.6435-9/81272959_473847793322795_7882422821148688384_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeE04W1ukVLneOCaGrMqaKSUdydzv99Iv7p3J3O_30i_uqVlNesCy1njMjrz5d8sEKyUxMI0rur_HzKFiC-r8F_a&_nc_ohc=0AbdT79lljkAX90Bj4M&tn=VJMUKeJGrna_DbVL&_nc_ht=scontent.fdac99-1.fna&oh=00_AT9MitAKeN6bZIq7Ki47LQ6_OdZJsbs8mjPc0Jh0lP82eQ&oe=62CE55D4" class="img-fluid rounded-start" alt="..."/>
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
</Col>
    <Col sm={6}>
          <div class="card mb-3" >
  <div class="row g-0">
    <div class="col-md-6 studentImg">
      <img src="https://scontent.fdac99-1.fna.fbcdn.net/v/t39.30808-6/269832563_3160249460964903_7036495886898630409_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=174925&_nc_eui2=AeH3Dd-l6CYRQuGA23SNGyleOI5eZhGSkXE4jl5mEZKRcaxZzJwuJfpZldLZZ7n0oZuRmrFuQEictQU8_cD49myR&_nc_ohc=oTu8ENYv6rkAX_214H4&_nc_ht=scontent.fdac99-1.fna&oh=00_AT8nWzD1r8eE_CLFauy32X0a5zdRCD0ClG862iNWSDdPNw&oe=62AD82A7" class="img-fluid rounded-start" alt="..."/>
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
        </Col>
        </Row>
        </div>
          
        </Slider>
      </div>
    );
  }
}