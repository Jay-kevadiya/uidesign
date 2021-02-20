import React from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
export default Cart = () => {
    return(
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
            <View style={styles.listContainer}> 
                <View style={styles.listWrapper}>
                    <View style={styles.imageTextWrapper}>
                        <View style={styles.imageTag}>
                            <Image style={{height:100,width:50}} source={require('../assets/image/product1.jpg')}/>
                        </View>
                        <View style={styles.textTag}>
                            <Text style={styles.plantText}>Plant Vases</Text>
                            <Text style={styles.plantText}>$63.98</Text>
                        </View>
                    </View>

                    <View style={styles.buttonWrapper}>
                    <Icon name="add-circle-outline" size={30}  />
                    <Text>2</Text>
                        <Icon name="remove-circle-outline" size={30}  />
                    </View>
                </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        margin:10,
    },
    shoppingWrapper:{
        flexDirection:'row',
        alignItems: 'center',
    },
    cartWrapper:{

    },
    textWrapper:{
        marginLeft:25,
        paddingBottom:20
    },
    shopText:{
        fontFamily:'Rubik-Bold',
        fontSize:20,
        color:'#009db0',

    },
    content:{
        fontFamily:'Rubik-Regular',
        fontSize:15,
        marginTop:5
    },
    listContainer:{
        backgroundColor:'#fff'
    },
    listWrapper:{
    flexDirection:'row',
    justifyContent: 'space-between',
    },
    imageTextWrapper:{
        flexDirection:'row'
    },
    imageTag:{
        marginLeft:10
    },
textTag:{
    marginLeft:30
},
plantText:{
    color:'#009db0',
    fontSize:17,
    fontFamily:'Roboto-Medium'
},
buttonWrapper:{

}

});