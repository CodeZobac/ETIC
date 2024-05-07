// // XHR Object

// window.onload = () => {
//   const xhr = new XMLHttpRequest();
//   const url = "data.json";
//   xhr.onreadystatechange = function () {
//     if (xhr.readyState === XMLHttpRequest.DONE) {
//       if (xhr.status === 200) {
//         const data = JSON.parse(xhr.responseText);
//         console.log(data);
//       } else {
//         console.error("Error:", xhr.status);
//       }
//     }
//   };
//   xhr.open("GET", url);
//   xhr.send();
// };

// FETCH API

// window.onload = async () => {
//     try{
//         const req = await fetch('data.json');
//         const data = await req.json();
//         console.log(data);
//     } catch (error) {
//         throw new Error(error.message);
//     }
// }

const serverURL = "http://localhost:3000/";
const getData = async () => {
  try {
    const response = await fetch(serverURL + "data");
    const data = await response.json();
    displayData(data);
  } catch (error) {
    throw new Error(error.message);
  }
};

const postData = async () => {
  try {
    const newData = { message: "Hello, server!" };
    const response = await fetch(serverURL + "data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newData),
    });
  } catch (error) {
    throw new Error(error.message);
  }
};

const displayData = (data) => {
  const dataContainer = document.getElementById("data-container");
  dataContainer.innerHTML = `${JSON.stringify(data, null, 2)}`;
};
