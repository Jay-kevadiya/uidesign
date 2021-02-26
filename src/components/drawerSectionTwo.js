import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Switch } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


export default DrawerSectionTwo = (props) => {

    return (
        <>
            <View style={styles.secondContainer}>
                <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
                    <View style={styles.homeWrapper}>
                        <Icon name="home-outline" size={25} color="rgb(14,87,97)" />
                        <Text style={styles.homeText}>Home</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => props.navigation.navigate('Notifications')}>
                    <View style={styles.homeWrapper}>
                        <Icon name="notifications-outline" size={25} color="rgb(14,87,97)" />
                        <Text style={styles.homeText}>Notifications</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => props.navigation.navigate('MyOrders')}>
                    <View style={styles.homeWrapper}>
                        <Icon name="briefcase-outline" size={25} color="rgb(14,87,97)" />
                        <Text style={styles.homeText}>My Orders</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => props.navigation.navigate('Favourite')}>
                    <View style={styles.homeWrapper}>
                        <Icon name="heart-outline" size={25} color="rgb(14,87,97)" />
                        <Text style={styles.homeText}>Wish List</Text>
                    </View>
                </TouchableOpacity>
            </View>

            {/* third Container */}
            <View style={styles.thirdContainer}>
                <View style={styles.textWrapper}>
                    <Text style={styles.textDesign}>Application Preferences</Text>
                </View>


                <TouchableOpacity>
                    <View style={styles.homeWrapper}>
                        <Icon name="help-circle-outline" size={25} color="rgb(14,87,97)" />
                        <Text style={styles.homeText}>Help & Support</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.homeWrapper}>
                        <Icon name="settings-outline" size={25} color="rgb(14,87,97)" />
                        <Text style={styles.homeText}>Settings</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>

                    <View style={styles.homeWrapper}>
                        <Icon name="language-outline" size={25} color="rgb(14,87,97)" />
                        <Text style={styles.homeText}>Languages</Text>
                    </View>
                </TouchableOpacity>
            </View>

        </>
    )
};

const styles = StyleSheet.create({
    secondContainer: {
        borderTopWidth: 1,
        borderTopColor: 'rgb(223,229,231)',
        borderBottomWidth: 1,
        borderBottomColor: 'rgb(223,229,231)',
        height: 200
    },
    homeWrapper: {
        flexDirection: 'row',
        alignItems: 'baseline',
        marginLeft: 10,
        marginVertical: 10,

    },
    homeText: {
        paddingHorizontal: 30,
        color: "rgb(14,87,97)"
    },
    thirdContainer: {
        borderTopWidth: 1,
        borderTopColor: 'rgb(223,229,231)',
        borderBottomWidth: 1,
        borderBottomColor: 'rgb(223,229,231)',
        height: 200,

    },
    textWrapper: {

        paddingVertical: 10,
        paddingHorizontal: 20
    },
    textDesign: {

        color: "rgb(14,87,97)"
    }

});