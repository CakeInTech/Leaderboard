const getData = (data) => {
  const container = document.getElementById('list');
  container.innerHTML = '';
  if (data != null) {
    data.result.forEach((element, index) => {
      const li = document.createElement('li');
      li.className = 'list-group-item';
      const span = document.createElement('div');
      span.className = 'spanner';
      span.textContent = `${element.user}:  ${element.score}`;
      container.appendChild(li);
      li.appendChild(span);
      if (index % 2 !== 0) {
        li.classList.add('list-group-item-success');
      }
    });
  }
};

export default getData;