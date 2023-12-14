fetch('https://jsonplaceholder.typicode.com/todos/')
      .then((data) => data.json())
      .then(data => console.log(data[20]))