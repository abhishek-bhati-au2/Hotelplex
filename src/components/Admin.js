import React, { Component } from "react";
import { connect } from "react-redux";
import {
  fetchingAllHotels,
  fetchedAllHotels,
  deleteHotel
} from "../actions/adminActions";
import Navbar from "./Navbar";
import Footer from "./Footer";
import preloader from "../assets/images/preloader.gif";
import PhoneIphoneOutlinedIcon from "@material-ui/icons/PhoneIphoneOutlined";
import RoomOutlinedIcon from "@material-ui/icons/RoomOutlined";
import StarIcon from "@material-ui/icons/Star";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";


class Admin extends Component {
  componentDidMount() {
    this.props.fetch();
  }

  render() {
    const hotels = this.props.fetched ? (
      this.props.hotels.map((hotel, i) => {
        var n = hotel.stars;
        const stars = [...Array(n)].map((e, i) => (
          <StarIcon key={i} style={{ color: "#fbb710" }} />
        ));
        return (
          <div className="container" key={hotel._id}>
              <ul className="card text-left" style={{padding:"9px"}}>
             <li key={i.toString()} className="card">
            <div
              className="card"
              style={{
                boxShadow: "0 0 8px 7px rgba(0,0,0,0.3)"
              }}
            >
            <Carousel  showArrows={true}>
                      <div className="carousel-item active" >
                        <img className="d-block w-100" src={hotel.image_url.pic_1} />
                      </div>
                      <div>
                        <img className="d-block w-100" src={hotel.image_url.profile_pic} />
                      </div>
                      <div>
                        <img className="d-block w-100" src={hotel.image_url.pic_2} />
                      </div>
                  </Carousel>

              <div className="hotel-address icon-location">
                <h5 className="card-title" style={{display:"inline",padding: "5px"}}>{hotel.hotel_name}</h5>
                <div className="street-block">
                         <div className="thoroughfare"  style={{display:"inline",padding: "5px"}} ><RoomOutlinedIcon />{hotel.location}</div>
                         </div>
                          <p className="icon-phone" style={{display:"inline",padding: "5px"}} > <PhoneIphoneOutlinedIcon />{hotel.contact}</p>
                          <div className="hotel-card__description">
                            <small style={{display:"flex",padding: "5px",borderTop:"1px solid",borderBottom:"1px solid",flexFlow:"column wrap",justifyContent:"flex-end"}}>{hotel.info}</small>
                          </div>
                          <div>  
                            <span  style={{display:"inline",padding: "5px"}} className="text">{stars}  </span></div>
                          </div> <br/>
                          <div className="row">
                             <div className="col-sm-6">
                                <div className="card">
                                   <div className="card-body" style={{backgroundColor:"#FFF8DC"}}>
                                          <h5 className="card-title">PRICE</h5>
                                              <p className="card-text" style={{display:"table",padding: "8px"}}>
                                                
                                                       <span  style={{display:"inline-block",padding: "8px"}} className="text"> Single Room:-Rs."{hotel.price.single_room}",</span>
                                                       <span  style={{display:"inline-block",padding: "8px"}} className="text"> Double Room:-Rs."{hotel.price.double_room}",</span>
                                                       <span  style={{display:"inline-block",padding: "8px"}} className="text"> Suite:-Rs."{hotel.price.suite}"</span>
                                              </p>
       
                                     </div>
                                 </div>
                               </div>
                               <div className="col-md-6">
                                  <div className="card">
                                     <div className="card-body" style={{backgroundColor:"#FFF8DC"}}>
                                         <h5 className="card-title">AMENITIES</h5>
                                            <p className="card-text" style={{display:"table",padding: "5px"}}>
                                                <span  style={{display:"inline-block",padding: "5px"}} className="text">Wifi- {hotel.amenities.wifi? <i className="fa fa-wifi" aria-hidden="true"></i> : <i class="fa fa-wifi" aria-hidden="true"></i>}</span>
                                                <span  style={{display:"inline-block",padding: "5px"}} className="text">Pool- {hotel.amenities.pool? <i class="material-icons"> pool</i> : <i class="material-icons" style={{color:"grey"}}>pool</i>}</span>
                                                <span  style={{display:"inline-block",padding: "5px"}} className="text">Spa- {hotel.amenities.spa?   <i class="material-icons">spa</i>: <i class="material-icons" style={{color:"grey"}}>spa</i>}</span>
                                                <span  style={{display:"inline-block",padding: "5px"}} className="text">Parking- {hotel.amenities.parking? <i class="fa fa-car" aria-hidden="true"></i> : <i class="fa fa-car" aria-hidden="true" style={{color:"grey"}}></i>}</span>
                                                <span  style={{display:"inline-block",padding: "5px"}} className="text">Pets- {hotel.amenities.pets? <i class="fa fa-paw" aria-hidden="true"></i> :<i class="fa fa-paw" aria-hidden="true" style={{color:"grey"}}></i> }</span>
                                                <span  style={{display:"inline-block",padding: "5px"}} className="text">Restaurant- {hotel.amenities.restaurant?<i class="fa fa-cutlery" aria-hidden="true"></i> : <i class="fa fa-cutlery" aria-hidden="true" style={{color:"grey"}}></i>}</span>
                                                <span  style={{display:"inline-block",padding: "5px"}} className="text">Bar- {hotel.amenities.bar? <i class="fa fa-beer" ></i>: <i class="fa fa-beer"  style={{color:"light grey"}}></i>}</span>
                                                <span  style={{display:"inline-block",padding: "5px"}} className="text">Gym- {hotel.amenities.gym? <i class="material-icons">fitness_center</i>: <i class="material-icons" style={{color:"grey"}}>fitness_center</i>}</span>
                                             </p>
                                       </div>
                                   </div>
                                 </div>
                              </div>
              
              <div style={{ backgroundColor: "#11caca" , textAlign: "center"}}>
                  <button
                  className="btn btn-danger text-white"
                  onClick={this.props.delete}
                >
                  Delete
                </button>
            </div>
            
            </div>
            </li>
            </ul>
          </div>
          
        );
      })
    ) : (
      <div
        id="gifContainer"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100vw",
          height: "calc(100vh - 132px)"
        }}
      >
        <img src={preloader} alt="preloader" />
      </div>
    );

    return (
      <div>
        <Navbar />
        <div className="container-fluid mt-4">
          <div className="row">{hotels}</div>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    fetched: state.adminReducer.fetched,
    hotels: state.adminReducer.hotels
  };
};

const mapDispatchtoProps = dispatch => {
  return {
    fetch: () => {
      dispatch(fetchingAllHotels);
      fetch("https://alphahotelapi.herokuapp.com/admin")
        .then(res => res.json())
        .then(result => dispatch(fetchedAllHotels(result)));
    },
    delete: e => {
      const id = e.target.previousSibling.innerText;
      if (window.confirm("Are you sure?")) {
        dispatch(deleteHotel(id));
        fetch(`https://alphahotelapi.herokuapp.com/admin/hotel/del/${id}`)
          .then(res => res.json())
          .then(res => console.log(res));
      }
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchtoProps
)(Admin);



  