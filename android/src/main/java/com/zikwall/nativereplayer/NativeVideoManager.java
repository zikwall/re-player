package com.zikwall.nativereplayer;

import com.facebook.drawee.backends.pipeline.Fresco;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;

public class NativeVideoManager extends SimpleViewManager<NativeVideoView> {

    public static final String REACT_CLASS = "RCTVideoView";

    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @Override
    protected NativeVideoView createViewInstance(ThemedReactContext reactContext) {
        return new NativeVideoView(reactContext);
    }
}
