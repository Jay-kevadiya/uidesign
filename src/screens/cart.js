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
                            <Image  />
                        </View>
                        <View style={styles.textTag}>

                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:15
    },
    shoppingWrapper:{
        flexDirection:'row',
        alignItems: 'center',
    },
    cartWrapper:{

    },
    textWrapper:{
        marginLeft:25,
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
    
    },
    imageTextWrapper:{

    },
    imageTag:{

    },
textTag:{

}

});