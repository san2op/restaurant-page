


const menupage = () => {
  
    const content = document.querySelector('#content');
    const home = document.createElement('div');
    home.classList.add('homeContent');

//create the menu heading 
    const menuheading = document.createElement('h1');
    menuheading.textContent = " !--)MENU(--! ";

// create a list of menu
    const menulist = document.createElement('ul');

    const menuitem1 = document.createElement('li');
    menuitem1.textContent = "item1";

    const menuitem2 = document.createElement('li');
    menuitem2.textContent = "item2";

    const menuitem3 = document.createElement('li');
    menuitem3.textContent = " item3";

    menulist.appendChild(menuitem1);
    menulist.appendChild(menuitem2);
    menulist.appendChild(menuitem3);

    home.appendChild(menuheading);
    home.appendChild(menulist);
    content.appendChild(home);


};


    export default menupage;