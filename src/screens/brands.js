import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import HomeHeader from '../components/homeHeader';
import Search from '../components/search';
import BrandItem from '../components/brandItem';

export default Brands = (props) => {
    return (
        <View style={styles.container}>
            <HomeHeader {...props} name="Brands" />

                <Search {...props} onPressFilterButton={() => props.navigation.navigate('RightSlider')}/>
                
                <BrandItem {...props}/>

        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 10,
    }
});
