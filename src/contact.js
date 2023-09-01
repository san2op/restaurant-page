




const contactpage = () => {
  
    const content = document.querySelector('#content');
    const home = document.createElement('div');
    home.classList.add('homeContent');


//create the menu heading 
const menuheading = document.createElement('h1');
menuheading.textContent = " !--)CONTACT US(--! ";

// create a list of menu
const menulist = document.createElement('ul');


const menuitem1 = document.createElement('li');
menuitem1.textContent = "email - huhuh@gmail.tem1";



const menuitem2 = document.createElement('li');
menuitem2.textContent = "phone_number - 987654321";

const menuitem3 = document.createElement('li');
menuitem3.textContent = " land_line - 789-012-564";

menulist.appendChild(menuitem1);
menulist.appendChild(menuitem2);
menulist.appendChild(menuitem3);

home.appendChild(menuheading);
home.appendChild(menulist);
content.appendChild(home);


// };




























//create the contact heading 
    const contactheading = document.createElement('h1');
    contactheading.textContent = " !--)contact(--! ";

 //create a form element 
    const form = document.createElement('form');
    form.classList.add('contact-form');

//create name input
    const name = document.createElement('input');
    name.type('text');

    name.placeholder = " enter you name.";
    form.appendChild(name);

// create address input 
    const adrressInput = document.createElement('input');
    adrressInput.type('text')
    adrressInput.placeholder = " enter your address";
    form.appendChild(adrressInput);

//create phone input 

    const phoneInput = document.createElement('input');
    phoneInput.type('text');
    phoneInput.placeholder = " enter your phone no."
    form.appendChild(phoneInput);

//create a submit button
    const submitbtn = document.createElement('input');
    submitbtn.type = 'submit';
    submitbtn.value = 'submit';
    form.appendChild(submitbtn);

 home.appendChild(contactheading);
 home.appendChild(form);
 content.appendChild(home);



};

export default  contactpage;