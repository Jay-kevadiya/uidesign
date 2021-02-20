import React from 'react';
import { View, Text, StyleSheet, Image , TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


export default Product = (props) => {
    const {test} = props;
    return (
        <View style={styles.productContainer}>
        {/* text list */}

        <View style={styles.productborderOne}>
            <View style={styles.productTextWrapper}>
                <View style={styles.productTextstyle}>
                    <Text style={styles.text}>{test.name}</Text>
                </View>

                <View style={styles.productRating}>
                    <Text style={styles.pText}>{test.rating}</Text>
                    <Icon name="star" size={20} color="gold" style={{ marginLeft: 5 }} />
                </View>
            </View>

            <View style={styles.priceWrapper}>
                <View style={styles.price}>
                    <Text style={styles.priceText}>$ {test.price}</Text>
                    <Text style={styles.mrpText}>$ {test.mrp}</Text>
                </View>
                <View style={styles.productSales}>
                    <Text style={styles.sales}>{test.sales} Sales</Text>
                </View>
            </View>


        </View>

        <View style={styles.productborderTwo}>
            <View style={styles.selectColor}>
                <Text style={styles.selectText}>Select Color</Text>
                <Text style={styles.clearallText}>Clear All</Text>
            </View>

            <View style={styles.colors}>
                <TouchableOpacity style={styles.colorsTypeOne}></TouchableOpacity>
                <TouchableOpacity style={styles.colorsTypeTwo}></TouchableOpacity>
                <TouchableOpacity style={styles.colorsTypeThree}></TouchableOpacity>
                <TouchableOpacity style={styles.colorsTypeFour}></TouchableOpacity>

            </View>
        </View>

        <View style={styles.productborderThree}>
            <View style={styles.selectColor}>
                <Text style={styles.selectText}>Select Color</Text>
                <Text style={styles.clearallText}>Clear All</Text>
            </View>

            <View style={styles.colors}>
                <TouchableOpacity style={styles.sizeTypeOne}>
                    <Text style={styles.sizeText}>L</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.sizeTypeTwo}>
                    <Text style={styles.sizeText}>X</Text>

                </TouchableOpacity>
                <TouchableOpacity style={styles.sizeTypeThree}>
                    <Text style={styles.sizeText}>M</Text>

                </TouchableOpacity>
                <TouchableOpacity style={styles.sizeTypeFour}>
                    <Text style={styles.sizeText}>XXL</Text>

                </TouchableOpacity>

            </View>
        </View>
    </View>
    )
};

const styles = StyleSheet.create({
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
});