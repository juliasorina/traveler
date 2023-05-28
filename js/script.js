function Accord() {
    const others = document.querySelector('.others');
    const filter = document.querySelector('.filter');

    function filterToggle() {
        if (others.style.maxHeight == '') {
                others.style.maxHeight = others.scrollHeight + 'px';
                filter.style.gap = '12px';
            }
        else {
                others.style.maxHeight = '';
                filter.style.gap = '0';
            }
    }

    document.querySelector('.filter').addEventListener('click', () => {filterToggle()});
}

function Filter() {
    const locs = document.querySelectorAll('.loc');

    locs.forEach(item => {
        item.addEventListener('click', event => {
            let country = event.target.dataset['country'];
            const trips = document.querySelectorAll('.trip');

            trips.forEach(item => {
                let condition = item.dataset['country'] == country || country == 'All';
                if(condition && item.classList.contains('hidden')){
                    item.classList.remove('hidden');
                }
                else if(!condition){
                    item.classList.add('hidden');
                }
            })

            document.querySelector('.loc-chosen').innerHTML = event.target.innerHTML;
            locs.forEach(item => {
                item.style.display = 'block';
            })
            event.target.style.display = 'none';
        })
    })
}

function Slider() {
    let offset = 0;
    let sliderContent = document.querySelector('.slider-content');
    let slideWidth = sliderContent.offsetWidth / 7;

    document.querySelector('.slider-but__next').addEventListener('click', () => {
        offset += slideWidth;
        if (offset > slideWidth * 6) {
            offset = 0;
        }
        sliderContent.style.left = -offset + 'px';
    });

    document.querySelector('.slider-but__ex').addEventListener('click', () => {
        offset -= slideWidth;
        if (offset < slideWidth) {
            offset = slideWidth * 6;
        }
        sliderContent.style.left = -offset + 'px';
    });
}

function Burger() {
    const burgerNone = document.querySelector('.burger__none');
    const burger = document.querySelector('.burger');

    function burgerToggle() {
        if (burgerNone.style.maxHeight == '') {
                burgerNone.style.maxHeight = burgerNone.scrollHeight + 'px';
                burger.style.maxWidth = burgerNone.offsetWidth + 40 + 'px';
                burger.style.gap = '16px';
            }
        else {
                burgerNone.style.maxHeight = '';
                burger.style.maxWidth = '';
                burger.style.gap = '0';
            }
    }

    document.querySelector('.burger').addEventListener('click', () => {burgerToggle()});
}

function modal(){
    const cookies = document.querySelector(".cookies");
	const cookiesBtn = document.querySelector(".cookies__btn");

	cookiesBtn.addEventListener("click", function () {
		cookies.style.display = "none";
	});
}

 

modal();
Burger()
Slider();
Accord();
Filter();