import React from 'react';
import {Image,Text,View,StyleSheet} from 'react-native';
// import {Link} from "react-router-dom";
// import defaultImg from "../images/room-1.jpeg";
import PropTypes from "prop-types";
import { Color } from '../constants';


export default function Item({room}) {
    const {name,slug,images,price}=room;
    let imgSrc='';
    //require(images[0] || defaultImg);
    return (
        <View className="room">
            <View className="img-container">
                {/* <Image source={imgSrc}/> */}
                <View className="price-top">
                    <Text>${price}</Text>
                    <Text>per night</Text>
                </View>
                {/* <Link to={`/rooms/${slug}`} className="btn-primary room-link">
                    Features
                </Link> */}
            </View>
            <Text className="room-info">{name}</Text>
        </View>
    ); 
}

Item.propTypes={
    room:PropTypes.shape({
        name:PropTypes.string.isRequired,
        slug:PropTypes.string.isRequired,
        images:PropTypes.arrayOf(PropTypes.string).isRequired,
        price:PropTypes.number.isRequired,
    }),
}

styles=StyleSheet.create({
    priceTop:{
        position: 'absolute',
        top: 0,
        left: 0,
        backgroundColor: 'rgba(0,0,0,.8)',
        color: Color.primaryTextColor,
        // color: var(--mainWhite),
        padding: '.3 .6 .5',
        borderBottomRightRadius: 1,
        fontSize: .5,
        textAlign: 'center',
    }
});