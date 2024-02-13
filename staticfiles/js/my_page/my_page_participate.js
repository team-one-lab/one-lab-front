function myFunction() {
    // console.log(1+1);
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.select-menu-hidden-input-box')) {
      var dropdowns = document.getElementsByClassName("select-menu__menu-list");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

const mainText = document.querySelector(".select-menu__single-value")
const options = document.querySelectorAll(".select-menu__option")
console.log(options);
options.forEach(option => {
option.addEventListener("click", function() {
    options.forEach(option => {
        option.classList.remove("select-menu__option--is-selected")
    });
    this.classList.add("select-menu__option--is-selected");
    mainText.textContent = this.textContent;
    document.getElementById("myDropdown").classList.toggle("show");
})
})