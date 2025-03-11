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