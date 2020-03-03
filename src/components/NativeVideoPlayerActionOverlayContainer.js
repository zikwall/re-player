import React from 'react';
import {
    Text,
    View,
    Animated,
    TouchableOpacity,
    FlatList,
    Image,
    ImageBackground
} from 'react-native';
import IconFontisto from "react-native-vector-icons/Fontisto";
import { human } from 'react-native-typography';

import Row from './Row';

const PlaylistItem = ({ number, id, title, poster, onSelect, fullscreen }) => {
    return (
        <TouchableOpacity onPress={() => onSelect(id, title)}>
            <View style={{ height: 80 }}>
                <ImageBackground source={{ uri: poster }} style={{width: '90%', height: '90%', padding: 10}}>
                    <Text>
                        { title }
                    </Text>
                </ImageBackground>
            </View>
        </TouchableOpacity>
    )
};

const NativeVideoPlayerActionOverlayContainer = ({ items, onClose, style, closeStyle, width, iconSize, onSelectItem, fullscreen }) => {
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
            <View style={{ padding: 15 }}>
                <FlatList
                    data={items}
                    renderItem={({ item, index }) => (
                        <PlaylistItem
                            number={index + 1}
                            id={item.id}
                            title={item.title}
                            poster={item.poster}
                            onSelect={onSelectItem}
                            fullscreen={fullscreen}
                        />
                    )}
                    keyExtractor={(item, index) => `__id${item.id}`}
                />
            </View>
        </Animated.View>
    )
};

export default NativeVideoPlayerActionOverlayContainer;
