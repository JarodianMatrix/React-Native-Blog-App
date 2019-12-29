import React, { useContext, useEffect } from 'react';
import {View, StyleSheet, Text, FlatList, Button, TouchableOpacity} from 'react-native';
import {Context}  from "../context/blogContext";
import { Feather } from '@expo/vector-icons';

const indexScreen = function ( {navigation} ) {
    const  {state, deleteBlogPost, getBlogPosts} = useContext(Context);

    useEffect(() => {
        getBlogPosts();

        const listener = navigation.addListener('didFocus', () => {
            getBlogPosts();
        });

        //we add this little piece of code to get rid of the listener (ie memory leak) when we destroy our indexScreen
        return () => {
            listener.remove();
        };
    }, []);

    return (
        <View>
            <FlatList
                data={state}
                key={(blogPost) => {blogPost.title}}
                renderItem = {({item}) => {
                    return (
                        <TouchableOpacity onPress={()=>{navigation.navigate('Show', {id: item.id})}}>
                            <View style={styles.row}>
                                <Text style={styles.title}>{item.title}-{item.id}</Text>
                                <TouchableOpacity onPress={()=>{deleteBlogPost(item.id)}}>
                                    <Feather name={'trash'} style={styles.icon}/>
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
};

//React will call this whenever indexScreen is about to be displayed
indexScreen.navigationOptions = ( {navigation} ) => {
    return {
        headerRight: (
            <TouchableOpacity onPress={() => navigation.navigate('Create')}>
                <Feather name={'plus'} size={30} style={styles.plus}/>
            </TouchableOpacity>
        )
    };
};

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderTopWidth: 1,
        borderColor: 'black'
    },

    title: {
        fontSize: 18,
    },

    icon: {
        fontSize: 24
    },

    plus: {
        marginRight: 10
    }

});

export default indexScreen;