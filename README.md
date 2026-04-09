# 🚀 GitHub Explorer

**GitHub Explorer** is a modern React application that allows users to **search developers, explore repositories, and bookmark useful projects** — all with a **clean UI and smooth user experience**.

---

# ✨ Features

## 🔎 Search Developers

* Search GitHub users in real-time
* Debounced input to reduce API calls
* Clean and responsive UI

---

## 📦 Explore Repositories

View repositories of selected users with:

* Repository Name
* Description
* Stars ⭐
* Forks 🍴
* Programming Language 🧩

---

## ⭐ Bookmark Repositories

* Save favorite repositories
* Stored using **localStorage**
* Dedicated **Bookmarks Page**
* Remove bookmarks anytime

---

# 🎯 Advanced Functionality

## 🔄 Infinite Scrolling

* Automatically loads more users
* Smooth scrolling experience
* No pagination required

## 🔃 Sorting Options

* Sort by **Stars**
* Sort by **Forks**

## 🔍 Filtering

* Filter repositories by programming language

---

# 🌙 UI / UX Enhancements

* Dark / Light Mode Toggle 🌙
* Smooth Loading Spinner
* Empty State UI
* Responsive Design
* Clean Card Layout
* Hover Animations

---

# 🛠️ Tech Stack

### Frontend

* React.js (Hooks & Functional Components)
* React Router DOM

### State Management

* useState
* useEffect

### Custom Hooks

* useDebounce

### API

* GitHub REST API
* Axios (for API requests)

### Storage

* localStorage

---

# 📁 Folder Structure

```
src/
 ├── components/
 │     ├── Header.jsx
 │     ├── SearchBar.jsx
 │     ├── UserCard.jsx
 │     ├── RepoCard.jsx
 │
 ├── hooks/
 │     └── useDebounce.js
 │
 ├── pages/
 │     ├── Home.jsx
 │     ├── UserRepos.jsx
 │     └── Bookmarks.jsx
 │
 ├── services/
 │     └── githubApi.js
 │
 ├── App.jsx
 ├── main.jsx
 └── index.css
```

---

# ⚙️ Installation & Setup

## Clone Repository

```
git clone https://github.com/YOUR_USERNAME/github-explorer.git
```

## Install Dependencies

```
npm install
```

## Run Development Server

```
npm run dev
```

---

# 🌐 API Endpoints Used

## Search Users

```
https://api.github.com/search/users?q={query}
```

## User Repositories

```
https://api.github.com/users/{username}/repos
```

---

# 🧠 Key Concepts Implemented

* Debouncing for efficient API usage
* Infinite scrolling
* Conditional rendering
* Component-based architecture
* LocalStorage persistence
* Dark mode implementation
* Clean UI & responsive layout

---

# 🙌 Author

**Vedant Kherade**

---

# ⭐ Show Your Support

If you found this project helpful, please give it a ⭐ on GitHub.

It helps others discover the project and supports my work.

---

Built with ❤️ using React
