window.onload = () => {
  const requestButton = document.getElementById("request-button");
  requestButton.addEventListener("click", async () => {
    const methodValue = document.getElementById("methods").value;
    const apiUrl = "http://localhost:8001/api";

    /**
     * Makes an asynchronous call to the specified endpoint using the given method.
     * @param {string} method - The HTTP method to use for the request (e.g., "GET", "POST", etc.).
     * @param {string} endpoint - The URL endpoint to send the request to.
     */
    const call = async (method, endpoint) => {
      fetch(endpoint, {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
      }).then((response) => {
        if (response.ok) {
          response.json().then((data) => {
            const responses = document.getElementById("responses");
            const div = document.createElement("div");
            div.innerHTML = data.message;
            responses.appendChild(div);
          });
        }
      });
    };
    call(methodValue, apiUrl);
  });
};
