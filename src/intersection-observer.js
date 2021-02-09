const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5
}
const callback = (entries) => {
  for(const entry of entries) {
    if (entry.isIntersecting) {
      entry.target.classList.add('redden');
    } else {
      entry.target.classList.remove('redden');
    }
  };
}
const observer = new IntersectionObserver(callback, options);

const target = document.querySelector('#target');
observer.observe(target);