# 🎲 Advice Generator App  
A responsive React mini project built as part of my journey to understand API fetching, state management, and side effects in React.  

This is a Frontend Mentor challenge that I built step by step — not just to match the Figma design, but to really understand how `useState` and `useEffect` work together with API data.  

---

## 🎯 What it does  
- Fetches random advice from the [Advice Slip API](https://api.adviceslip.com).  
- Displays an advice ID and the advice text.  
- Click the dice button to load a new piece of advice.  
- Responsive layout: optimized for both mobile (375px) and desktop (1440px).  

---

## 🔧 Tech Used  
- React (with functional components + hooks)  
- Tailwind CSS 4  
- Async/await + fetch for API requests  
- Conditional rendering for loading states  
- Responsive variants (`md:`) in Tailwind for adaptive design  

---

## 🧠 What I practiced  
- Using `useState` to store API data (`id` + `advice`).  
- Using `useEffect` to trigger data fetch on component mount.  
- Writing a reusable `fetchAdvice()` function called both on load and on button click.  
- Handling conditional UI when state is empty (`Loading...`).  
- Styling a card component and responsive text with Tailwind.  
- Positioning the dice button with absolute positioning and transform utilities.  

---

## 🚀 Live Demo  
👉 [View it on GitHub Pages](#)  



