import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { AppView,Button,ItemList} from '../components';

import {withDataConsumer} from '../context';

// import Loading from "./Loading";
// import RoomFilter from "./RoomFilter";
// import {ItemList} from "../components";

function RoomContainer({context}) {
    console.log(context);
    const {Loading,sortedRooms,rooms}=context;
    
    if(Loading){
        return <AppView>
            <Text>No items match search criteria</Text>
        </AppView>;
    }
    return (
        <>
            {/* <RoomFilter rooms={rooms}/> */}
            <ItemList rooms={sortedRooms}/>
        </>
    ); 
}

export default withDataConsumer(RoomContainer);