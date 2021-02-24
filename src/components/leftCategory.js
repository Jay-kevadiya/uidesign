import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, ImageBackground, TouchableOpacity, FlatList } from 'react-native';
import { CategoryData } from '../common/Category';


export default LeftCategory = (props) => {

    const renderLeftList = ({ item }) => {
        const id = item.id;
        return (

            <View style={styles.leftWrapper} key={item.id}>

                { id % 2 === 1 ?
                    <>
                        <View style={styles.imageTag} >
                            <ImageBackground style={{ height: 150, width: 170, flexDirection: 'column', alignItems: 'center', resizeMode: 'cover' }} source={require('../assets/image/back.jpg')}>
                                <Image style={styles.shoeStyle} source={item.logo} />
                                <Text style={styles.manText}>{item.CategoryName}</Text>
                            </ImageBackground>
                        </View>
                        <View style={styles.rightWrapper}>
                            <View style={styles.itemWrapper}>
                                <View style={styles.itemStyle}>
                                    <TouchableOpacity onPress={() => alert(item.SubCategory[1].label)}>
                                        <Text style={styles.textdecor}>{item.SubCategory[1].label}</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => alert(item.SubCategory[2].label)}>
                                        <Text style={styles.textdecor}>{item.SubCategory[2].label}</Text>
                                    </TouchableOpacity>

                                    {/* {item.SubCategory.map(sub => (
                                        <TouchableOpacity onPress={() => alert(sub.label)}>
                                        <Text style={styles.textdecor}>{sub.label}</Text>
                                    </TouchableOpacity>
                                    ))} */}
                                </View>
                                <View style={styles.itemStyle}>
                                    <TouchableOpacity onPress={() => alert(item.SubCategory[3].label)}>
                                        <Text style={styles.textdecor}>{item.SubCategory[3].label}</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => alert(item.SubCategory[4].label)}>
                                        <Text style={styles.textdecor}>{item.SubCategory[4].label}</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </>

                    :
                    <>
                        <View style={styles.rightWrapper}>
                            <View style={styles.itemWrapper}>
                                <View style={styles.itemStyle}>
                                    <TouchableOpacity onPress={() => alert(item.SubCategory[5].label)}>
                                        <Text style={styles.textdecor}>{item.SubCategory[5].label}</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => alert(item.SubCategory[6].label)}>
                                        <Text style={styles.textdecor}>{item.SubCategory[6].label}</Text>
                                    </TouchableOpacity>

                                </View>
                                <View style={styles.itemStyle}>
                                    <TouchableOpacity onPress={() => alert(item.SubCategory[7].label)}>
                                        <Text style={styles.textdecor}>{item.SubCategory[7].label}</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => alert(item.SubCategory[8].label)}>
                                        <Text style={styles.textdecor}>{item.SubCategory[8].label}</Text>
                                    </TouchableOpacity>

                                </View>
                            </View>
                        </View>

                        <View style={styles.imageTag}>
                            <ImageBackground style={{ height: 150, width: 170, flexDirection: 'column', alignItems: 'center', resizeMode: 'cover' }} source={require('../assets/image/back.jpg')}>
                                <Image style={styles.shoeStyle} source={item.logo} />
                                <Text style={styles.manText}>{item.CategoryName}</Text>
                            </ImageBackground>
                        </View>

                    </>

                }

            </View>
        )
    };
    return (
        <View style={styles.catContainer}>
            <FlatList
                data={CategoryData}
                keyExtractor={item => item.id}
                renderItem={renderLeftList}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    catContainer: {
        paddingHorizontal: 20,
    },
    leftWrapper: {
        flexDirection: 'row',

    },
    imageTag: {
        // backgroundColor: 'pink',
    },
    shoeStyle: {
        height: 50,
        width: 50,
        marginTop: 20,
        tintColor: 'white'
    },
    manText: {
        color: 'white',
        fontFamily: 'Roboto-Bold',
        fontSize: 20,
        marginTop: 10
    },
    rightWrapper: {
        backgroundColor: 'white',
        width: 195
    },
    itemWrapper: {
        backgroundColor: 'white'
    },
    itemStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginTop: 10,
    },
    textdecor: {
        borderWidth: 1,
        borderColor: 'rgb(34,168,187)',
        borderRadius: 10,
        padding: 5,
    }
});