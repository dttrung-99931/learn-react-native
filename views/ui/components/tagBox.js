import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

TagBox.propTypes = {
    tags: PropTypes.array,
    onTagPress: PropTypes.func,
};
TagBox.defaultProps = {
    tags: [],
    onTagPress: (tag, index) => {},
};
export default function TagBox(props) {
    const {tags, onTagPress} = props.route?.params ?? props;

    return (
        <View
            style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                padding: 8,
            }}>
            {tags?.map((tag, index) => (
                <TouchableOpacity
                    key={index}
                    onPress={() => onTagPress(tag, index)}>
                    <Text
                        style={{
                            backgroundColor: 'purple',
                            color: 'white',
                            paddingHorizontal: 8,
                            paddingVertical: 4,
                            borderRadius: 16,
                            margin: 4,
                            fontSize: 14,
                        }}>
                        {tag}
                    </Text>
                </TouchableOpacity>
            ))}
        </View>
    );
}
