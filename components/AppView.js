import React, { Children } from 'react';
import {Platform,StyleSheet,View} from 'react-native';

import {Color} from '../constants';

//need to make this look like a card, well-fitted to both platforms
const AppView = (props) => {
    return (
        <View style={[styles.container,props.containerStyle]}>
            {props.children}
        </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Color.backgroundColor,
    //   alignItems: 'center',
    //   justifyContent: 'center',
      margin:10,
    },
    
  });

export default AppView;
  