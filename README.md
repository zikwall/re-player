![GitHub package.json version](https://img.shields.io/github/package-json/v/zikwall/re-player)
![NPM](https://img.shields.io/npm/l/@zikwall/re-player)

<div align="center">
  <img width="700" height="350" src="https://github.com/zikwall/re-player/blob/master/screenshots/re-player-poster-2.png">
  <h4>For React Native Apps</h4>
  <h5>powered by PlayHub app</h5>
</div>

Common | Adaptive | Live Streaming
--- | --- | ---
![Gif1](/gifs/20200229_205716_2.gif) | ![Gif1](/gifs/20200229_205716_3.gif) | ![Gif1](/gifs/20200229_205838_1.gif)

### Features

- [x] Easy Customizable: events, icons components, other `props`.
- [x] Light Animated & Responsive Components
- [x] Controls & UI:
    - [x] Play/Pause & with BigPlay
    - [x] Volume with adaptive icons depending on the sound level & `onPress` for mute/unmute.
    - [x] Crop (resize mode).
    - [x] Full-screen mode.
    - [x] Overlay Sidebar: You can set you custom content in side bar, e.g. playlist or related videos.
    - [x] Lock: You can lock the control buttons and not show them.
    - [x] Back from full-screen.
    - [x] Title component on full-screen, e.g. text or text with image.
- [x] Custom Events
    - [x] On double taps left/right.
    - [x] On double taps video transform to full-screen, one tab set visible controls.
    - [x] Intercepts a standard gesture/button back during full-screen mode to exit it.
    - [x] e.g. `onFullscreen`, `onPause`/`onPlay`, etc.
- [x] Video types
    - [x] Stream/Online without time controls & mark `live`.
    - [x] Video ends with time controls & dynamic formatted (`h:i:s`) duration times (current, end).

### Props

- [x] `source` array of object { size: int, src: string }
- [x] `title` string
- [x] `nativeProps` object, available native react-native-video props

#### Future todo

- [ ] `playlist`, see [Playlist Branch](https://github.com/zikwall/re-player/tree/playlist)
- [ ] `fullscreenEnabled`
- [ ] `hardwareEnabled`
- [ ] `overlayEnabled`
- [ ] `lockEnabled`
- [ ] `doubleTapFullscreenEnabled`
- [ ] `doubleTapSeekEnabled`
- [ ] `statusBarMode`
- [ ] `adTag`, wait PR: [#1839](https://github.com/react-native-community/react-native-video/pull/1839)

### Events

- [x] `onEventLoadStart()`
- [x] `onEventLoad(videoData)`
- [x] `onEventProgress(currentTime)`
- [x] `onEventCrop(mode)`
- [x] `onEventSeek(value)`
- [x] `onEventDoubleTapSeek(seekValue, direction)`, direction one of `left`, `right`
- [x] `onEventFullscreen(isFullscreen)`
- [x] `onEventDoubleTapFullscreen(isFullscreen)`
- [x] `onEventPlayPause(isPaused)`
- [x] `onEventLock(isLocked)`
- [x] `onEventMute(isMuted)`
- [x] `onEventVolumeChange(volumeValue)`
- [x] `onEventAudioBecomingNoisy()`
- [x] `onEventAudioFocusChanged(hasAudioFocus)`
- [x] `onEventHardwareBackPress(isFullscreen)`
- [x] `onEventOverlayClose()`
- [x] `onEventOverlayOpen()`
- [x] `onEventShowControls`

### Installation

#### Before install dependencies

- [x] `prop-types`
- [x] `react-native-video`, see manual: https://github.com/react-native-community/react-native-video
- [x] `react-native-orientation`, see manual: https://github.com/yamill/react-native-orientation
- [x] `react-native-vector-icons`, see manual: https://github.com/oblador/react-native-vector-icons
- [x] `@react-native-community/slider`, see manual: https://github.com/react-native-community/react-native-slider
- [x] `react-native-typography`, see manual: https://github.com/hectahertz/react-native-typography

#### Install RePLayer

- [x] `npm i @zikwall/re-player`
- [x] from git add `package.json` next line: `"@zikwall/re-player": "git+https://git@github.com/zikwall/re-player.git"`

### Usage is very simple

```js

import React from 'react';
import {
    View,
} from 'react-native';
import RePlayer from '@zikwall/re-player';

const App = () => {
    return (
        <RePlayer
             source={[
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
                 },
                 {
                     size: 1080,
                     src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
                 }
             ]}
             title={'Test'}
             nativeProps={{
                 poster: 'https://raw.githubusercontent.com/zikwall/re-player/master/screenshots/re-player-poster-2.png'
            }}
        />
    )
}

```

#### 16:9 aspect ratio example

```js

   // ...
    
    return (
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
                  {...playerProps}
              />
            </View>
        </View>
    )

   // ...

```

### Screenshots

General | Fullscreen 
--- | ---
![Screen1](/screenshots/Screenshot_20200302-155459_lol.jpg) | ![Screen2](/screenshots/Screenshot_20200302-155510_lol.jpg)
![Screen3](/screenshots/Screenshot_20200303-131430_lol.jpg) | ![Screen4](/screenshots/Screenshot_20200303-132643_lol.jpg)
