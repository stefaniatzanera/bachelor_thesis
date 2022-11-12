function changeBg(){
    const images = [
        'media/images/1.jpg',
        'media/images/2.jpg',
        'media/images/3.jpg',
        'media/images/4.jpg',
        'media/images/5.jpg',
        'media/images/6.jpg',
        'media/images/7.jpg',
    ]

    const image = document.getElementById('gal')
    setInterval(function(){
        let random = Math.floor(Math.random() * images.length);
        image.src = images[random]
    },2000);
}