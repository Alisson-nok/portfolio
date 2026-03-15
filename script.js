document.addEventListener("DOMContentLoaded", function () {

    const habilidades = document.querySelectorAll(".habilidade");

    habilidades.forEach(card => {
        card.addEventListener("click", () => {
            card.classList.toggle("ativo");
        });
    });


    if (typeof particlesJS !== "undefined") {

        particlesJS("particles-js", {
            particles: {

                number: {
                    value: 80
                },

                color: {
                    value: "#38bdf8"
                },

                shape: {
                    type: "circle"
                },

                opacity: {
                    value: 0.5
                },

                size: {
                    value: 3
                },

                line_linked: {
                    enable: true,
                    distance: 150,
                    color: "#38bdf8",
                    opacity: 0.4
                },

                move: {
                    enable: true,
                    speed: 2
                }

            }
        });

    }



    const texto = "Alisson Sousa";
    let index = 0;

    const typing = document.getElementById("typing");

    function escrever() {

        if (!typing) return;

        if (index < texto.length) {

            typing.innerHTML += texto.charAt(index);

            index++;

            setTimeout(escrever, 150);

        }

    }

    escrever();

});
