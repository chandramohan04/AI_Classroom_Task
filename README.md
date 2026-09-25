# 🎓 AI Classroom – 10 AI-Powered Web Tools

A single integrated educational website containing **10 AI-powered classroom tools** built with HTML, CSS, and JavaScript.

This project is based on the provided **“10 In-Class AI Tasks for Students”** document. The tasks follow the workflow of taking user input, sending it to AI, and dynamically displaying structured output on a webpage.

---

## 🚀 Features

### 1. AI Resume Builder

Create a professional resume using:

* Name
* Contact
* Education
* Skills
* Experience
* Objective
* Resume preview
* PDF/print support

The original task specifies a form-based resume builder where AI generates polished resume content.

---

### 2. AI Notes Generator

Convert raw study material into structured notes.

**Features:**

* Topic/text input
* AI-generated notes
* Headings
* Bullet points
* Copy notes
* Download/print support

The task describes converting textbook or topic text into short structured notes.

---

### 3. AI Presentation / PPT Generator

Generate presentation content from a topic.

**Features:**

* Topic input
* Multiple slides
* Slide titles
* Bullet points
* Previous/Next navigation
* Presentation-style UI

The task specifies generating 5–6 structured slides using AI output such as slide titles and bullet points.

---

### 4. AI Mind Map Generator

Convert syllabus or topic information into a hierarchical mind map.

**Features:**

* Syllabus input
* Main topics
* Subtopics
* Key points
* Hierarchical structure
* Mind-map-ready output

The original task proposes using a mind-map library such as Markmap.js or SVG/Canvas rendering.

---

### 5. Google Sheets Backend

Use Google Sheets as a lightweight database.

**Features:**

* Student data
* Marks/attendance data
* Add new records
* Display records in a table
* Google Apps Script integration
* Optional AI data analysis

The provided task describes using Google Apps Script with `doGet()` and `doPost()` to read and write spreadsheet data.

---

### 6. AI Quiz / MCQ Generator

Generate interactive multiple-choice quizzes.

**Features:**

* Topic input
* AI-generated questions
* Four options
* Correct/incorrect feedback
* Automatic score
* Final result

The task specifies generating 5–10 MCQs in structured JSON and rendering them interactively.

---

### 7. AI Subject Doubt-Solving Chatbot

A simple AI tutor for answering student questions.

**Features:**

* Chat interface
* User questions
* AI responses
* Conversation history
* Follow-up questions
* Clear chat button

The task describes maintaining conversation history so follow-up questions can retain context.

---

### 8. AI Flashcard Generator

Generate revision flashcards from a topic or chapter.

**Features:**

* Topic input
* Question/answer cards
* Flip animation
* Next card
* Shuffle functionality
* Revision-focused interface

The task specifies generating 8–10 flashcards and displaying them using CSS 3D flip animation.

---

### 9. AI Study Planner / Timetable Generator

Generate a day-wise study timetable.

**Input:**

* Subjects
* Available study hours
* Exam/target date

**Output:**

* Day-wise schedule
* Time slots
* Subjects
* Weekly timetable
* Regenerate option

The task describes generating a balanced day-wise plan and rendering it as a timetable grid.

---

### 10. AI Notes Summarizer – OCR + AI

Upload a handwritten or printed notes image and prepare it for AI summarization.

**Workflow:**

```text
Upload Image
      ↓
OCR
      ↓
Extract Text
      ↓
Correct Text
      ↓
AI Summarization
      ↓
Key Points
```

The task specifically describes using Tesseract.js or an OCR API to extract text before sending it to AI for summarization.

---

# 🛠️ Technologies Used

* HTML5
* CSS3
* JavaScript
* AI API integration
* Google Sheets
* Google Apps Script
* Tesseract.js
* Responsive Web Design
* JSON
* DOM Manipulation

---

# 📁 Project Structure

```text
AI-Classroom/
│
├── index.html
│
├── resume.html
├── notes.html
├── ppt.html
├── mindmap.html
├── sheets.html
├── quiz.html
├── chatbot.html
├── flashcards.html
├── planner.html
├── ocr.html
│
├── styles.css
├── app.js
│
└── README.md
```

---

# 💻 How to Run the Project

