import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import ImageSlider from 'react-native-image-slider';

export default Slider = (props) => {
    return (
        <View style={styles.slider}>
                <ImageSlider 
                    autoPlayWithInterval={1000}
                    loopBothSides
                    images={props.imagedata}
                    style={{borderRadius: 10,backgroundColor:'white'}}

                /> 
        </View>
        
    )
};


const styles = StyleSheet.create({
    slider: {
        width: '100%',
        height: 180,
        paddingHorizontal:10
    }
});