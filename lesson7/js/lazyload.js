const images = document.querySelectorAll('[data-src]');

function preloadImage(img){
    const source = img.getAttribute('data-src');
    if (!source){
        return;
    }
    img.src = source;
}

const options = {threshold: [0.2]};

const io = new IntersectionObserver (
    (entries, io) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting){
                return;
            }
            else {
                preloadImage(entry.target);
                io.unobserve(entry.target);
            }
        });
    }, options
);

images.forEach(image => {
    io.observe(image);
});