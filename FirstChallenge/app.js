const elementToggleFunc = function(elem) {
    elem.classList.toggle("active")
}

//profile icon

const profileBtn = document.querySelector('.profile-btn')
const profileInfo = document.querySelector('.profile-info')

profileBtn.addEventListener('click', () => {
    profileInfo.classList.toggle('active');
})


//bell icon
const headerBellBtn = document.querySelector('.header-bell')
const notification = document.querySelector('.bellNot')

headerBellBtn.addEventListener('click', () => {
    elementToggleFunc(notification)
})

//up & down icon

const selectIconFlip = document.querySelector('.DownIcon')
const selectionList = document.querySelector('.selectionList')


selectIconFlip.addEventListener('click', () => {
    elementToggleFunc(selectionList)
   
})


//each setup guild

const setupsBtn = document.querySelectorAll('.setups')
const setupContent = document.querySelectorAll('.setup-content')

setupsBtn.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        setupContent.forEach((text, idx) => {
            if (index === idx) {
                text.style.display = 'block'
            }else {
                text.style.display = 'none'
            }
        })
    })
})




const DownIcon = document.querySelector('.DownIcon svg');

DownIcon.addEventListener('click', () => {
    if(DownIcon.classList.contains('flipped')) {
        DownIcon.innerHTML =    `
                <path id="Icon" fill-rule="evenodd" clip-rule="evenodd" d="M5.71967 8.46967C6.01256 8.17678 6.48744 8.17678 6.78033 8.46967L10.25 11.9393L13.7197 8.46967C14.0126 8.17678 14.4874 8.17678 14.7803 8.46967C15.0732 8.76256 15.0732 9.23744 14.7803 9.53033L10.7803 13.5303C10.4874 13.8232 10.0126 13.8232 9.71967 13.5303L5.71967 9.53033C5.42678 9.23744 5.42678 8.76256 5.71967 8.46967Z" fill="#4A4A4A"/>
            `
        DownIcon.classList.remove('flipped')
    }else {
        DownIcon.innerHTML = `
                <path fill-rule="evenodd" clip-rule="evenodd" d="M15.0303 12.2803C14.7374 12.5732 14.2626 12.5732 13.9697 12.2803L10.5 8.81066L7.03033 12.2803C6.73744 12.5732 6.26256 12.5732 5.96967 12.2803C5.67678 11.9874 5.67678 11.5126 5.96967 11.2197L9.96967 7.21967C10.2626 6.92678 10.7374 6.92678 11.0303 7.21967L15.0303 11.2197C15.3232 11.5126 15.3232 11.9874 15.0303 12.2803Z" fill="#4A4A4A"/>
            `
        DownIcon.classList.add('flipped')
    }
})


const clickButtons = document.querySelectorAll('.clickBtn')

clickButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const parent = button.closest('li')
        const tickedIcon = parent.querySelector('.tickedIcon svg')

        if(tickedIcon) {
            tickedIcon.innerHTML = `
            <svg width="20" height="23" viewBox="0 0 20 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g transform="translate(0 3)">
                    <rect width="20" height="20" fill="black" rx="10" ry="10" />
                    <g id="TickMinor">
                        <path id="Icon" fill="white" fill-rule="evenodd" clip-rule="evenodd" d="M13.8162 5.64149C14.0603 5.88557 14.0603 6.2813 13.8162 6.52538L8.39954 11.942C8.15546 12.1861 7.75974 12.1861 7.51566 11.942L4.80733 9.23371C4.56325 8.98963 4.56325 8.5939 4.80733 8.34983C5.0514 8.10575 5.44713 8.10575 5.69121 8.34983L7.9576 10.6162L12.9323 5.64149C13.1764 5.39742 13.5721 5.39742 13.8162 5.64149Z"/>
                    </g>
                </g>
            </svg> 
            `
        }
    })
})


