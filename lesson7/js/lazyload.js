const images = document.querySelectorAll('img');

const io = new IntersectionObserver (
    (entries, io) => {
        console.log(entries);
    }
);
io.observe(images);