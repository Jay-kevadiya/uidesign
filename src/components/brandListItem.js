import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Details from '../components/detail';
import Review from '../components/review';
import HomeBrand from '../components/homeBarnd';



export default BrandListItem = (props) => {
    const item = props.route.params;

    const [productType, SetProductType] = useState(0);
    const onPressProductType = (type) => { SetProductType(type) };

    const viewItems = () => {
        if (productType === 0) {
            return <HomeBrand test={item.item}/>;

        } else if (productType === 1) {
            return <Details/>
        } else if (productType === 2) {
            return <Review/>
        }


    };
    return (
        <View style={styles.container}>
            <View style={styles.imageWrapper}>
                <TouchableOpacity onPress={() => props.navigation.goBack()}>
                    <Icon name="chevron-back-outline" size={35} color="white" />
                </TouchableOpacity>
                <Image style={styles.imageStyle} source={item.item.logo} />
            </View>

            <View style={styles.listWrapper}>
                <View style={styles.productWrapper}>
                    <TouchableOpacity onPress={() => onPressProductType(0)}>
                        <Text style={[styles.textStyle, { backgroundColor: productType === 0 ? '#009DB0' : '#fff', color: productType === 0 ? '#fff' : '#009DB0',borderColor:'#009DB0', borderWidth:1 }]}>Home</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.detailsWrapper}>
                    <TouchableOpacity onPress={() => onPressProductType(1)}>
                        <Text style={[styles.textStyle,  {backgroundColor: productType === 1 ? '#009DB0' : '#fff', color: productType === 1 ? '#fff' : '#009DB0',borderColor:'#009DB0', borderWidth:1 }]}>Details</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.reviewWrapper}>
                    <TouchableOpacity onPress={() => onPressProductType(2)}>
                        <Text style={[styles.textStyle, {  backgroundColor: productType === 2 ? '#009DB0' : '#fff', color: productType === 2 ? '#fff' : '#009DB0',borderColor:'#009DB0', borderWidth:1 }]}>Review</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <ScrollView>
                <View>{viewItems()}</View>
            </ScrollView>

        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    imageWrapper: {
        backgroundColor: 'rgb(85,210,225)',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingHorizontal: 15,
        paddingVertical:15
    },
    imageStyle: {
        // height:
        alignSelf: 'center',
        marginLeft: '25%',
        tintColor:'white'
    },
    listWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: 20,
    },
    textStyle: {
        fontFamily: 'Roboto-Bold',
        color: '#fff',
        backgroundColor: '#009DB0',
        padding: 10,
        paddingHorizontal: 25,
        borderRadius: 20
    },
});