'use strict';
window.addEventListener('DOMContentLoaded', function () {
    //MODAL MODAL MODAL////////////////////////////////
    let modalButton = document.querySelectorAll('.call-order, .send, .send-mobile'),
        modal = document.querySelector('.modal-send'),
        modalClose = document.querySelector('.close'),
        modalBg = document.querySelector('.modal-bg');
    modalButton.forEach((i)=>{
        i.addEventListener('click', function(){
            document.body.style.overflow = 'hidden';
            modal.style.display='flex';
            modalBg.style.display='block';
        });
    modalClose.addEventListener('click', function(){
        modal.style.display='none';
        modalBg.style.display='none';
        document.body.style.overflow = 'auto';
    });
    });
    modalBg.addEventListener('click', function(){
        modal.style.display='none';
        modalBg.style.display='none';
        document.body.style.overflow = 'auto';
    });
    let hamburger = document.querySelector('.hamburger'),
        menuItems = document.querySelector('.menu-mobile-items'),
        back = document.querySelectorAll('.back'),
        loopModal = document.querySelector('.loop-modal'),
        loopButton = document.querySelector('.loop-mobile');
    hamburger.addEventListener('click', function(){
        if (menuItems.style.display == 'none') {
            menuItems.style.display = 'block';
            document.body.style.overflow = 'hidden';
        } else {
            menuItems.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
        hamburger.classList.toggle('hamburger-active');
        if(loopModal.style.display === 'block'){
            loopModal.style.display = 'none';
        }
    });
    back.forEach((i)=>{
        i.addEventListener('click', function(){
            menuItems.style.display = 'none';
            loopModal.style.display = 'none';
            document.body.style.overflow = 'auto';
            hamburger.classList.remove('hamburger-active');
        });
            
        
    });

    loopButton.addEventListener('click', function(){
        if(loopModal.style.display === 'none') {
            loopModal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        } else {
            loopModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
        if(menuItems.style.display === 'block') {
            menuItems.style.display = 'none';
            hamburger.classList.toggle('hamburger-active');
        }
        if (menuItems.style.display === 'none')
        {
            hamburger.classList.remove('hamburger-active');
        }
    });

    let footerTitles = document.querySelectorAll('.footer-title-1, .footer-title-2, .footer-title-3'),
        ulTitles = document.querySelectorAll('.ul-1, .ul-2, .ul-3');
        mobileFooter ();
        function mobileFooter (){
            if (screen.width < 993){
                footerTitles.forEach((i, index)=>{
                    i.addEventListener('click', function(){
                        footerTitles.forEach((i2)=>{
                            i2.classList.remove('footer-title-active');
                        });
                        i.classList.add('footer-title-active');
                        ulTitles.forEach((i3)=>{
                            i3.style.display = 'none';
                        });
                        ulTitles[index].style.display = 'block';
                    });
                });
            }
        }

        let catalogTitle = document.querySelectorAll('.catalog-title'),
        catalogSubtitle = document.querySelectorAll('.catalog-subtitles');
    catalogTitle.forEach((item, i, a)=>{
        item.addEventListener('click', function(){
            if(item.classList.contains('catalog-title-active')){
                item.classList.remove('catalog-title-active');
                catalogSubtitle.forEach((item3)=>{
                    item3.classList.remove('catalog-subtitle-active');
                });
            } else {
                catalogTitle.forEach((item1)=>{
                    item1.classList.remove('catalog-title-active');
                });
                item.classList.add('catalog-title-active');
                catalogSubtitle.forEach((item2)=>{
                    item2.classList.remove('catalog-subtitle-active');
                });
                catalogSubtitle[i].classList.add('catalog-subtitle-active');

            }

        });

    });
    let aboutInfoitem = document.querySelectorAll('.about-info-item');

    aboutInfoitem.forEach((item, i, a)=>{
        item.addEventListener('click', function(){
            if(item.classList.contains('about-info-item-active')){
                item.classList.remove('about-info-item-active');
            } else {
                aboutInfoitem.forEach((item1)=>{
                    item1.classList.remove('about-info-item-active');
                });
                item.classList.add('about-info-item-active');
            }
        });

});
let orderingitem = document.querySelectorAll('.ordering-item');

orderingitem.forEach((item, i, a)=>{
    item.addEventListener('click', function(){
        if(item.classList.contains('ordering-item-active')){
            item.classList.remove('ordering-item-active');
        } else {
            orderingitem.forEach((item1)=>{
                item1.classList.remove('ordering-item-active');
            });
            item.classList.add('ordering-item-active');
        }
    });

});
let buttons = document.querySelectorAll('button');
    buttons.forEach((i)=>{
        i.addEventListener('mouseenter', function(){
            i.style.boxShadow = '0px 9px 13px rgba(253, 224, 0, 0.55)';
        });
        i.addEventListener('mouseleave', function(){
            i.style.boxShadow = '0px 9px 11px rgba(253, 224, 0, 0.19)';
            i.style.background = '#FDE000';
        });
        i.addEventListener('click', function(){
            i.style.background = 'white';
            i.style.boxShadow = '0px 9px 11px rgba(0, 0, 0, 0.19)';
        });
    });
    let buttonLoad = document.querySelectorAll('.load');
    buttonLoad.forEach((i)=>{
        i.addEventListener('mouseenter', function(){
            i.style.boxShadow = 'none';
        });
        i.addEventListener('mouseleave', function(){
            i.style.boxShadow = 'none';
            i.style.background = 'rgba(0, 0, 0, 0)';
        });
        i.addEventListener('click', function(){
            i.style.background = 'white';
        });
    });
    let fixedButton = document.querySelector('.fixed-button'),
        fixedButtonModal = document.querySelector('.fixed-button-modal'),
        fixedButtonClose = document.querySelector('.fixed-button-modal-close');
    fixedButton.addEventListener('click', function(){
        fixedButton.classList.add('fixed-button-active');
        setTimeout(()=> fixedButtonModal.classList.add('fixed-button-modal-active'), 300);
    });
    fixedButtonClose.addEventListener('click', function(){
        setTimeout(()=> fixedButton.classList.remove('fixed-button-active'), 300);
        fixedButtonModal.classList.remove('fixed-button-modal-active');
    });
});