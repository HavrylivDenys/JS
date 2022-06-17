const names = ['Hello', 'World', 'Denys', 'Viktor', 'Roman'];

const getRandomInt = (max = 5) => Math.floor(Math.random() * max);

const handleClick = (e: Event) => {
  const element = e.target as HTMLElement;
  element.innerText = names[getRandomInt(names.length)];
};

const main = () => {
  const element = document.getElementById('header');
  element?.addEventListener('click', handleClick);
};

main();
