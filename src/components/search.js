import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity, Image} from 'react-native';

export default Search = (props) => {
    return(
        <TouchableOpacity>
                <View style={styles.searchContainer}>
                    <View style={styles.searchWrapper}>
                        <Image style={styles.searchImage} source={require('../assets/icon/search1.png')} />
                        <Text style={styles.searchText}>Search</Text>

                        <TouchableOpacity onPress={() => props.navigation.navigate('RightSlider')}>
                        <View style={styles.imageWrapper}>
                            <Image style={styles.menuImage} source={require('../assets/icon/setting.png')} />
                        </View>
                        </TouchableOpacity>
                    </View>
                </View>

                
            </TouchableOpacity>
    )
};
const styles = StyleSheet.create({
    searchContainer: {
        margin:10

    },
    searchWrapper: {
        borderWidth: 1,
        borderColor: 'rgb(225,225,225)',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        margin: 10,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 2,


    },
    searchImage: {
        height: 30,
        width: 30,
        marginLeft: 10
    },
    searchText: {
        marginLeft: 20,
        fontSize: 20,
        color: "rgb(200,205,235)"
    },
    imageWrapper: {
        marginLeft: 170
    },
    menuImage: {
        height: 25,
        width: 30
    }
});
