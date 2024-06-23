import React, {Component} from 'react';
import {View, Button} from 'react-native';
import commonStyles from './styles/commonStyles';
import {Routes} from './routes/routes';

export default class NavigatorView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={[commonStyles.viewCenterVertical]}>
                <Button
                    title={'Clone Insta UI'}
                    onPress={() =>
                        this.props.navigation.navigate(Routes.CLONE_INSTA)
                    }></Button>
                <View style={{height: 16}}></View>
                <Button
                    color={'purple'}
                    title={'Using ref'}
                    onPress={() =>
                        this.props.navigation.navigate(Routes.REF)
                    }></Button>
                <View style={{height: 16}}></View>
                <Button
                    title={'Anim'}
                    onPress={() =>
                        this.props.navigation.navigate(Routes.ANIM)
                    }></Button>
                <View style={{height: 16}}></View>
                <Button
                    title={'Tag box'}
                    color={'purple'}
                    onPress={() =>
                        this.props.navigation.navigate(Routes.TAG_BOX, {
                            tags: [
                                'Xanh',
                                'Silicon',
                                'Size L',
                                'Xanh',
                                'Silicon',
                                'Size L',
                                'Size L',
                            ],
                            onTagPress: (tag, index) => {
                                alert(`${tag} pressed`);
                            },
                        })
                    }></Button>
                <View style={{height: 16}}></View>
                <Button
                    title={'Tag input box'}
                    onPress={() =>
                        this.props.navigation.navigate(Routes.TAG_INPUT_BOX)
                    }></Button>
            </View>
        );
    }
}
