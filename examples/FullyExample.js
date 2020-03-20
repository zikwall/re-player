import React from 'react';
import {
    View,
    StatusBar,
} from 'react-native';

import RePlayer from '@zikwall/re-player';

const App = () => {
    return (
        <>
            <StatusBar hidden />

            <View style={{ paddingTop: '56.25%' }}>
                <View style={{
                    position: 'absolute',
                    left: 0,
                    right:0,
                    bottom: 0,
                    top: 0,
                    backgroundColor: '#000'
                }}>
                    <RePlayer
                        source={
                            [
                                {
                                    size: 576,
                                    src: 'http://ultotv.ru:8888/live/uhd/playlist.m3u8'
                                },
                                {
                                    size: 720,
                                    src: 'https://previews.customer.envatousercontent.com/h264-video-previews/01940919-82fb-43b7-b688-b585f0a0abe9/2158627.mp4'
                                },
                                {
                                    size: 1080,
                                    src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
                                }
                            ]
                        }
                        title={'Test'}
                        nativeProps={{
                            poster: 'https://raw.githubusercontent.com/zikwall/re-player/master/screenshots/re-player-poster-2.png'
                        }}
                        onEventLoadStart={() => {
                            console.log('Ok!');
                        }}
                        onEventLoad={(videoData) => {
                            console.log(videoData);
                        }}
                        onEventProgress={(currentTime) => {
                            //console.log(currentTime); NOT RECOMMENDED OUT IN CONSOLE ^_^
                        }}
                        onEventCrop={(rzm) => {
                            console.log(rzm);
                        }}
                        onEventSeek={(value) => {
                            console.log(value);
                        }}
                        onEventDoubleTapSeek={(seekValue, direction) => {
                            console.log([seekValue, direction])
                        }}
                        onEventFullscreen={(isFullscreen) => {
                            console.log(isFullscreen);
                        }}
                        onEventDoubleTapFullscreen={(isFullscreen) => {
                            console.log(['DOUBLE TAP FULLSCREEN', isFullscreen])
                        }}
                        onEventPlayPause={(isPaused) => {
                            console.log(isPaused);
                        }}
                        onEventLock={(isLocked) => {
                            console.log(isLocked);
                        }}
                        onEventMute={(isMuted) => {
                            console.log(isMuted);
                        }}
                        onEventVolumeChange={(volume) => {
                            console.log(volume);
                        }}
                        onEventAudioBecomingNoisy={() => {
                            //
                        }}
                        onEventAudioFocusChanged={(hasAudioFocus) => {
                            //
                        }}
                        onEventHardwareBackPress={(isFullscreen) => {
                            console.log(['HARDWARE', isFullscreen]);
                        }}
                        onEventOverlayClose={() => {
                            console.log('SideOverplay is CLOSED');
                        }}
                        onEventOverlayOpen={() => {
                            console.log('SideOverplay is OPENED');
                        }}
                        onEventShowControls={() => {
                            console.log('Controls is visible!')
                        }}
                    />
                </View>
            </View>
        </>
    );
};

export default App;
