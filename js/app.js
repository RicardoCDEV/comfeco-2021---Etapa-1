/* ------------------- INICIO DE VARIABLES ------------------- */
    const signOption1 = document.querySelector(".option-1");
    const signOption2 = document.querySelector(".option-2");

    const loginForm = document.querySelector(".login-form");
    const registerForm = document.querySelector(".register-form");
    const passwordForgottenForm = document.querySelector(".password-forgotten-form");

    const passwordForgotten = document.querySelector(".password-forgotten");

    const loginTextLink = document.querySelector(".login-text-link");

    const signSelection = document.querySelector(".sign-in-sign-up-selection");
/* ------------------- FIN DE VARIABLES ------------------- */


/* ------------------- INICIO DE FUNCIONES ------------------- */
    /* ------------------- INICIO DE ADDEVENTLISTENERS------------------- */
        function addEventListeners(){
            signOption1.addEventListener("click", ()=>{
                signOption2.children[0].classList.remove("selected-option");
                registerForm.style.display = "none";
                signOption1.children[0].classList.add("selected-option");
                loginForm.style.display = "block";
            });

            signOption2.addEventListener("click", ()=>{
                signOption1.children[0].classList.remove("selected-option");
                loginForm.style.display = "none";
                signOption2.children[0].classList.add("selected-option");
                registerForm.style.display = "block";
            });

            passwordForgotten.addEventListener("click", ()=>{
                loginForm.style.display = "none";
                signSelection.style.display = "none";
                passwordForgottenForm.style.display = "block";
            });

            loginTextLink.addEventListener("click", ()=>{
                passwordForgottenForm.style.display = "none";
                signSelection.style.display = "block";
                loginForm.style.display = "block";
            });
        }
    /* ------------------- FIN DE ADDEVENTLISTENERS ------------------- */

    

/* ------------------- FIN DE FUNCIONES ------------------- */


/* ------------------- INICIO DE INSTRUCCIONES ------------------- */
        addEventListeners();
/* ------------------- FIN DE INSTRUCCIONES ------------------- */