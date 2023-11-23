let icons = [
    '.zoom1',
    '.zoom2',
    '.zoom3',
    '.zoom4',
    '.zoom5',
    '.zoom6',
    '.zoom7',
    '.zoom8'
]

function animation() {
    icons.forEach((icon, i) => {
        setTimeout(() => {
            $(icon).addClass('logoZoom');
        }, i * 200);
    });
}

$(function() {
    animation();
});