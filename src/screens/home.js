import React, {useState} from 'react';
import { View, Text, StyleSheet, Button, ScrollView } from 'react-native';
import HomeHeader from '../components/homeHeader';
import Slider from '../components/slider';
import FlashList from '../components/flashList';
import TrendingList from '../components/trendingList';
import { promoImages } from '../common/data';
import RightSlider from '../components/rightSlider';



export default Home = (props) => {
    // const [showSideBar, setShowSideBar] = useState(false);


    return (

        <View style={styles.container}>
          
            {/* Home Header */}
            <HomeHeader {...props} name="Home"  />
            <Search onPressFilterButton={ () => props.navigation.navigate('RightSlider')}/>
            <ScrollView showsVerticalScrollIndicator={false}>

                {/* Slider */}
               <Slider imagedata={promoImages} />

                <FlashList {...props} titlename="Flash Sales"/>

                <TrendingList />

            </ScrollView>
        </View>

    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
      
    }
});