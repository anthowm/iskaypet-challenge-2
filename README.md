## Tech Stack

- **HTML5**
- **SCSS**
- **jQuery**
- **BEM**
- **Nunito Font**

---

### **Project Setup**

#### **1. Prerequisites**

- Install **Node.js** and **npm** for SCSS compilation.
- Install a **text editor** (e.g., VS Code).
- Install a local development server (optional).

---

#### **2. Installation Steps**

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/anthowm/iskaypet-challenge-2.git
   cd iskaypet-challenge-2
   ```

2. **Install Node-Sass**:

   ```bash
   npm install -g node-sass
   ```

3. **Compile SCSS**:
   Run this command to compile SCSS to CSS:

   ```bash
   node-sass style.scss dist/style.css
   ```

4. **Run the Project**:
   - Open the `index.html` file in any modern browser.
   - Or use a local server:
     ```bash
     npx http-server
     ```

---

### **Folder Structure**

```
iskaypet-challenge-2/
│-- index.html        # Main HTML file
│-- style.scss        # SCSS styles
│-- dist/
│   ├── style.css     # Compiled CSS file
│   └── script.js     # JavaScript file
```

---

### **How It Works**

1. **Desktop vs Mobile**:

   - Media queries hide/show the appropriate version based on screen width.

2. **Button Toggle**:
   - Buttons switch between `#7AB800` and `#CC292B` when clicked.
