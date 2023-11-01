//toggle icon navbar


//scroll sections
Let sections = document.querySelectorAll('section');
Let navLinks = document.querySelectorAll('header nav a')

window.onscroll = () => {
    sections.forEach(sec => {
        Let top = window.scrollY;
        Let offset = sec.offsetTop - 100;
        Let height = sec.offsetHeight;
        
    });

    // sticky header
    Let header = document.querySelector('header');

    header.classlist.toggle('sticky', window.scrollY > 100);
}