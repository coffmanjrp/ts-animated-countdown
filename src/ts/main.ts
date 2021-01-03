const nums = document.querySelectorAll(
  '.nums span'
) as NodeListOf<HTMLSpanElement>;
const counter = document.querySelector('.counter') as HTMLDivElement;
const final = document.querySelector('.final') as HTMLDivElement;
const replay = document.getElementById('replay') as HTMLButtonElement;

function resetDOM() {
  counter.classList.remove('hide');
  final.classList.remove('show');

  nums.forEach((num) => {
    num.classList.value = '';
  });

  nums[0].classList.add('in');
}

function runAnimation() {
  nums.forEach((num, idx) => {
    const nextToLast = nums.length - 1;

    num.addEventListener('animationend', (e) => {
      if (e.animationName === 'goIn' && idx !== nextToLast) {
        num.classList.remove('in');
        num.classList.add('out');
      } else if (e.animationName === 'goOut' && num.nextElementSibling) {
        num.nextElementSibling.classList.add('in');
      } else {
        counter.classList.add('hide');
        final.classList.add('show');
      }
    });
  });
}

replay.addEventListener('click', () => {
  resetDOM();
  runAnimation();
});

runAnimation();
