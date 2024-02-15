function clickAdd() {
    document.querySelector("#inputImage").addEventListener("change", (e) => {
        let selectFile = e.target.files[0];
        const file = URL.createObjectURL(selectFile);
        document.querySelector(".image").src = file;
    });
}
function clickAdd2() {
    document.querySelector("#inputImage2").addEventListener("change", (e) => {
        let selectFile = e.target.files[0];
        const file = URL.createObjectURL(selectFile);
        document.querySelector(".image2").src = file;
    });
}
