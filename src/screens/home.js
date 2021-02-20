import React from 'react';
import { View, Text, StyleSheet, Button, ScrollView } from 'react-native';
import HomeHeader from '../components/homeHeader';
import Slider from '../components/slider';
import FlashList from '../components/flashList';
import TrendingList from '../components/trendingList';
import { promoImages } from '../common/data';



export default Home = (props) => {


    return (

        <View style={styles.container}>

            {/* Home Header */}
            <HomeHeader {...props} name="Home" />
            <Search {...props}/>
            <ScrollView showsVerticalScrollIndicator={false}>

                {/* Slider */}
               <Slider imagedata={promoImages} />

                <FlashList {...props}/>

                <TrendingList />

            </ScrollView>
        </View>

    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 10,
    }
});