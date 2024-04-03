let slider = document.querySelector('.image-slider')
let innerSlider = document.querySelector('.slider-inner')

let isDown = false;
let startX;
let startScroll;

// slider.addEventListener('mousedown', (e)=>
// {
//     pressed = true;
//     startx = e.pageX - innerSlider.offsetleft
//     startscroll = innerSlider.scrollLeft
//     slider.style.cursor = 'grabbing' 
// })

// slider.addEventListener('mouseenter', ()=>
// {
//     slider.style.cursor = 'grab'
// })

// slider.addEventListener('mouseup', ()=>
// {
// slider.style.cursor = 'grab'
// })

// window.addEventListener('mouseup', ()=>
// {
//     pressed = false;
// })

// slider.addEventListener('mousemove', (e)=>
// {
//     if(!pressed) return;
//     e.preventDefault();

//     // startscroll = e.offsetX
//     // innerSlider.style.left = `${startscroll - startx}px`;
//     innerSlider.scrollLeft = startscroll - ((e.pageX - innerSlider.scrollLeft) - startx)
    
//     // checkboundary()
// })

innerSlider.addEventListener('mouseup', () => {
    isDown = false;
    innerSlider.style.cursor = 'grab'
});

innerSlider.addEventListener('mousedown', (e) => {
    isDown = true;
    innerSlider.style.cursor = 'grabbing' ;
    startX = e.pageX - innerSlider.offsetLeft;
    startScroll = innerSlider.scrollLeft;
});

innerSlider.addEventListener('mouseleave', () => {
    isDown = false;
    // innerSlider.classList.remove('grabbing');
});

innerSlider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    innerSlider.scrollLeft = startScroll - ((e.pageX - innerSlider.offsetLeft) - startX);
});
