import React from 'react';
import {
    View,
    Animated,
    TouchableOpacity
} from 'react-native';
import IconFontisto from "react-native-vector-icons/Fontisto";

import Row from './Row';

const NativeVideoPlayerActionOverlayContainer = ({ children, onClose, style, closeStyle, width, iconSize }) => {
    return (
        <Animated.View style={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            backgroundColor: 'rgba( 0, 0, 0, 0.3);',
            width: width,
            height: '100%',
            zIndex: 99999,
            ...style
        }}>
            <Row>
                <View />
                <TouchableOpacity onPress={ onClose }>
                    <IconFontisto name={'arrow-right-l'} size={iconSize} style={{ color: '#fff', ...closeStyle }} />
                </TouchableOpacity>
            </Row>
            { children }
        </Animated.View>
    )
};

export default NativeVideoPlayerActionOverlayContainer;
