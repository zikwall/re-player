package com.zikwall.nativereplayer;

import android.util.AttributeSet;
import android.view.View;
import android.content.Context;
import android.view.ViewGroup;
import android.widget.FrameLayout;

import com.google.android.exoplayer2.source.ads.AdsLoader;
import com.google.android.exoplayer2.util.Assertions;

import java.util.ArrayList;

public class NativeVideoView extends View implements AdsLoader.AdViewProvider {

    String adTag;
    private final FrameLayout adOverlayFrameLayout;

    public NativeVideoView(Context context, AttributeSet attrs, int defStyleAttr) {
        super(context, attrs, defStyleAttr);

        adOverlayFrameLayout = new FrameLayout(context);
    }

    @Override
    public void requestLayout() {
        super.requestLayout();
        post(measureAndLayout);
    }

    // AdsLoader.AdViewProvider implementation.

    @Override
    public ViewGroup getAdViewGroup() {
        return Assertions.checkNotNull(adOverlayFrameLayout, "exo_ad_overlay must be present for ad playback");
    }

    @Override
    public View[] getAdOverlayViews() {
        ArrayList<View> overlayViews = new ArrayList<>();
        if (adOverlayFrameLayout != null) {
            overlayViews.add(adOverlayFrameLayout);
        }
        return overlayViews.toArray(new View[0]);
    }

    private final Runnable measureAndLayout = new Runnable() {
        @Override
        public void run() {
            measure(
                    MeasureSpec.makeMeasureSpec(getWidth(), MeasureSpec.EXACTLY),
                    MeasureSpec.makeMeasureSpec(getHeight(), MeasureSpec.EXACTLY));
            layout(getLeft(), getTop(), getRight(), getBottom());
        }
    };
}
