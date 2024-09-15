function greetUser() {
    const name = document.getElementById('nameInput').value.toLowerCase();
    
    // Create a Set with names you want to check
    const specialNames = new Set(["victoria", "vika"]);
    
    let greetingMessage;
    
    // Check if the name is in the Set
    if (specialNames.has(name)) {
        greetingMessage = `Hello, ${name.charAt(0).toUpperCase() + name.slice(1)}! You are not gay!`;
    } else {
        greetingMessage = `Hello, ${name.charAt(0).toUpperCase() + name.slice(1)}! You are gay!`;
    }
    
    document.getElementById('greeting').innerText = greetingMessage;
}
