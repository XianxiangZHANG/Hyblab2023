"use strict";
let dep
let depName
let res3
let res3bis
let res4
let res5
let res6
let data3
let data3bis
let data4
let data5
let data6
let back_to_main_page = true
let dataDep

function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

//usage:
readTextFile("./data/3.json", function (text) {
    data3 = JSON.parse(text);
});
readTextFile("./data/3_bis.json", function (text) {
    data3bis = JSON.parse(text);
});
readTextFile("./data/4.json", function (text) {
    data4 = JSON.parse(text);
});
readTextFile("./data/5.json", function (text) {
    data5 = JSON.parse(text);
});
readTextFile("./data/6.json", function (text) {
    data6 = JSON.parse(text);
});
readTextFile("./data/departements-region.json", function (text) {
    dataDep = JSON.parse(text);
});


function changeBackground(color) {
    document.body.style.background = color;
}

let next0 = document.getElementById("next0")
next0.addEventListener("click", () => {
    display("s1")
    changeBackground('#121212')
})

let next1 = document.getElementById("next1")
next1.addEventListener("click", () => {
    display("s3")
})

let answer = false
let btns3 = document.getElementsByClassName('btn3')
for (let btn of btns3) {
    if (btn.dataset.valid == "true") {
        btn.addEventListener('click', () => {
            if (!answer) {
                answer = true
                btn.style.backgroundColor = 'green'
                setTimeout(() => {
                    display("s4_2")
                    changeBackground('aliceblue')
                }, 2000)
            }
        })
    } else {
        btn.addEventListener('click', () => {
            if (!answer) {
                answer = true
                btn.style.backgroundColor = 'red'
                for (let btn_tmp of btns3) {
                    if (btn_tmp.dataset.valid == 'true') {
                        btn_tmp.style.backgroundColor = 'lightgreen'
                    }
                }
                setTimeout(() => {
                    display("s4_1")
                    changeBackground('#121212')
                }, 2000)
            }
        })
    }
}

let next4_1 = document.getElementById("next4_1")
next4_1.addEventListener("click", () => {
    display("s5")
    changeBackground('#121212')
})

let next4_2 = document.getElementById("next4_2")
next4_2.addEventListener("click", () => {
    display("s5")
    changeBackground('#121212')
})

paper.install(window);
paper.setup("canvas");

let path;
let isDrawing = false;

view.onMouseDown = (event) => {
    if (isDrawing) return;
    event.preventDefault();
    isDrawing = true;
    path = new Path();
    path.strokeColor = "white";
    path.smoothness = 1;
    path.strokeWidth = 5;
    path.add(event.point);
};

view.onMouseDrag = (event) => {
    if (!isDrawing) return;
    path.add(event.point);
    if (!isDrawing) return;
    path.add(event.point);
};

view.onMouseUp = (event) => {
    if (!isDrawing) return;
    event.preventDefault();
    isDrawing = false;
    display("s6")
};

let next6 = document.getElementById("next6")
next6.addEventListener("click", () => {
    display("s7")
    changeBackground('#121212')
})

let inputDep = document.getElementById('dep')
let next7 = document.getElementById("next7")
next7.style.background = "dimgray"

function next7click() {
    dep = inputDep.value
    display("s8")
    changeBackground('#121212')
    initRepsDep()
}

inputDep.addEventListener('input', () => {
    if (inputDep.value != ""){
        next7.style.removeProperty('background')
        next7.addEventListener("click", next7click)
    } else {
        next7.style.background = "dimgray"
        next7.removeEventListener('click', next7click)
    }
})

