# Liam Warren - Portfolio Website

A modern, responsive portfolio website showcasing my professional experience, projects, and skills as a Software Developer and Scrum Master.

## 🚀 Built With

- **React** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Framer Motion** - Animations
- **Lucide React** - Icons

## 🎨 Features

- Responsive design for all devices
- Smooth animations and transitions
- Interactive project modals with detailed information
- Professional experience timeline
- Skill tags and technology showcase
- Contact section with social links
- Scroll-to-top functionality
- SEO optimized with meta tags
- Accessible with skip links and ARIA labels

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/liamjwarren/port2025.git

# Navigate to the project directory
cd port2025

# Install dependencies
npm install

# Start the development server
npm run dev
```

## 🛠️ Development

```bash
# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
port2025/
├── public/
│   ├── projects/          # Project screenshots
│   ├── resume/           # Resume PDFs
│   └── favicon.svg       # Site favicon
├── src/
│   ├── components/       # React components
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Experience.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Projects.tsx
│   │   └── ScrollToTop.tsx
│   ├── config/          # Configuration files
│   │   └── features.ts  # Feature flags
│   ├── App.tsx
│   ├── App.css
│   └── main.tsx
└── index.html
```

## ⚙️ Configuration

### Feature Flags

Toggle features in `src/config/features.ts`:

```typescript
export const FEATURE_FLAGS = {
  SHOW_RESUME: false, // Set to true to enable resume download
};
```

### Adding Projects

Edit the `projects` array in `src/components/Projects.tsx`:

```typescript
{
  title: 'Project Name',
  description: 'Short description',
  detailedDescription: 'Detailed description for modal',
  features: ['Feature 1', 'Feature 2'],
  tags: ['React', 'TypeScript'],
  gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  githubUrl: 'https://github.com/username/repo',
  demoUrl: 'https://demo.example.com',
  screenshots: ['/projects/screenshot1.png'],
  thumbnail: '/projects/thumbnail.png',
}
```

## 📝 Customization

1. **Personal Information**: Update contact details in `src/components/Contact.tsx`
2. **Experience**: Modify work history in `src/components/Experience.tsx`
3. **About Section**: Edit bio and skills in `src/components/About.tsx`
4. **Hero Section**: Update intro in `src/components/Hero.tsx`
5. **Colors**: Modify gradients and colors in `src/App.css`

## 🌐 Deployment

The site can be deployed to any static hosting service:

- **Vercel**: `vercel --prod`
- **Netlify**: `netlify deploy --prod`
- **GitHub Pages**: `npm run build` and deploy the `dist` folder

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Liam Warren**
- GitHub: [@liamjwarren](https://github.com/liamjwarren)
- LinkedIn: [liamjwarren](https://linkedin.com/in/liamjwarren)
- Email: liamjwarren@gmail.com

---

Built with ❤️ using React and TypeScript
