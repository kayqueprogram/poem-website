let header = document.getElementById('header');

let navigationHeader = document.getElementById('navigation_header');

let content = document.getElementById('content');

let showSidebar = false;

function toggleSidebar() {
    showSidebar = !showSidebar;
    if(showSidebar) {
        navigationHeader.style.marginLeft = '-10vw';
        navigationHeader.style.animationName = 'showSidebar';
        content.style.filter = 'blur(2px)'
    }else {
        navigationHeader.style.marginLeft = '-100vw';
        navigationHeader.style.animationName = '';
        content.style.filter = ''
    }
}

function closeSidebar() {
    navigationHeader.style.marginLeft = '-100vw'
    content.style.filter = ''
}