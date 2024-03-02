const input = document.getElementById("base-image");
const thumbnail = document.querySelector("div.image");
const cancel = document.querySelector("div.cancel");

input.addEventListener("change", (e) => {
    const [file] = e.target.files;
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.addEventListener("load", (e) => {
        const path = e.target.result;
        cancel.style.display = "block";

        if (path.includes("image")) {
            thumbnail.style.backgroundImage = `url(${path})`;
        } else {
            thumbnail.style.backgroundImage = `url('../../../staticfiles/images/like.png')`;
        }
    });
});

cancel.addEventListener("click", (e) => {
    thumbnail.style.backgroundImage = `url('../../../staticfiles/images/likes.png')`;
    e.target.style.display = "none";
    input.value = "";
});
