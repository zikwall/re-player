export const formatTime = (second) => {
    let h = 0,
        i = 0,
        s = parseInt(second);
    if (s > 60) {
        i = parseInt(s / 60);
        s = parseInt(s % 60);
    }
    let zero = (v) => {
        return v >> 0 < 10 ? "0" + v : v;
    };

    let time = [];

    if (h > 0) {
        time.push(zero(h));
    }

    time.push(zero(i));

    if (h <= 0) {
        time.push(zero(s));
    }

    return time.join(":");
};
