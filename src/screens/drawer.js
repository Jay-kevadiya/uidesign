import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';

import DrawerSectionOne from '../components/drawerSectionOne';
import DrawerSectionTwo from '../components/drawerSectionTwo';

export default Drawer = (props) => {
    return (
        <View style={styles.container}>
            <DrawerContentScrollView {...props} >

                {/* First Container */}

                <DrawerSectionOne />

                {/* second container */}

                <DrawerSectionTwo {...props}/>
                
            </DrawerContentScrollView>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,

    }
});