## Step 1: Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/ai-classroom.git
```

## Step 2: Open Project

```bash
cd ai-classroom
```

## Step 3: Open in VS Code

```bash
code .
```

## Step 4: Run Website

You can use the **Live Server** extension in VS Code.

Right-click:

```text
index.html
```

and select:

```text
Open with Live Server
```

---

# 🔗 Website Navigation

The website contains a common navigation system:

```text
Dashboard
   │
   ├── Resume Builder
   ├── Notes Generator
   ├── PPT Generator
   ├── Mind Map
   ├── Google Sheets
   ├── Quiz
   ├── Tutor Chatbot
   ├── Flashcards
   ├── Study Planner
   └── OCR Summarizer
```

All 10 tools are integrated into one website.

---

# 🤖 AI Integration

For production use, the frontend should communicate with a backend.

Recommended architecture:

```text
User
  ↓
Frontend
HTML + CSS + JavaScript
  ↓
Backend API
  ↓
AI API
  ↓
Backend
  ↓
Frontend
  ↓
AI Result
```

Example API endpoint:

```text
POST /api/ai
```

Example request:

```json
{
  "task": "notes",
  "input": "Explain Machine Learning"
}
```

Possible task values:

```text
resume
notes
ppt
mindmap
quiz
chat
flashcards
planner
ocr
```

---

# 🔐 API Key Security

Never put your private AI API key directly inside:

```text
app.js
```

or:

```text
index.html
```

Use a backend and environment variables.

Example:

```env
AI_API_KEY=your_api_key_here
```

Add `.env` to `.gitignore`:

```gitignore
.env
node_modules/
```

---

# 📊 Google Sheets Integration

The Google Sheets page can communicate with Google Apps Script.

Architecture:

```text
Website
   ↓
fetch()
   ↓
Google Apps Script
   ↓
Google Sheets
```

The provided classroom task recommends using:

```javascript
doGet()
doPost()
```

for reading and writing spreadsheet data.

---

# 🖼️ OCR Integration

The OCR page can use Tesseract.js.

Workflow:

```text
Image Upload
     ↓
Tesseract.js
     ↓
Text Extraction
     ↓
Text Correction
     ↓
AI
     ↓
Summary
```

This follows the OCR workflow described in the provided task.

---

# 📱 Responsive Design

The website is designed for:

* 💻 Desktop
* 💻 Laptop
* 📱 Mobile
* 📱 Tablet

---

# 🌐 GitHub Setup

Create a new GitHub repository named:

```text
ai-classroom
```

Then run:

```bash
git init
```

```bash
git add .
```

```bash
git commit -m "Initial commit - AI Classroom 10 tools"
```

```bash
git branch -M main
```

Connect your repository:

```bash
git remote add origin https://github.com/YOUR_USERNAME/ai-classroom.git
```

Push the project:

```bash
git push -u origin main
```

---

# 🚀 GitHub Pages Deployment

After pushing the project:

1. Open your GitHub repository.
2. Go to **Settings**.
3. Open **Pages**.
4. Select **Deploy from a branch**.
5. Select:

```text
Branch: main
Folder: / (root)
```

6. Click **Save**.

Your website URL will be:

```text
https://YOUR_USERNAME.github.io/ai-classroom/
```

---

# 📌 Project Status

| Feature            | Status                  |
| ------------------ | ----------------------- |
| 10 Webpages        | ✅ Completed             |
| Common Navigation  | ✅ Completed             |
| Responsive UI      | ✅ Completed             |
| Frontend Demo      | ✅ Completed             |
| AI API             | 🔌 Integration Required |
| Google Sheets      | 🔌 Integration Required |
| OCR                | 🔌 Integration Required |
| Production Backend | 🔌 Integration Required |
| GitHub Ready       | ✅ Yes                   |
| GitHub Pages Ready | ✅ Yes                   |

---

# 🎯 Learning Outcomes

This project provides practical experience with:

* HTML forms
* CSS responsive design
* JavaScript
* DOM manipulation
* Event handling
* JSON
* API integration
* Prompt engineering
* AI-generated content
* Chat interfaces
* Interactive quizzes
* CSS animations
* Timetable generation
* Google Sheets backend
* OCR
* AI summarization

---

# 👨‍💻 Author

**Chandra Mohan Kumar**

**Project:** AI Classroom – 10 AI-Powered Web Tools

---

# 📄 Project Reference

This project is based on the provided **10 In-Class AI Tasks for Students** assignment covering AI Resume Builder, Notes Generator, Presentation Generator, Mind Map, Google Sheets backend, Quiz, Doubt-Solving Chatbot, Flashcards, Study Planner, and OCR + AI Summarizer.
an Apps Script Web App URL. OCR needs Tesseract.js.