function initRepsDep() {
    for (let key in data3) {
        if (data3[key]["departement"] == dep) {
            res3 = data3[key]
            break
        }
    }
    for (let key in data3bis) {
        if (data3bis[key]["departement"] == dep) {
            res3bis = data3bis[key]
            break
        }
    }
    for (let key in data4) {
        if (data4[key]["departement"] == dep) {
            res4 = data4[key]
            break
        }
    }
    for (let key in data5) {
        if (data5[key]["Departement"] == dep) {
            res5 = data5[key]
            break
        }
    }
    for (let key in data6) {
        if (data6[key]["departement"] == dep) {
            res6 = data6[key]
            break
        }
    }
    for (let key in dataDep) {
        if (dataDep[key]["num_dep"] == dep) {
            depName = dataDep[key]["dep_name"]
            break
        }
    }

    let h4wrongs = document.getElementsByClassName("h4_wrong")
    let h4rights = document.getElementsByClassName("h4_right")
    for (let h4 of h4wrongs) {
        h4.textContent = depName + " (" + dep + ")"
    }
    for (let h4 of h4rights) {
        h4.textContent = depName + " (" + dep + ")"
    }

    let answer = false
    let btns8 = document.getElementsByClassName("btn8")
    for (let btn8 of btns8) {
        if (btn8.dataset.value == res3["reponse"]) {
            btn8.addEventListener('click', () => {
                if (!answer) {
                    answer = true
                    btn8.style.backgroundColor = 'green'
                    setTimeout(() => {
                        display("s9_2")
                        changeBackground('aliceblue')
                    }, 2000)
                }
            })
        } else {
            btn8.addEventListener('click', () => {
                if (!answer) {
                    answer = true
                    btn8.style.backgroundColor = 'red'
                    for (let btn_tmp of btns8) {
                        if (btn_tmp.dataset.value == res3["reponse"]) {
                            btn_tmp.style.backgroundColor = 'lightgreen'
                        }
                    }
                    setTimeout(() => {
                        display("s9_1")
                        changeBackground('#121212')
                    }, 2000)
                }
            })
        }
    }

    let texts9 = document.getElementsByClassName("text9")
    let type = res3["reponse"]
    let nbFerme = res3bis["VOLAILLES"] + res3bis["BOVINS"] + res3bis["PORCS"]
    for (let text of texts9) {
        text.textContent = "Dans votre département, ce sont les " + type + " qui sont les plus nombreuses parmi les animaux d’élevage des " + nbFerme + " fermes-usines."
    }

    let next9_1 = document.getElementById("next9_1")
    next9_1.addEventListener("click", () => {
        display("s10")
        changeBackground('#121212')
    })

    let next9_2 = document.getElementById("next9_2")
    next9_2.addEventListener("click", () => {
        display("s10")
        changeBackground('#121212')
    })

    let texts11 = document.getElementsByClassName("text11")
    let name = res4["name"]
    let qt = res4['quantite_mean']
    let rang = res4["france_unite_rank"]
    for (let text of texts11) {
        text.textContent = "Dans la ferme-usine de " + name + " on dénombre pas moins de " + qt + " " + type +". À l’échelle de la France, c’est la " + rang + "ème plus grosse concentration de " + type + " en une seule installation."
    }

    let myRange = document.getElementById("myRange")
    let res = res4["quantite_mean"]
    let next10 = document.getElementById("next10")
    next10.addEventListener("click", () => {
        let v = myRange.value
        if (v >= res - 5000 && v <= res + 5000){
            display("s11_2")
            changeBackground('aliceblue')
        } else {
            display("s11_1")
            changeBackground('#121212')
        }
    })

    let next11_1 = document.getElementById("next11_1")
    next11_1.addEventListener("click", () => {
        display("s12")
        changeBackground('#121212')
    })

    let next11_2 = document.getElementById("next11_2")
    next11_2.addEventListener("click", () => {
        display("s12")
        changeBackground('#121212')
    })

    let texts13 = document.getElementsByClassName("text13")
    let nbEmission = res5["num_fermes_emission_massive"]
    if (nbEmission == 0) {
        for (let text of texts13) {
            text.textContent = "L’ammoniac est un gaz qui se dégage massivement des déjections d’animaux ainsi que des engrais. Sa présence dans l’air provoque la formation de particules fines, responsables de maladies cardio-vasculaires et respiratoires. Dans votre département, il n’y a pas de ferme-usine qui rejette plus de 10 tonnes d’ammoniac"
        }
    } else {
        for (let text of texts13) {
            text.textContent = "L’ammoniac est un gaz qui se dégage massivement des déjections d’animaux ainsi que des engrais. Sa présence dans l’air provoque la formation de particules fines, responsables de maladies cardio-vasculaires et respiratoires. Dans votre département, il y a " + nbEmission + " fermes-usines qui ont émis plus de 10 tonnes d’ammoniac"
        }
    }

    let correct
    if (nbEmission > 30)
        correct = 3
    else if (nbEmission > 20)
        correct = 2
    else if (nbEmission > 10)
        correct = 1
    else
        correct = 0

    let answer12 = false
    let btns12 = document.getElementsByClassName("btn12")
    for (let btn12 of btns12) {
        if (btn12.dataset.value == correct) {
            btn12.addEventListener('click', () => {
                if (!answer12) {
                    answer12 = true
                    btn12.style.backgroundColor = 'green'
                    setTimeout(() => {
                        display("s13_2")
                        changeBackground('aliceblue')
                    }, 2000)
                }
            })
        } else {
            btn12.addEventListener('click', () => {
                if (!answer12) {
                    answer12 = true
                    btn12.style.backgroundColor = 'red'
                    for (let btn_tmp of btns12) {
                        if (btn_tmp.dataset.value == correct) {
                            btn_tmp.style.backgroundColor = 'lightgreen'
                        }
                    }
                    setTimeout(() => {
                        display("s13_1")
                        changeBackground('#121212')
                    }, 2000)
                }
            })
        }
    }

    let next13_1 = document.getElementById("next13_1")
    next13_1.addEventListener("click", () => {
        display("s14")
        changeBackground('#121212')
    })

    let next13_2 = document.getElementById("next13_2")
    next13_2.addEventListener("click", () => {
        display("s14")
        changeBackground('#121212')
    })

    if (res6['nb_mise_en_demeure'] != 0) {
        let texts15 = document.getElementsByClassName("text15")
        for (let text of texts15) {
            text.textContent = res6['nb_mise_en_demeure'] + " mises en demeure ont été prononcées à l’encontre des fermes-usines de " + depName + ". L’évolution de ce chiffre peut être surveillée grâce à la base de données Géorisques du ministère de la Transition écologique et de la cohésion des territoires. Disclose vous explique comment faire dans son Guide du lanceur d’enquêtes."
        }
    }

    let output14 = document.getElementById("demo14");
    let next14 = document.getElementById("next14");
    next14.addEventListener("click", () => {
        if (output14.textContent == res6['nb_mise_en_demeure']) {
            display("s15_2")
            changeBackground('aliceblue')
        } else {
            display("s15_1")
            changeBackground('#121212')
        }
    })

    let next15_1 = document.getElementById("next15_1")
    next15_1.addEventListener("click", () => {
        display("s16")
        changeBackground('aliceblue')
    })

    let next15_2 = document.getElementById("next15_2")
    next15_2.addEventListener("click", () => {
        display("s16")
        changeBackground('aliceblue')
    })
}

