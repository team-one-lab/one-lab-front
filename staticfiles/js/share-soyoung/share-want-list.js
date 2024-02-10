const tabs = document.querySelectorAll("div.list-tabs li")
console.log(tabs)
tabs.forEach((tab) => {
    tab.addEventListener("click", function(e) {
        tabs.forEach((tab) => {
            tab.classList.remove('active')
        })
        tab.classList.add('active')
    })
})

const pages = document.querySelectorAll("div.desktop-only a")
pages.forEach((page) => {
    page.addEventListener("click", function(e) {
        pages.forEach((page) => {
            page.classList.remove('current')
        })
        page.classList.add('current')
    })
})

const searchText = document.querySelector("input.search-form")
document.querySelector("button.btn-search").addEventListener("click", function(e) {
    if(!searchText.value) {
        alert('검색어를 입력해주세요.')
    }
})