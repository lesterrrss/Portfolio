var tablinks = document.getElementsByClassName('links');
var tabcontents = document.getElementsByClassName('tab-content');

function opentab(tabname) {
    for (var tablink of tablinks) {
        tablink.classList.remove('active-links');
    }

    for (var tabcontent of tabcontents) {
        tabcontent.classList.remove('active-tab');
    }
    event.currentTarget.classList.add('active-links');
    document.getElementById(tabname).classList.add('active-tab')
}


function toggleText1(elementId) {
    var additionalText = document.getElementById(elementId);
    var buttonText = document.getElementById('b-1');

    if (additionalText.innerHTML === '') {
        additionalText.innerHTML = 'and technical expertise to deliver visually stunning solutions tailored to meet the unique needs and objectives of clients, ensuring their brand communicates effectively and stands out in the visual landscape.';
        buttonText.innerText = 'Read Less';
    } else {
        additionalText.innerHTML = '';
        buttonText.innerText = 'Read More';
    }
}

function toggleText2(elementId) {
    var additionalText = document.getElementById(elementId);
    var buttonText = document.getElementById('b-2');

    if (additionalText.innerHTML === '') {
        additionalText.innerHTML = "implementing effective campaigns, and fostering meaningful connections to enhance your online presence and elevate your brand's visibility across various social media platforms.";
        buttonText.innerText = 'Read Less';
    } else {
        additionalText.innerHTML = '';
        buttonText.innerText = 'Read More';
    }
}

function toggleText3(elementId) {
    var additionalText = document.getElementById(elementId);
    var buttonText = document.getElementById('b-3');

    if (additionalText.innerHTML === '') {
        additionalText.innerHTML = ' and user-friendly websites, combining artistic flair with technical proficiency to deliver an exceptional online experience that aligns with your brand identity and captivates your target audience.';
        buttonText.innerText = 'Read Less';
    } else {
        additionalText.innerHTML = '';
        buttonText.innerText = 'Read More';
    }
}

window.addEventListener('scroll', reveal);

function reveal(){
    var reveals = document.querySelectorAll('.reveal')

    for(var i = 0; i < reveals.length; i++){
        var windowheigth = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint= 150;

        if(revealtop < windowheigth - revealpoint){
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active');
        }
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => {
      link.addEventListener("click", smoothScroll);
    });

    function smoothScroll(e) {
      e.preventDefault();

      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: "smooth",
        });
      }
    }
});


function showSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}

function hideSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}