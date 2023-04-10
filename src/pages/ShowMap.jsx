import React, { useEffect, useState } from "react";
import GoogleMapReact from 'google-map-react';
import ".././styles/checkout.css"
import Log_Img from ".././assest/login_page/loc.png"
import axios from "axios";

const AnyReactComponent = ({ text }) => <div className="marker">
    <img src={text} />
</div>;

const google_map_key = "AIzaSyCJMznMwq1-AGBjUIdP4OwY1fQT8-YY_Vo"

function ShowMap() {
    const getlocationData = JSON.parse(sessionStorage.getItem('location') || "{}");
    const [lat, setLat] = useState(null)
    const [lng, setLng] = useState(null)

    const defaultProps = {
        center: {
            lat: 17.402712110832585,
            lng: 78.40599067460735
        },
        zoom: 11
    };


    const handleClick = (map) => {
        setLat(map.lat)
        setLng(map.lng)
        // console.log(map)
    }


    const getLocation = async (position) => {
        let result = await axios.get(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`)
        console.log("result", result)
        sessionStorage.setItem("location", JSON.stringify(result.data))
        const getAddressData = JSON.parse(sessionStorage.getItem('location') || "{}");
        console.log("getAddressData", getAddressData)
        
    }
    useEffect(() => {
        getLocation()
    }, [lat, lng])


    return (
        // Important! Always set the container height explicitly
        <div style={{ height: '40vh', width: '100%', zIndex: '2' }}>
            <GoogleMapReact
                bootstrapURLKeys={google_map_key}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
                yesIWantToUseGoogleMapApiInternals={true}
                onClick={handleClick}
            >
                <AnyReactComponent
                    lat={17.402712110832585}
                    lng={78.40599067460735}
                    text={Log_Img}

                />
            </GoogleMapReact>
        </div>
    );
}

export default ShowMap
