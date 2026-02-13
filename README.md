# Dr. Vindhya Malagi - Portfolio

A modern, responsive portfolio website for **Dr. Vindhya Malagi**, Professor & Head of Artificial Intelligence & Machine Learning at Dayananda Sagar College of Engineering (DSCE). This site showcases her professional journey, academic contributions, research publications, and leadership in innovation.

## ✨ Features

- 🎨 **Modern Design**: Clean and professional UI with smooth animations powered by Framer Motion
- 📱 **Fully Responsive**: Optimized for all screen sizes (mobile, tablet, desktop)
- ⚡ **Fast Performance**: Built with Vite for lightning-fast development and optimized production builds
- 🎯 **Data-Driven**: Content managed through a centralized JSON file for easy updates
- 🔍 **SEO Friendly**: Optimized for search engines with proper meta tags
- 🌐 **Easy Navigation**: Smooth scrolling and intuitive user experience

## 🚀 Technologies Used

- **[React 19](https://react.dev/)**: Frontend library for building the user interface
- **[Vite](https://vitejs.dev/)**: Next-generation frontend tooling for fast development and building
- **[Tailwind CSS v4](https://tailwindcss.com/)**: Utility-first CSS framework for styling
- **[Framer Motion](https://www.framer.com/motion/)**: Library for production-ready animations
- **[React Router DOM](https://reactrouter.com/)**: Client-side routing
- **[Lucide React](https://lucide.dev/)**: Beautiful & consistent icon toolkit

## 📂 Project Structure

```
vindhya-portfolio/
├── public/             # Static assets
├── src/
│   ├── components/     # Reusable UI components
│   ├── sections/       # Main page sections (Hero, About, Experience, etc.)
│   ├── App.jsx         # Main application component
│   └── main.jsx        # Application entry point
├── profile.json        # Central data source for content
├── index.html          # HTML template
├── package.json        # Project dependencies and scripts
├── tailwind.config.js  # Tailwind CSS configuration
└── vite.config.js      # Vite configuration
```

### Making Content Updates

To update the content of the portfolio:

1. Open **`profile.json`** in the root directory
2. Modify the JSON fields:
   - `personal_information`: Name, title, contact details, social links
   - `professional_summary`: About section content
   - `publications`: Research publications and papers
   - `experience`: Work history and positions
   - `projects`: Featured projects and achievements
   - `education`: Academic background
3. Save the file - changes will automatically reflect on the website

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

### Deploy Options

The built files in `dist/` can be deployed to any static hosting service:

- **[Vercel](https://vercel.com/)**: Recommended for React + Vite projects
- **[Netlify](https://www.netlify.com/)**: Easy deployment with drag-and-drop
- **[GitHub Pages](https://pages.github.com/)**: Free hosting for GitHub repositories
- **[Cloudflare Pages](https://pages.cloudflare.com/)**: Fast global CDN

## 🎨 Customization

### Styling

The portfolio uses **Tailwind CSS v4** for styling. You can customize:

- **Colors & Theme**: Edit `tailwind.config.js`
- **Animations**: Modify Framer Motion configurations in component files
- **Layout**: Update component styles in `src/sections/` and `src/components/`

### Adding New Sections

1. Create a new component in `src/sections/`
2. Import and add it to `App.jsx`
3. Add corresponding data to `profile.json` if needed

## 📄 License

This project is for personal use.

---

**Built with ❤️ using React + Vite + Tailwind CSS**
