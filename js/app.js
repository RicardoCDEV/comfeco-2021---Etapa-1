/* ------------------- INICIO DE VARIABLES ------------------- */
    const signOption1 = document.querySelector(".option-1");
    const signOption2 = document.querySelector(".option-2");
/* ------------------- FIN DE VARIABLES ------------------- */


/* ------------------- INICIO DE FUNCIONES ------------------- */
    /* ------------------- INICIO DE ADDEVENTLISTENERS------------------- */
        function addEventListeners(){
            signOption1.addEventListener("click", ()=>{
                signOption1.children[0].classList.add("selected-option");
                signOption2.children[0].classList.remove("selected-option");
            });

            signOption2.addEventListener("click", ()=>{
                signOption2.children[0].classList.add("selected-option");
                signOption1.children[0].classList.remove("selected-option");
            });
        }
    /* ------------------- FIN DE ADDEVENTLISTENERS ------------------- */

/* ------------------- FIN DE FUNCIONES ------------------- */


/* ------------------- INICIO DE INSTRUCCIONES ------------------- */
        addEventListeners();
/* ------------------- FIN DE INSTRUCCIONES ------------------- */