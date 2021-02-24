import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { productImages } from '../common/data';
import Detail from '../components/detail';
import Review from '../components/review';
import Product from '../components/product';
import Icon from 'react-native-vector-icons/Ionicons';
import Slider from '../components/slider';
import MenuTabs from '../components/menuTabs';


export default ProductScreen = (props) => {

    const { item } = props.route.params;

    const [count, setCount] = useState(0);

    const onminus = () => {
        count < 1 ? 0 : setCount(count - 1)
    };





    return (

        <View style={styles.container}>
            {/* topContainer */}
            <View style={styles.topContainer}>
                <View style={styles.imageContainer}>

                    <Slider imagedata={productImages} />

                </View>
                {/* list */}
                
                <MenuTabs {...props} title1="Product" title2="Detail" title3="Review" Tag1= {<Product test={item}/>} Tag2={<Detail />} Tag3={<Review {...props} />} />

            </View>
            {/* button bottom view */}

            <View style={styles.buttonContainer}>
                <View style={styles.buttonStyle}>

                    <View style={styles.buttonLeft}>
                        <TouchableOpacity>
                            <Icon name="heart-outline" size={30} color="white" />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.buttonRight}>
                        <View style={styles.addCartLeft}>
                            <Text style={styles.cartText}>Add to Cart</Text>
                        </View>
                        <View style={styles.addCartRight}>
                            <TouchableOpacity onPress={() => onminus()}>
                                <Icon name="remove-circle-outline" size={30} color="white" />
                            </TouchableOpacity>

                            <Text style={{ color: 'white', fontSize: 20, marginLeft: 10, marginRight: 10 }}>{count}</Text>

                            <TouchableOpacity onPress={() => setCount(count + 1)}>
                                <Icon name="add-circle-outline" size={30} color="white" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>

        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,


    },
    topContainer: {
        flex: 1,
        // backgroundColor:'yellow'
    },
    bottomContainer: {
        // flex: 1,
        backgroundColor: 'white'
    },
    imageContainer: {
        height: '40%',
        backgroundColor: 'white',
        marginTop: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: 'white'
    },
    imageSlider: {
        height: '100%',
        width: "100%"
    },
    productContainer: {
        flex: 1,
        backgroundColor: 'rgb(234,234,234)'
    },
    productborderOne: {
        paddingVertical: 10,
        paddingHorizontal: 20
    },
    productTextWrapper: {
        marginTop: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    productTextstyle: {

    },
    text: {
        color: 'rgb(37,94,113)',
        fontFamily: 'Roboto-Bold',
        fontSize: 16
    },
    productRating: {
        backgroundColor: 'rgb(37,94,113)',
        height: 40,
        width: 70,
        borderRadius: 20,
        alignItems: 'center',
        flexDirection: 'row',
    },
    pText: {
        color: 'white',
        marginLeft: 15,
        fontSize: 16
    },
    priceWrapper: {
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    price: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    priceText: {
        color: 'rgb(37,94,113)',
        fontFamily: 'Roboto-Bold',
        fontSize: 20
    },
    mrpText: {
        color: 'rgb(37,94,113)',
        fontFamily: 'Roboto-Regular',
        fontSize: 17,
        textDecorationLine: 'line-through',
        marginLeft: 10

    },
    salesText: {
        color: 'rgb(37,94,113)'
    },
    productborderTwo: {
        backgroundColor: 'white',
        paddingHorizontal: 20,
    },
    selectColor: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

    },
    selectText: {
        color: 'rgb(37,94,113)',
        fontFamily: 'Roboto-Bold',
        fontSize: 17
    },
    clearallText: {
        color: 'rgb(37,94,113)',
        fontFamily: 'Roboto-Medium',
        fontSize: 14
    },
    colors: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
    },
    colorsTypeOne: {
        backgroundColor: 'rgb(105,241,175)',
        height: 35,
        width: 35,
        borderRadius: 30
    },
    colorsTypeTwo: {
        backgroundColor: 'rgb(65,133,247)',
        height: 35,
        width: 35,
        borderRadius: 30,
        marginLeft: 5,
    },
    colorsTypeThree: {
        backgroundColor: 'rgb(95,127,141)',
        height: 35,
        width: 35,
        borderRadius: 30,
        marginLeft: 5
    },
    colorsTypeFour: {
        backgroundColor: 'rgb(123,76,254)',
        height: 40,
        width: 40,
        borderRadius: 30,
        marginLeft: 5,
    },
    productborderThree: {
        backgroundColor: 'white',
        paddingHorizontal: 20,
        marginTop: 10,
        marginBottom: 10

    },
    sizeTypeOne: {
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: 'rgb(65,133,247)',
        borderRadius: 10,
        height: 35,
        width: 35

    },
    sizeTypeTwo: {
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: 'rgb(65,133,247)',
        borderRadius: 10,
        height: 35,
        width: 35,
        marginLeft: 5

    },
    sizeTypeThree: {
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: 'rgb(65,133,247)',
        borderRadius: 10,
        height: 35,
        width: 35,
        marginLeft: 5


    },
    sizeTypeFour: {
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: 'rgb(65,133,247)',
        borderRadius: 10,
        height: 35,
        width: 35,
        marginLeft: 5
    },
    buttonContainer: {
        backgroundColor: 'white',

    },
    buttonWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 10
    },
    buttonLeft: {
        backgroundColor: 'rgb(65,133,247)',
        height: 50,
        width: '20%',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 8
    },
    buttonStyle: {
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    buttonRight: {
        backgroundColor: 'rgb(65,133,247)',
        height: 50,
        width: '75%',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 8,
        flexDirection: 'row',

    },
    addCartLeft: {
        alignItems: 'center'
    },
    cartText: {
        fontSize: 15,
        color: "white",
        marginLeft: 20

    },
    addCartRight: {
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 40,
        justifyContent: 'center',
    }
});