async function fetchData() {
    try {
      const response = await fetch('<https://example.com/data>');
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }
  function getUser(userId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const user = { id: userId, name: 'John Doe' };
        resolve(user);
      }, 1000);
    });
  }
  
  async function getUserData(userId) {
    try {
      const user = await getUser(userId);
      const userData = await fetch(`https://example.com/user/${user.id}`);
      const json = await userData.json();
      return json;
    } catch (error) {
      console.error(error);
    }
  }
  