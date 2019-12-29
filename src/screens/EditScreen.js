import React, { useContext } from 'react';
import {StyleSheet} from 'react-native';
import { Context  } from "../context/blogContext";
import BlogPostForm from "../components/BlogPostForm";

const EditScreen = function ({navigation}) {
    const id = navigation.getParam('id');
    const {state, editBlogPost} = useContext(Context);
    const blogPost = state.find((blogPost) => blogPost.id === id );

    return ( <BlogPostForm

        initialValues={{title: blogPost.title, content: blogPost.content}}

        onSubmit={(title, content) => {
            editBlogPost(id, title, content, () => navigation.pop())
    }}/> )
};

const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        padding: 5,
        margin: 5
    },

    label: {
        fontSize: 21,
        marginVertical: 10,
        marginLeft: 5
    }

});

export default EditScreen;
