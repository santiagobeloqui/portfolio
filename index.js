let main = document.getElementById('main');
let content = document.getElementById("content");
let homeLink = document.getElementById('home-link');
let meLink = document.getElementById("me-link");
let skillsLink = document.getElementById("skills-link");
let portfolioLink = document.getElementById('portfolio-link');
let contactLink = document.getElementById("contact-link");
let languages = document.getElementById("languages");
let englishLink = document.getElementById('english-link');
let espanolLink = document.getElementById('espanol-link');

//_____Languages
let language = "English";
languagesStyle();

function languagesStyle(){
    let languageButtons = document.getElementsByClassName('language-button');
    for (let languageButton of languageButtons){
        if(languageButton.textContent == language){
            if(!languageButton.classList.contains('bold')){
                languageButton.classList.add('bold');
            }
            if(languageButton.classList.contains('link')){
                languageButton.classList.remove('link');
            }
        } else if (languageButton.textContent != language){
            if(languageButton.classList.contains('bold')){
                languageButton.classList.remove('bold');
            }
            if(!languageButton.classList.contains('link')){
                languageButton.classList.add('link');
            }
        }
    }
    if(meLink.firstChild){
        meLink.removeChild(meLink.firstChild);
    }
    if(contactLink.firstChild){
        contactLink.removeChild(contactLink.firstChild);
    }
    if(language == "English"){
        let meText = document.createTextNode("me");
        meLink.appendChild(meText);
        let contactText = document.createTextNode("contact");
        contactLink.appendChild(contactText);
    } else if(language == "Español"){
        let meText = document.createTextNode("yo");
        meLink.appendChild(meText);
        let contactText = document.createTextNode("contacto");
        contactLink.appendChild(contactText);
    }
}
englishLink.addEventListener("click", ()=>{
    language = "English";
    languagesStyle();
});

espanolLink.addEventListener("click", ()=>{
    language = "Español";
    languagesStyle();
});




navStyles("home");


// meLink.addEventListener("click", ()=>{
//     main.classList.add('main-animation-hide');
//     languages.classList.add('main-animation-hide');
//     setTimeout(()=>{
//         while(content.lastChild){
//             content.removeChild(content.lastChild);
//         }
//         meSection();
//         main.classList.add('main-animation-show');
//     }, 1000);
// });

addLink(meLink, meSection);
addLink(homeLink, homeSection);
addLink(skillsLink, skillsSection);
addLink(portfolioLink, portfolioSection);
addLink(contactLink, contactSection);

function addLink(link, callback){
    link.addEventListener("click", ()=>{
        if(main.classList.contains("main-animation-show")){
            main.classList.remove("main-animation-show");
        }
        main.classList.add('main-animation-hide');
        if(languages.classList.contains('main-animation-show')){
            languages.classList.remove('main-animation-show');
        }
        languages.classList.add('main-animation-hide');
        setTimeout(()=>{
            while(content.lastChild){
                content.removeChild(content.lastChild);
            }
            callback();
            if(main.classList.contains("main-animation-hide")){
                main.classList.remove("main-animation-hide");
            }
            main.classList.add('main-animation-show');
        }, 1000);
    });
}



function navStyles(section){
    let navLinks = document.getElementsByClassName('nav-link');
    for (let navLink of navLinks){
        if(navLink.textContent == section){
            if(navLink.classList.contains("link")){
                navLink.classList.remove("link");
            }
            navLink.classList.add("bold");
        } else{
            if(navLink.classList.contains("bold")){
                navLink.classList.remove("bold");
            }
            navLink.classList.add("link");
        }
    }
}

function meSection(){
    let title = document.createElement("H2");
    let titleText = document.createTextNode("/me");  
    if(language == "Español"){
        titleText = document.createTextNode("/yo"); 
    }
    title.className = "me-title";  
    title.appendChild(titleText);
    let p = document.createElement("P");
    let pText = document.createTextNode("I am a web developer from Mendoza, Argentina, who also majored in Psychology. While finishing that career I began to experiment with programming and discovered my passion for development. My curiosity and desire to learn allowed me to know both front-end and back-end technologies. Let's get to know each other and work together!");
    if (language == "Español"){
        pText = document.createTextNode("Soy un desarrollador web de Mendoza, Argentina. También Licenciado en Psicología, terminando esa carrera comencé a experimentar con la programación y descubrí mi pasión por el desarrollo. Mi curiosidad y deseo de aprendizaje me permitió conocer tecnologías tanto del front-end como del back-end. ¡Conozcámonos y trabajemos juntos!");
    }
    p.appendChild(pText);
    p.className = 'me-text';
    let resumeLink = document.createElement("A");
    let resumeText = document.createTextNode("Resume");
    if (language == "Español"){
        resumeText = document.createTextNode(" CV");
    }
    resumeLink.appendChild(resumeText);
    resumeLink.href = 'Santiago Beloqui - CV.pdf';
    resumeLink.target = '_blank';
    // p.appendChild(resumeLink);
    content.appendChild(title);
    content.appendChild(p);
    content.appendChild(resumeLink);
    if (language == "English"){
        navStyles("me");
    } else{
        navStyles("yo");
    }
}

