# PortfolioLab - Modern Developer Portfolio

A stunning, modern developer portfolio built with React, TypeScript, and Chakra UI. This portfolio showcases professional experience, skills, projects, and provides an impressive way to present yourself as a developer.

## ✨ Features

- **Modern Design**: Clean, professional design with smooth animations and transitions
- **Responsive Layout**: Fully responsive design that works on all devices
- **Dark/Light Mode**: Toggle between dark and light themes
- **Smooth Scrolling**: Seamless navigation between sections
- **Interactive Components**: Engaging UI elements with hover effects and animations
- **Contact Form**: Functional contact form for potential clients and employers
- **SEO Optimized**: Proper semantic HTML and meta tags

## 🏗️ Architecture

This project follows **MVVM (Model-View-ViewModel)** and **Atomic Design** principles:

### MVVM Architecture
- **Models**: Data structures and business logic (`src/models/`)
- **Views**: UI components (`src/views/`, `src/components/`)
- **ViewModels**: Business logic and state management (`src/viewmodels/`)

### Atomic Design
- **Atoms**: Basic building blocks (Button, Heading, Text, Card)
- **Molecules**: Simple combinations of atoms (SkillCard, ProjectCard)
- **Organisms**: Complex UI components (Header, HeroSection, SkillsSection)
- **Templates**: Page layouts and structure
- **Pages**: Complete pages with templates

## 🚀 Tech Stack

- **Frontend**: React 18 + TypeScript
- **UI Library**: Chakra UI
- **Build Tool**: Vite
- **Icons**: React Icons
- **Styling**: Emotion (CSS-in-JS)
- **Animations**: Framer Motion
- **Routing**: React Router DOM

## 📁 Project Structure

```
src/
├── components/
│   ├── atoms/          # Basic UI components
│   ├── molecules/      # Compound components
│   ├── organisms/      # Complex components
│   └── templates/      # Layout templates
├── views/              # Page components
├── viewmodels/         # Business logic
├── models/             # Data models
├── services/           # API services
├── utils/              # Utility functions
├── hooks/              # Custom React hooks
├── types/              # TypeScript interfaces
├── assets/             # Images, icons, etc.
└── styles/             # Global styles and theme
```

## 🎨 Design System

### Color Palette
- **Primary**: Blue gradient (#0ea5e9 to #0284c7)
- **Accent**: Purple gradient (#d946ef to #c026d3)
- **Neutral**: Gray scale (#f8fafc to #0f172a)

### Typography
- **Font Family**: Inter (system fallback)
- **Headings**: Bold, tight line height
- **Body**: Regular weight, relaxed line height

### Components
- **Cards**: Elevated with hover effects
- **Buttons**: Multiple variants with smooth transitions
- **Forms**: Clean, accessible form controls

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd PortfolioLab
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📝 Customization

### Personal Information
Update your personal information in `src/models/portfolioData.ts`:

```typescript
export const portfolioData: PortfolioData = {
  personalInfo: {
    name: "Your Name",
    title: "Your Title",
    subtitle: "Your Subtitle",
    description: "Your description...",
    avatar: "/path/to/avatar.jpg",
    resumeUrl: "/path/to/resume.pdf"
  },
  // ... other data
}
```

### Skills
Add or modify skills in the skills array:

```typescript
skills: [
  {
    id: "unique-id",
    name: "Skill Name",
    category: "frontend", // frontend, backend, mobile, devops, other
    proficiency: 85, // 1-100
    icon: "icon-name"
  }
]
```

### Projects
Update your projects:

```typescript
projects: [
  {
    id: "unique-id",
    title: "Project Title",
    description: "Project description...",
    image: "/path/to/image.jpg",
    technologies: ["React", "Node.js", "MongoDB"],
    githubUrl: "https://github.com/username/repo",
    liveUrl: "https://project-demo.com",
    featured: true
  }
]
```

### Theme Customization
Modify the theme in `src/styles/theme.ts`:

```typescript
const theme = extendTheme({
  colors: {
    brand: {
      500: '#your-color',
      // ... other shades
    }
  },
  // ... other theme customizations
})
```

## 🎯 Key Components

### Header
- Navigation menu with smooth scrolling
- Dark/light mode toggle
- Download CV button
- Mobile-responsive hamburger menu

### Hero Section
- Eye-catching introduction
- Call-to-action buttons
- Social media links
- Professional avatar display

### Skills Section
- Categorized skills display
- Proficiency bars
- Category-based filtering
- Icon integration

### Projects Section
- Project cards with images
- Technology badges
- GitHub and live demo links
- Featured project highlighting

### Experience Section
- Work history timeline
- Achievement highlights
- Technology stacks used
- Education background

### Contact Section
- Functional contact form
- Contact information display
- Social media integration
- Professional presentation

## 🔧 Development

### Adding New Components

1. Create the component in the appropriate atomic design folder
2. Export it from `src/components/index.ts`
3. Import and use it in your views

### Styling Guidelines

- Use Chakra UI's built-in props for styling
- Follow the established color scheme
- Maintain consistent spacing using the theme's spacing scale
- Use the predefined component variants

### State Management

- Use React hooks for local state
- Keep business logic in viewmodels
- Maintain clean separation of concerns

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Performance

- Lazy loading for images
- Optimized bundle size with Vite
- Efficient re-renders with React 18
- Smooth animations with Framer Motion

## 🧪 Testing

```bash
# Run tests
npm run test

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage
```

## 📦 Deployment

### Vercel
1. Connect your GitHub repository
2. Vercel will automatically detect Vite
3. Deploy with zero configuration

### Netlify
1. Build the project: `npm run build`
2. Deploy the `dist` folder
3. Configure redirects for SPA routing

### GitHub Pages
1. Update `vite.config.ts` with base path
2. Build and deploy to gh-pages branch

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Chakra UI](https://chakra-ui.com/) for the amazing component library
- [React Icons](https://react-icons.github.io/react-icons/) for beautiful icons
- [Framer Motion](https://www.framer.com/motion/) for smooth animations
- [Vite](https://vitejs.dev/) for fast development experience

## 📞 Support

If you have any questions or need help customizing your portfolio, feel free to:
- Open an issue on GitHub
- Contact me through the portfolio contact form
- Check the documentation

---

**Happy coding! 🚀**
