/* =====================================================
   ELEMENTOS
===================================================== */

const boton =
    document.getElementById("boton");

const musica =
    document.getElementById("musica");

const carta =
    document.getElementById("carta");

const cerrarCarta =
    document.getElementById("cerrarCarta");

const campo =
    document.getElementById("campoTulipanes");

const estadoMusica =
    document.getElementById("estadoMusica");

const luciernagas =
    document.getElementById("luciernagas");

const petalos =
    document.getElementById("petalos");

const corazones =
    document.getElementById("corazones");


/* =====================================================
   GENERAR TULIPANES
===================================================== */

for (let i = 0; i < 30; i++) {

    const tulipan =
        document.createElement("div");

    tulipan.className =
        "tulipan-campo";


    const flor =
        document.createElement("div");

    flor.className =
        "flor-campo";


    const tallo =
        document.createElement("div");

    tallo.className =
        "tallo-campo";


    tulipan.appendChild(flor);

    tulipan.appendChild(tallo);


    /* ---------------------------------------------
       POSICIÓN
    --------------------------------------------- */

    let posicionX;

    /*
       Dejamos libre la zona central
       para que no tape el mensaje
       ni el botón.
    */

    do {

        posicionX =
            Math.random() * 100;

    } while (
        posicionX > 28 &&
        posicionX < 72
    );


    tulipan.style.left =
        posicionX + "%";


    /* ---------------------------------------------
       PROFUNDIDAD
    --------------------------------------------- */

    const profundidad =
        Math.random();


    const distancia =
        -150 +
        profundidad * 300;


    const escala =
        0.45 +
        profundidad * 0.75;


    tulipan.style.setProperty(
        "--profundidad",
        distancia + "px"
    );


    tulipan.style.setProperty(
        "--escala",
        escala
    );


    /* ---------------------------------------------
       ALTURA
    --------------------------------------------- */

    const altura =
        Math.random() * 25;


    tulipan.style.bottom =
        altura + "px";


    /* ---------------------------------------------
       ORDEN
    --------------------------------------------- */

    tulipan.style.zIndex =
        Math.floor(
            10 +
            profundidad * 90
        );


    /* ---------------------------------------------
       VIENTO
    --------------------------------------------- */

    tulipan.style.animationDuration =
        (
            3 +
            Math.random() * 3
        ) + "s";


    tulipan.style.animationDelay =
        (
            -Math.random() * 5
        ) + "s";


    campo.appendChild(tulipan);

}


/* =====================================================
   LUCIÉRNAGAS
===================================================== */

for (let i = 0; i < 30; i++) {

    const luz =
        document.createElement("div");

    luz.className =
        "luciernaga";


    const tamaño =
        3 +
        Math.random() * 5;


    luz.style.width =
        tamaño + "px";


    luz.style.height =
        tamaño + "px";


    luz.style.left =
        Math.random() * 100 + "%";


    luz.style.top =
        (
            20 +
            Math.random() * 65
        ) + "%";


    luz.style.setProperty(
        "--duracion",
        (
            5 +
            Math.random() * 6
        ) + "s"
    );


    luz.style.setProperty(
        "--retraso",
        (
            -Math.random() * 8
        ) + "s"
    );


    luciernagas.appendChild(luz);

}


/* =====================================================
   PÉTALOS
===================================================== */

for (let i = 0; i < 22; i++) {

    const petalo =
        document.createElement("div");

    petalo.className =
        "petalo";


    petalo.style.left =
        Math.random() * 100 + "%";


    petalo.style.setProperty(
        "--duracion",
        (
            7 +
            Math.random() * 8
        ) + "s"
    );


    petalo.style.setProperty(
        "--retraso",
        (
            -Math.random() * 12
        ) + "s"
    );


    petalo.style.setProperty(
        "--movimiento",
        (
            30 +
            Math.random() * 100
        ) + "px"
    );


    const tamaño =
        8 +
        Math.random() * 9;


    petalo.style.width =
        tamaño + "px";


    petalo.style.height =
        tamaño * 1.4 + "px";


    petalos.appendChild(petalo);

}


