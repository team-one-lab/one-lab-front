const input = document.getElementById("attach");
const thumbnail = document.querySelector("div.image");
const cancel = document.querySelector("div.cancel");

input.addEventListener("change", (e) => {
    const [file] = e.target.files;
    const reader = new FileReader();

    console.log(file + "들어옴");
    console.log(reader);
    reader.readAsDataURL(file);
    reader.addEventListener("load", (e) => {
        const path = e.target.result;
        cancel.style.display = "block";

        if (path.includes("image")) {
            thumbnail.style.backgroundImage = `url(${path})`;
        } else {
            thumbnail.style.backgroundImage = `url('images/like.png')`;
        }
    });
});

cancel.addEventListener("click", (e) => {
    thumbnail.style.backgroundImage = `url('images/likes.png')`;
    e.target.style.display = "none";
    input.value = "";
});
