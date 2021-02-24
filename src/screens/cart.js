import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import CartData from '../common/CartData';
export default Cart = (props) => {

    const cartRenderItems = ({ item }) => {
        return (
            <View style={styles.listContainer}>
                <View style={styles.listWrapper}>
                    <View style={styles.imageTextWrapper}>
                        <View style={styles.imageTag}>
                            <Image style={{ height: 100, width: 50 }} source={item.image} />
                        </View>
                        <View style={styles.textTag}>
                            <Text style={styles.plantText}>{item.itemName}</Text>
                            <Text style={styles.plantText}>{item.price}</Text>
                        </View>
                    </View>

                    <View style={styles.buttonWrapper}>
                        <TouchableOpacity>
                            <Icon name="add-circle-outline" size={30} color="#009db0" />
                        </TouchableOpacity>
                        <Text style={{ color: "#009db0", fontSize: 20 }}>2</Text>
                        <TouchableOpacity>
                            <Icon name="remove-circle-outline" size={30} color="#009db0" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    };
    return (
        <View style={styles.container}>
            {/* shop wrapper */}
            <View style={styles.shoppingWrapper}>
                <View style={styles.cartWrapper}>
                    <Icon name="cart-outline" size={30} color="#009DB0" />
                </View>
                <View style={styles.textWrapper}>
                    <Text style={styles.shopText}>Shopping Cart</Text>
                    <Text style={styles.content}>Verify your quentity and click checkout</Text>
                </View>
            </View>

            {/* List Wrapper */}

            
                <FlatList
                    data={CartData}
                    keyExtractor={item => item.id}
                    renderItem={cartRenderItems}
                />
            

            <View style={styles.bottomWrapper}>
                <View style={styles.subtotalWrapper}>
                    <Text style={styles.textsub}>Sub Total</Text>
                    <Text style={styles.textsub}>$50.23</Text>
                </View>

                <View style={styles.subtotalWrapper}>
                    <Text style={styles.textsub}>TAX(20%)</Text>
                    <Text style={styles.textsub}>$13.23</Text>
                </View>

                <View style={styles.btnWrapper}>
                    <View style={styles.checkoutStyle}>
                        <TouchableOpacity onPress={() => props.navigation.navigate('CheckOut')}>
                            <View style={styles.check}>
                                <Text style={styles.checkText}>Checkout</Text>
                                <Text style={styles.textprice}>$55.36</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>


        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
    },
    shoppingWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    cartWrapper: {

    },
    textWrapper: {
        marginLeft: 25,
        paddingBottom: 20
    },
    shopText: {
        fontFamily: 'Rubik-Bold',
        fontSize: 20,
        color: '#009db0',

    },
    content: {
        fontFamily: 'Rubik-Regular',
        fontSize: 15,
        marginTop: 5
    },
    listContainer: {
        backgroundColor: '#fff',
        paddingVertical: 10,
        marginVertical:10
    },
    listWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    imageTextWrapper: {
        flexDirection: 'row'
    },
    imageTag: {

    },
    textTag: {
        marginLeft: 30
    },
    plantText: {
        color: '#009db0',
        fontSize: 17,
        fontFamily: 'Roboto-Medium'
    },
    buttonWrapper: {
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    bottomWrapper: {
        paddingVertical: 10
    },
    subtotalWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10
    },
    textsub: {
        fontFamily: 'Roboto-Medium',
        fontSize: 15,
        color: '#009db0',
        paddingVertical: 5
    },
    btnWrapper: {

    },
    checkoutStyle: {
        backgroundColor: '#009db0',
        borderRadius: 20
    },
    check: {
        flexDirection: 'row',
        paddingVertical: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 30
    },
    checkText: {
        fontFamily: 'Roboto-Medium',
        fontSize: 18,
        color: 'white'
    },
    textprice: {
        fontFamily: 'Roboto-Medium',
        fontSize: 18,
        color: 'white'

    }

});