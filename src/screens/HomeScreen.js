import React from 'react';

import {StyleSheet, View } from "react-native";

import Header from '../components/Header/Header';
import SquareLinks from '../components/SquareLinks/SquareLinks';

const HomeScreen = (props) => {
    return (
        <View style={{backgroundColor: 'white'}}>
            <Header 
                title="CovidShopper" 
                imageSource={require('../../assets/logo.jpg')}
            />
            <SquareLinks navigation={props.navigation} />
        </View>
    )
}


const style = {
    view: {
        backgroundColor: 'white'
    }
}

export default HomeScreen;