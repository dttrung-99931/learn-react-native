import React, {useRef, useState} from 'react';
import PropTypes from 'prop-types';
import {
    View,
    TextInput,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

TagBoxInput.propTypes = {
    onTagPress: PropTypes.func,
};
TagBoxInput.defaultProps = {
    onTagPress: (tag, index) => {},
};

export default function TagBoxInput(props) {
    const suggestedTags = [
        'Xanh',
        'Silicon',
        'Size L',
        'Xanh',
        'Silicon',
        'Size L',
        'Size L',
    ];
    const [selectedTags, setSelectedTags] = useState(['Xanh']);
    const [text, setText] = useState('');
    const refTimeout = useRef();
    const refTextInput = useRef();

    const onChangeText = text => {
        setText(text);
        clearTimeout(refTimeout.current);
        refTimeout.current = setTimeout(() => {
            console.log('Time out ');
        }, 1000);
    };

    const onEndEditing = () => {
        if (text) {
            setSelectedTags([...selectedTags, text]);
            refTextInput.current.setNativeProps({text: ''});
        }
    };

    return (
        <View style={styles.container}>
            {selectedTags.map((tag, index) => (
                <TouchableOpacity
                    key={index}
                    onPress={() => onTagPress(tag, index)}>
                    <Text style={styles.tag}>{tag}</Text>
                </TouchableOpacity>
            ))}
            <TextInput
                ref={refTextInput}
                onChangeText={onChangeText}
                style={{flex: 1, marginHorizontal: 8, minWidth: 64}}
                onSubmitEditing={onEndEditing}
                returnKeyType={'done'}
                blurOnSubmit={false}></TextInput>
        </View>
    );
}

const styles = StyleSheet.create({
    tag: {
        backgroundColor: 'purple',
        color: 'white',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 16,
        margin: 4,
        fontSize: 14,
    },
    container: {
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderWidth: 1,
        borderColor: 'purple',
        borderRadius: 24,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
    },
});