let portfolioProjects = ["Huarpes Rugby Club.", "URL Shortener.", "Random Quote Machine.", "Local Weather."];
let portfolioEnglish = [" Static website for an inclusive rugby club called Huarpes. Made with HTML5, CSS3 and JavaScript. ", " You can enter a URL and obtain a shorter one wich you can use to go to the same website. The back-end is made with Express.js and mongoose to access an MongoDb database. ", " Generator of random quotations with the option to tweet them. Made with HTML5, CSS3 and JavaScript. ", " It shows the current location and weather, fetching data from Google and Freecodecamp APIs. Made with HTML5, CSS3 and JavaScript. "];
let portfolioSpanish = [" Web estática para un club de rugby inclusivo llamado Huarpes. Hecho con HTML5, CSS3 y JavaScript. ", " Permite ingresar una URL y obtener una más corta, la cual se puede usar paara entrar al mismo sitio. El back-end está hecho con Express.js y mongoose para acceder una base de datos MongoDb. ", " Generador de citas de autor aleatorias con la opción de twittearlas. Hecho HTML5, CSS3 con JavaScript. ", " Muestra la localización y clima actuales, extrayendo información de APIs de Google y Freecodecamp. Hecho con HTML5, CSS3 and JavaScript. "];
let portfolioLinks = ["https://santiagobeloqui.github.io/huarpes/","https://tranquil-shelf-24200.herokuapp.com/","https://santiagobeloqui.github.io/random-quote-machine/","https://santiagobeloqui.github.io/my-local-weather/"];

function portfolioSection(){
    let title = document.createElement("H2");
    let titleText = document.createTextNode("/portfolio");  
    title.className = 'portfolio-title';  
    title.appendChild(titleText);
    content.appendChild(title);
    for(let i = 0; i < 4; i++){
        let span = document.createElement("SPAN");
        let spanText = document.createTextNode(portfolioProjects[i]);
        span.appendChild(spanText); 
        span.classList.add("bold");
        let pText = document.createTextNode(portfolioEnglish[i]);
        if(language == "Español"){
            pText = document.createTextNode(portfolioSpanish[i]); 
        }
        let link = document.createElement("A");
        let linkText = document.createTextNode("See");
        if (language == "Español"){
            linkText = document.createTextNode("Ver");
        }
        link.appendChild(linkText);
        link.href = portfolioLinks[i];
        link.target = "_blank";
        let p = document.createElement("P");
        p.appendChild(span);
        p.appendChild(pText);
        p.appendChild(link);
        p.className = 'portfolio-element';
        content.appendChild(p);
    }
    navStyles("portfolio");
}

function homeSection(){
    let title = document.createElement("H1");
    let titleText = document.createTextNode("SANTIAGO BELOQUI");
    title.appendChild(titleText);
    title.className = 'home-title';
    content.appendChild(title);
    if(languages.classList.contains('main-animation-hide')){
        languages.classList.remove('main-animation-hide');
    }
    languages.classList.add('main-animation-show');
    navStyles("home");
}

function skillsSection(){
    let title = document.createElement("H2");
    let titleText = document.createTextNode("/skills");
    title.className = 'skills-title';
    title.appendChild(titleText);
    content.appendChild(title);
    let skills = ["HTML5", "CSS3", "Responsive Design", "JavaScript", "Express.js", "MongoDB"];
    for (let skill of skills){
        let p = document.createElement("P");
        let pText = document.createTextNode(skill);
        p.appendChild(pText);
        p.classList.add('skill');
        if (skill != "MongoDB"){
            p.classList.add("no-margin-bottom");            
        }
        content.appendChild(p);
    }
    // let p = document.createElement("P");
    // let pText = document.createTextNode("HTML5 + CSS3 + Responsive Design + Javascript + Express.js + MongoDB");
    // p.appendChild(pText);
    // content.appendChild(p);
    
    navStyles("skills");    
}

function contactSection(){
    let title = document.createElement("H2");
    let titleText = document.createTextNode("/contact");  
    if(language == "Español"){
        titleText = document.createTextNode("/contacto"); 
    }
    title.className = 'contact-title';
    title.appendChild(titleText);
    content.appendChild(title);
    let contentDiv = document.createElement("DIV");
    let icons = ["icons/mail.png","icons/linkedin.png","icons/github.png"];
    let links = ["mailto:beloquisantiago@gmail.com","https://www.linkedin.com/in/santiago-beloqui-212554143/","https://github.com/santiagobeloqui"];
    let social = ["beloquisantiago@gmail.com","Santiago Beloqui","santiagobeloqui"];
    for (let element of icons){
        let socialDiv = document.createElement("DIV");
        let iconImg = document.createElement("IMG");
        iconImg.src = element;
        iconImg.className = 'contact-img';
        socialDiv.appendChild(iconImg);
        let socialA = document.createElement("A");
        let aText = document.createTextNode(social[icons.indexOf(element)]);
        socialA.appendChild(aText);
        socialA.href = links[icons.indexOf(element)];
        socialA.target = "_blank";
        socialA.className = "contact-link";
        socialDiv.appendChild(socialA);
        socialDiv.className = "social-div";
        contentDiv.appendChild(socialDiv);
    }
    content.appendChild(contentDiv);
    if (language == "English"){
        navStyles("contact");
    } else{
        navStyles("contacto");
    }
}
