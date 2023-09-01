

// here is where we will add the img ,heading, and paragraph from step 5

const createHomepage = () => {
    const content = document.querySelector('#content');
    const home = document.createElement('div');
    home.classList.add('homeContent');


//create img and append it to content div

const image = document.createElement('img');
image.src = "/home/san/Restaurant-page/restaurant-page/img/tacos.jpg";
image.height = '500';
home.appendChild(image);

//create headline element and append it to content

const restaurantName = document.createElement('h1');
restaurantName.textContent = " California BAbu's restaurant";
home.appendChild(restaurantName);

//create a paragraph element and append it to the conten div

const intro = document.createElement('p')
intro.textContent = " We serve the best Tacos!!!  ";
home.appendChild(intro);
content.appendChild(home);
}

export default createHomepage;