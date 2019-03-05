var AboutMeY

function init() {
    AboutMeY = document.getElementById("SectionAboutMe").offsetTop;
}
function alertTest(msg) {
    alert(msg)
}

function scrollCtrl() {
    var posY = window.pageYOffset;
    if(posY > AboutMeY) {
        var skill1 = document.getElementById("Divskill1_sub")
        var skill2 = document.getElementById("Divskill2_sub")
        var skill3 = document.getElementById("Divskill3_sub")

        skill1.classList.remove("animation-pause");
        skill2.classList.remove("animation-pause");
        skill3.classList.remove("animation-pause");

        skill1.classList.add("animation-start");
        skill2.classList.add("animation-start");
        skill3.classList.add("animation-start");

    }
}