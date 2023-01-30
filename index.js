// Slidebar
const menuItems = document.querySelectorAll('.menu-item');

// MESSAGES
const messageNotification = document.querySelector('#messages-notification');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');

const messageSearch = document.querySelector('#message-search');
// THEME
const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');
const fontSizes = document.querySelectorAll('.choose-size span');
var root = document.querySelector(':root');
const colorPalette = document.querySelectorAll('.choose-color span');
const Bg1 = document.querySelector('.bg-1');
const Bg2 = document.querySelector('.bg-2');
const Bg3 = document.querySelector('.bg-3');







// ==============sidebar=================

// REMOVE ACTIVE CLASS FROM ALL MENU ITEMS
const changeActiveItems = () => {
    menuItems.forEach(item => {
        item.classList.remove('active')
    })
}

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItems()
        item.classList.add('active');

        if (item.id != 'notification') {
            document.querySelector('.notification-popup').style.display = 'none';
        }
        else {
            document.querySelector('.notification-popup').style.display = 'block';

            //Hilighting the notification box
            document.querySelector('.notification-popup').style.boxShadow='0 0 1rem var(--color-primary)';
            setTimeout(() => {
                document.querySelector('.notification-popup').style.boxShadow = 'none';
                    }, 2000);
            


            document.querySelector('#notification .notification-count').style.display = 'none';

        }

    })
})


// ================// MESSAGES //===================

// Searches chats
const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();

    message.forEach(user => {
        let name = user.querySelector('h5').textContent.toLowerCase();
        if (name.indexOf(val) != -1) {
            user.style.display = 'flex';
        }
        else {
            user.style.display = 'none';
        }
    })
}

//************ */// Search Chat ///**********************
messageSearch.addEventListener('keyup', searchMessage);





//*********// Highlighting message chat when message menu item is clicked // ************************
messageNotification.addEventListener('click', () => {
    
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messageNotification.querySelector('.notification-count').style.display = 'none';
    setTimeout(() => {
        messages.style.boxShadow = 'none';
    }, 2000);

})

// Theme Customisation
// Opens modal
const openThemeModal = () => {
    themeModal.style.display = 'grid';
}
// Closing modal
const closeTheModal = (e) => {
    if (e.target.classList.contains('customize-theme')) {
        themeModal.style.display = 'none';
    }
}

// Closing modal
themeModal.addEventListener('click', closeTheModal)

// Opens modal
theme.addEventListener('click', openThemeModal);

// remove active class from spans or font size selectos
const removeSizeSelector = () => {
    fontSizes.forEach(size => {
        size.classList.remove('active');
    })
}


// ****************** // FONTS //*****************************


fontSizes.forEach(size => {


    size.addEventListener('click', () => {

        removeSizeSelector();
        let fontSize;
        size.classList.toggle('active');


        if (size.classList.contains('font-size-1')) {
            fontSize = '10px';
            root.style.setProperty('--sticky-top-left', '5.4rem');
            root.style.setProperty('--sticky-top-right', '5.4rem');

        }
        else if (size.classList.contains('font-size-2')) {
            fontSize = '13px';
            root.style.setProperty('--sticky-top-left', '5.4rem');
            root.style.setProperty('--sticky-top-right', '-7rem');
        }
        else if (size.classList.contains('font-size-3')) {
            fontSize = '16px';
            root.style.setProperty('--sticky-top-left', '-2rem');
            root.style.setProperty('--sticky-top-right', '-17rem');
        }
        else if (size.classList.contains('font-size-4')) {
            fontSize = '19px';
            root.style.setProperty('--sticky-top-left', '-5rem');
            root.style.setProperty('--sticky-top-right', '-25rem');
        }
        else if (size.classList.contains('font-size-5')) {
            fontSize = '22px';
            root.style.setProperty('--sticky-top-left', '-10rem');
            root.style.setProperty('--sticky-top-right', '-35rem');
        }

        // change font size of the root html element
        document.querySelector('html').style.fontSize = fontSize;


    })

})

// Remove active classes from colors

const changeActiveColorClass = () => {
    colorPalette.forEach(colorPicker => {
        colorPicker.classList.remove('active');
    })
}

//---------------change primary colors --------------------------
colorPalette.forEach(color => {
    color.addEventListener('click', () => {
        changeActiveColorClass();
        let primary;

        if (color.classList.contains('color-1')) {
            primaryHue = 252;
        }
        else if (color.classList.contains('color-2')) {
            primaryHue = 52;
        }
        else if (color.classList.contains('color-3')) {
            primaryHue = 352;
        }
        else if (color.classList.contains('color-4')) {
            primaryHue = 152;
        }
        else if (color.classList.contains('color-5')) {
            primaryHue = 202;
        }

        color.classList.add('active');
        root.style.setProperty('--primary-color-hue', primaryHue);

    })

})

//Theme background variables

let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

// Change background color
const changeBG = () => {
    root.style.setProperty('--light-color-lightness', lightColorLightness);
    root.style.setProperty('--white-color-lightness', whiteColorLightness);
    root.style.setProperty('--dark-color-lightness', darkColorLightness);
}

Bg1.addEventListener('click', () => {


    darkColorLightness = '17%';
    whiteColorLightness = '95%';
    lightColorLightness = '100%';

    Bg1.classList.add('active');
    //remove active class from the others
    Bg2.classList.remove('active');
    Bg3.classList.remove('active');

    changeBG();

})


Bg2.addEventListener('click', () => {


    darkColorLightness = '95%';
    whiteColorLightness = '20%';
    lightColorLightness = '15%';

    //add active classes
    Bg2.classList.add('active');
    //remove active class from the others
    Bg1.classList.remove('active');
    Bg3.classList.remove('active');
    changeBG();


})

Bg3.addEventListener('click', () => {


    darkColorLightness = '95%';
    whiteColorLightness = '10%';
    lightColorLightness = '0%';

    //add active classes
    Bg3.classList.add('active');
    //remove active class from the others
    Bg1.classList.remove('active');
    Bg2.classList.remove('active');
    changeBG();

})




















