const fetchcars = () => {
    return fetch("https://carsfiles.free.beeceptor.com/cars", { method: 'GET' })
      .then((respose) => {
        return respose.json();
      })
      .catch((err) => {
        console.log(err.toString());
        console.log("lola");
      });
  };
  
  export { fetchcars };
  