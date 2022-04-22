const SunMoonContainer = document.querySelector('.sun-moon-container')

document.querySelector('.theme-toggle-buttom').addEventListener('click',()=>{

    document.body.classList.toggle('dark')

    const cuurentRotation = parseInt(getComputedStyle(SunMoonContainer).getPropertyValue('--rotation'))

    SunMoonContainer.style.setProperty('--rotation', cuurentRotation+180)

    console.log(getComputedStyle(SunMoonContainer).getPropertyValue('--rotation'))
})