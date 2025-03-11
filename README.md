# Emoji Translator (Tutorial)

Simple web app for translating text to emojis. Built with HTML, CSS, and JavaScript for beginners.

## Prerequisites

- Basic computer skills.
- Code editor (VS Code recommended).
- Modern browser (Chrome, Firefox, Edge).

## Getting Started

1. Clone the repo
2. Open `index.html` in your browser.
3. Follow the PDF guide to achieve this tutorial

## Project Structure

emoji-translator/
├── index.html
├── styles.css
└── script.js


## How it should work

1. Open `index.html` in your browser.
2. Enter text and see the emoji translation.
3. Modify files to customize Front-end.

## Instructions
# Improving Your Emoji Translator Website

## 1. Change the Background of the Website
To change the background color, open `styles.css` and find the `body` section. Modify the `background-color` property:

```css
body {
    background-color: lightblue; /* Change this to any color you like */
}
```

To use an image instead:
```css
body {
    background-image: url('background.jpg'); /* Add your own image file */
    background-size: cover;
    background-position: center;
}
```

## 2. Change the Title of the Website
To change the title that appears on the browser tab, open `index.html` and edit this line inside `<head>`:
```html
<title>My Awesome Emoji Translator</title>
```
Change the text inside `<title>` to anything you want!

## 3. Change the Text Size and Font
To change the font style and size of the text, update `styles.css`:
```css
body {
    font-family: 'Comic Sans MS', cursive, sans-serif; /* Change the font */
}
#output {
    font-size: 24px; /* Change the size of the translated text */
}
```

## 4. Add More Emojis
Open `script.js` and find the `emojiDictionary`. Add more word-to-emoji mappings:
```js
let emojiDictionary = {
    "pizza": "🍕",
    "love": "❤️",
    "happy": "😊",
    "cat": "🐱",
    "dog": "🐶",
    "laugh": "😂",
    "cool": "😎",
    "fire": "🔥",
    "thumbs up": "👍",
    "robot": "🤖",  // Added new emoji
    "banana": "🍌"   // Another example
};
```
**Pro Tip:** You can use ChatGPT to generate a list of words and matching emojis!

## 5. Enable Enter Key to Translate
Modify `script.js` to detect when the user presses Enter:
```js
document.getElementById("inputText").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        translateToEmoji();
    }
});
```
This way, pressing Enter will automatically translate the text.

---
## Bonus Challenges

### 6. Improve CSS for Mobile and Test It
To make the website look better on mobile, update `styles.css`:
```css
@media (max-width: 600px) {
    textarea {
        width: 95%; /* Make the input box fit smaller screens */
    }
    button {
        font-size: 14px; /* Make buttons smaller */
    }
}
```
>**Test It:** Right-click the page, select `Inspect`, or use the shortcut (Ctrl + Shift + I), and click on the phone icon 📱 to simulate mobile view!

### 7. Implement a Secret Konami Code
Modify `script.js` to detect a secret key sequence (e.g., `ArrowUp` → `ArrowDown` → `B` → `A`):
```js
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
```
Now, when the user enters `↑ ↓ B A`, the background will change to `cat.gif`!

---
### **You're Now a Web Developer! 🚀**
Try these improvements and experiment with more changes to make your Emoji Translator unique!

