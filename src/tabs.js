


import menupage from "./menu";
import createHomepage from "./restaurantHomepage";
import contactpage from "./contact";





const tabs = () => {
   
    const content = document.querySelector('#content');

    //create div for thr three tab home,menu,contact
    const div1 = document.createElement('div');
    const div2 = document.createElement('div');
    const div3 = document.createElement('div');

    //set id for the three divs

    div1.setAttribute('id', 'home-btn');
    div2.setAttribute('id', 'menu-btn');
    div3.setAttribute('id', 'contact-btn');

    //set class for the three div
    div1.classList.add('tab');
    div2.classList.add('tab');
    div3.classList.add('tab');

    //set text content for the three div
    div1.textContent = " Home";
    div2.textContent = " Menu";
    div3.textContent = " Contact";

    //append the three div to thr content
    content.appendChild(div1);
    content.appendChild(div2);
    content.appendChild(div3);

    div1.addEventListener('click', () => {
        clear();
        createHomepage();
    })
    div2.addEventListener('click', () => {
        clear();
        menupage();
    })
    div3.addEventListener('click', () => {
        clear();
        contactpage();
    })

}

function clear(){
    const content = document.querySelector('#content');
    const home = document.querySelector('.homeContent')

    if(home){
        content.removeChild(home);
    }
}

export default tabs;