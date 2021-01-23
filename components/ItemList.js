import React from 'react';
import {Image,Text,View} from 'react-native';

import { Color } from '../constants';

import Item from './Item';

export default function ItemList({rooms}) {
    if(rooms.length===0){
        return (
            <View className="empty-search">
                <Text>unfortunately no rooms matched your search parameters</Text>
            </View>
        );
    }
    return (
        <View className="roomslist">
            <View className="roomslist-center">
                {
                    rooms.map(item=>{
                        return <Item key={item.id} room={item}/>
                    })
                }
            </View>
        </View>
    )
}
