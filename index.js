document.addEventListener('DOMContentLoaded', function () {
            const carrosseis = document.querySelectorAll('.carrossel');

            carrosseis.forEach(carrossel => {
                const imgs = carrossel.querySelectorAll('img');
                const prevBtn = carrossel.querySelector('.prev');
                const nextBtn = carrossel.querySelector('.next');
                let currentIndex = 0;

                function showImage(index) {
                    imgs.forEach(img => img.classList.remove('active'));
                    imgs[index].classList.add('active');
                }

                prevBtn.addEventListener('click', () => {
                    currentIndex = (currentIndex - 1 + imgs.length) % imgs.length;
                    showImage(currentIndex);
                });

                nextBtn.addEventListener('click', () => {
                    currentIndex = (currentIndex + 1) % imgs.length;
                    showImage(currentIndex);
                });
            });
        });