let next16 = document.getElementById("next16")
    next16.addEventListener("click", () => {
        window.open('https://disclose.ngo/fr/article/disclose-partage-ses-methodes-et-outils-pour-enqueter', '_blank');
    })

let about_s0 = document.getElementById("about-s0")
about_s0.addEventListener("click", () => {
    display("s17")
    changeBackground('#121212')
})

let about_s16 = document.getElementById("about-s16")
about_s16.addEventListener("click", () => {
    back_to_main_page = false
    display("s17")
    changeBackground('#121212')
})

let back = document.getElementById("back")
back.addEventListener("click", () => {
    if (back_to_main_page) {
        display("s0")
        changeBackground('#121212')
    } else {
        display("s16")
        changeBackground('aliceblue')
    }
})

function display(id) {
    let slides = document.getElementsByClassName("slides")
    for (let slide of slides) {
        slide.style.display = 'none'
    }
    let currentSlide = document.getElementById(id)
    currentSlide.style.removeProperty('display')
}

// Wait for the content to preload and display 1st slide
// Here we simulate a loading time of one second
setTimeout(() => {
    // fade out the loader "slide"
    // and send it to the back (z-index = -1)
    anime({
        delay: 1000,
        targets: '#loader',
        opacity: '0',
        'z-index': -1,
        easing: 'easeOutQuad',
    });
    // Init first slide
}, 200);

var mySwiper = new Swiper('.swiper-container', {
    pagination: {
        el: '.swiper-pagination',
    },
});
