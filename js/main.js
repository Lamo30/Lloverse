function togglenav(){
    const navContainer = document.querySelector('.sidebar')
    navContainer.classList.toggle('active')

    const overlayContainer = document.querySelector('.overlay')
    overlayContainer.classList.toggle('active')
}
