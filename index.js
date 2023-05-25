const commandBtn = document.getElementById('commandBtn');

commandBtn.addEventListener('click', alfa);

async function alfa(){
    let data = {
        text:"My name"
    };
    const response = await fetch("https://m2clyggysc.execute-api.us-east-1.amazonaws.com/Test/", {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      const json = await response.json();
      alert(JSON.stringify(json));
}