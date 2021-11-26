export const loadUsers = async (recurso: string) => {
  const data = await fetch(`
    http://dev.alexandria.solar:8888/${recurso}`)
    .then((response) => response.json())
    .then((data) => data.data)
    .catch((error) => console.log(error));

  return data;
};
