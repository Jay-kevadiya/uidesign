import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FlashList from '../components/flashList';

export default Favourite = () => {
    return (
        <View style={{ flex: 1 }}>
                <FlashList titlename="Favourite" horizontaltype={false} lines={2} />
        </View>
    )
};