/* =====================================================
   CORAZONES
===================================================== */

for (let i = 0; i < 10; i++) {

    const corazon =
        document.createElement("div");

    corazon.className =
        "corazon";

    corazon.textContent =
        "💛";


    corazon.style.left =
        Math.random() * 100 + "%";


    corazon.style.top =
        (
            35 +
            Math.random() * 55
        ) + "%";


    corazon.style.setProperty(
        "--tamano",
        (
            15 +
            Math.random() * 18
        ) + "px"
    );


    corazon.style.setProperty(
        "--duracion",
        (
            4 +
            Math.random() * 5
        ) + "s"
    );


    corazon.style.setProperty(
        "--retraso",
        (
            -Math.random() * 8
        ) + "s"
    );


    corazones.appendChild(corazon);

}


/* =====================================================
   CÁMARA 3D CON EL MOUSE
===================================================== */

document.addEventListener(
    "mousemove",
    function(e) {

        /*
           Convertimos la posición del mouse
           a valores entre aproximadamente
           -0.5 y 0.5.
        */

        const x =
            e.clientX /
            window.innerWidth -
            0.5;


        const y =
            e.clientY /
            window.innerHeight -
            0.5;


        const rotacionY =
            x * 10;


        const rotacionX =
            y * -6;


        campo.style.transform = `

            rotateY(${rotacionY}deg)

            rotateX(${rotacionX}deg)

        `;


        /*
           También movemos ligeramente
           el título y los elementos centrales.
        */

        const titulo =
            document.querySelector(".titulo");


        titulo.style.transform = `

            translateX(-50%)

            translate(
                ${x * -12}px,
                ${y * -8}px
            )

        `;


        const principales =
            document.querySelector(
                ".tulipanes-principales"
            );


        principales.style.marginLeft =
            x * 12 + "px";


        principales.style.marginTop =
            y * 8 + "px";

    }
);


/* =====================================================
   BOTÓN PRINCIPAL
===================================================== */

boton.addEventListener(
    "click",
    function() {

        /*
           Evita pulsaciones múltiples.
        */

        boton.disabled = true;


        /*
           Efecto de cámara.
        */

        document.body.classList.add(
            "acercar"
        );


        /*
           Intentar reproducir música.
        */

        musica.volume = 0.55;


        musica.play()
            .then(function() {

                estadoMusica.textContent =
                    "🎵 Música activada";

            })
            .catch(function() {

                estadoMusica.textContent =
                    "🎵 Pulsa nuevamente para reproducir";

                boton.disabled = false;

            });


        /*
           Mostrar la carta después
           de la transición.
        */

        setTimeout(
            function() {

                carta.classList.add(
                    "mostrar"
                );

            },
            3200
        );

    }
);


/* =====================================================
   CERRAR CARTA
===================================================== */

cerrarCarta.addEventListener(
    "click",
    function() {

        carta.classList.remove(
            "mostrar"
        );

        document.body.classList.remove(
            "acercar"
        );

        boton.disabled = false;

    }
);


/* =====================================================
   CERRAR CARTA HACIENDO CLIC AFUERA
===================================================== */

carta.addEventListener(
    "click",
    function(e) {

        if (
            e.target === carta
        ) {

            carta.classList.remove(
                "mostrar"
            );

            document.body.classList.remove(
                "acercar"
            );

            boton.disabled = false;

        }

    }
);


/* =====================================================
   TECLA ESC PARA CERRAR
===================================================== */

document.addEventListener(
    "keydown",
    function(e) {

        if (
            e.key === "Escape"
        ) {

            carta.classList.remove(
                "mostrar"
            );

            document.body.classList.remove(
                "acercar"
            );

            boton.disabled = false;

        }

    }
);