import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import HomeHeader from '../components/homeHeader';
import Icon from 'react-native-vector-icons/Ionicons';


export default Profile = (props) => {
    return (
        <View style={styles.container}>

            <HomeHeader name="Profile" {...props} />

            <ScrollView>
                <View style={styles.mainContainer}>
                    <View style={styles.profileWrapper}>
                        <View style={styles.profileLeft}>
                            <Text style={styles.textstyle1}>Andrew R. Whitesides</Text>
                            <Text style={styles.textstyle2}>andrew@gmail.com</Text>
                        </View>

                        <View style={styles.profileright}>
                            <Image style={styles.profileImage} source={require('../assets/image/profile.jpeg')} />
                        </View>
                    </View>

                    <View style={styles.favouriteWrapper}>
                        <TouchableOpacity>
                            <View style={styles.favouritetag}>
                                <Icon name="heart-outline" size={30} color="rgb(84,137,147)" />
                                <Text style={styles.favText}>Favourite</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <View style={styles.favouritetag}>
                                <Icon name="briefcase-outline" size={30} color="rgb(84,137,147)" />
                                <Text style={styles.favText}>Shop Owner</Text>
                            </View>
                        </TouchableOpacity>

                    </View>

                    <View style={styles.myorderWrapper}>
                        <View style={styles.orderTag}>
                            <Icon name="print-outline" size={30} color="rgb(84,137,147)" />
                            <Text style={styles.orderText}>My Orders</Text>
                        </View>
                        <TouchableOpacity onPress={() => props.navigation.navigate('MyOrders')}>
                            <View style={styles.Viewall}>
                                <Text style={styles.viewText}>View all</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.profilesetWarpper}>
                        <View style={styles.profilesub}>
                            <View style={styles.orderTag}>
                                <Icon name="people-outline" size={30} color="rgb(84,137,147)" />
                                <Text style={styles.orderText}>Profile Settings</Text>
                            </View>
                            <TouchableOpacity>
                                <View style={styles.Viewall}>
                                    <Text style={styles.viewText}>Edit</Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.detailtag}>
                            <Text style={styles.fullname}>Full name</Text>
                            <Text style={styles.subname}>Andrew R. Whitesides</Text>
                        </View>

                        <View style={styles.detailtag}>
                            <Text style={styles.fullname}>Email</Text>
                            <Text style={styles.subname}>andrew@gmail.com</Text>
                        </View>

                        <View style={styles.detailtag}>
                            <Text style={styles.fullname}>Gender</Text>
                            <Text style={styles.subname}>Male</Text>
                        </View>

                        <View style={styles.detailtag}>
                            <Text style={styles.fullname}>Birth Date</Text>
                            <Text style={styles.subname}>1993-12-31</Text>
                        </View>
                    </View>

                    <View style={styles.AccountSetWrapper}>
                        <View style={styles.orderTag}>
                            <Icon name="settings-sharp" size={30} color="rgb(84,137,147)" />
                            <Text style={styles.orderText}>Account Settings</Text>
                        </View>

                        <View style={styles.settab}>
                            <Icon name="location-outline" size={25} color="rgb(84,137,147)" />
                            <Text style={styles.shipText}>Shipping address</Text>
                        </View>

                        <View style={styles.settab}>
                            <Icon name="help-circle-outline" size={25} color="rgb(84,137,147)" />
                            <Text style={styles.shipText}>Help & Support</Text>
                        </View>
                    </View>

                </View>



            </ScrollView>
        </View>


    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10
    },
    mainContainer: {
        paddingHorizontal: 5
    },
    profileWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    profileLeft: {
        marginTop: 20,
    },
    textstyle1: {
        fontFamily: 'Rubik-Bold',
        fontSize: 25,
        color: 'rgb(16,152,167)'
    },
    textstyle2: {
        marginTop: 5,
        fontFamily: 'Rubik-light',
        color: 'rgb(16,152,167)',
        fontSize: 18
    },
    profileright: {

    },
    profileImage: {
        height: 70,
        width: 70,
        borderRadius: 40
    },
    favouriteWrapper: {
        backgroundColor: 'white',
        marginTop: 20,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.05,
        elevation: 5,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        borderRadius: 10

    },
    favouritetag: {
        alignItems: 'center',
    },
    favText: {
        fontSize: 15,
        fontFamily: 'Roboto-Regular',
        color: 'rgb(84,137,147)'
    },
    myorderWrapper: {
        backgroundColor: 'white',
        marginTop: 20,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.05,
        elevation: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,

    },
    orderTag: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
        

    },
    orderText: {
        color: 'rgb(84,137,147)',
        fontFamily: 'Roboto-Medium',
        fontSize: 18,
        marginLeft: 30
    },
    Viewall: {
        marginRight: 10
    },
    viewText: {
        color: 'rgb(84,137,147)',
        fontFamily: 'Roboto-Medium',
        fontSize: 15
    },
    profilesetWarpper: {
        backgroundColor: 'white',
        marginTop: 20,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.05,
        elevation: 5,
        borderRadius: 10



    },
    profilesub: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingVertical: 10
    },
    detailtag: {
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 15
    },
    fullname: {
        fontFamily: 'Roboto-Bold',
        color: 'rgb(84,137,147)',
        fontSize: 15
    },
    subname: {
        fontFamily: 'Roboto-Light',
        color: 'rgb(84,137,147)',
        fontSize: 15
    },
    AccountSetWrapper: {
        backgroundColor: 'white',
        marginTop: 20,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.05,
        elevation: 5,
        borderRadius: 10,
        marginBottom:20,
        paddingVertical:10
    },
    settab: {
        flexDirection:'row',
        alignItems: 'center',
        paddingHorizontal:20,
        marginTop:20
        
    },
    shipText: {
        fontFamily: 'Roboto-Bold',
        color: 'rgb(84,137,147)',
        fontSize: 15,
        marginLeft:20
    }
});