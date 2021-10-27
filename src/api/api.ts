const RetrieveData = async () => {
  const url = "https://covid-api.mmediagroup.fr/v1/cases";
  return await fetch(url)
    .catch((err) => {
      return err;
    })
    .then((response) => response.json())
    .then((data) => data);
};

export { RetrieveData };