function translateToEmoji() {
    let text = document.getElementById("inputText").value;
    let emojiDictionary = {
        "pizza": "🍕",
        "love": "❤️",
        "happy": "😊",
        "cat": "🐱",
        "dog": "🐶",
        "laugh": "😂",
        "cool": "😎",
        "fire": "🔥",
        "thumbs up": "👍"
    };

    for (let word in emojiDictionary) {
        let regex = new RegExp(word, "gi");
        text = text.replace(regex, emojiDictionary[word]);
    }

    document.getElementById("output").innerText = text;
}

let konamiCode = ["ArrowUp", "ArrowDown", "KeyB", "KeyA"];
let userInput = [];

document.addEventListener("keydown", function(event) {
    userInput.push(event.code);
    userInput = userInput.slice(-konamiCode.length);
    
    if (JSON.stringify(userInput) === JSON.stringify(konamiCode)) {
        document.body.style.backgroundImage = "url('cat.gif')";
        alert("Konami Code Activated! 🐱");
    }
});