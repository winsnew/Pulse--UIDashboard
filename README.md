# Pulse - AI-Powered Monitoring Dashboard

<img src="/public/logo.png" width="300px" alt="Pulse Now Banner">

Pulse is a sophisticated, real-time monitoring dashboard for cryptocurrency and stock markets. It leverages AI-powered insights to provide traders and investors with a comprehensive overview of market trends, asset performance, and key influencer activity. The UI is built with a focus on a modern, sleek, and intuitive user experience, featuring a dark theme with glassmorphism effects and fluid animations.

![Next.js](https://img.shields.io/badge/Next.js-13.5.4-000000?style=flat&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.2.2-3178C6?style=flat&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3.3-06B6D4?style=flat&logo=tailwind-css)


## ✨ Key Features

- Real-time cryptocurrency market tracking
- AI-powered influencer sentiment analysis
- Multi-exchange asset price radar
- Automated smart alert system
- Predictive market trend visualization

## 🚀 Tech Stack

-   **Framework**: [Next.js](https://nextjs.org/) (with App Router)
-   **Language**: [TypeScript](https://www.typescriptlang.org/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **Charting**: [Recharts](https://recharts.org/) for data visualization.
-   **Animations**: Custom CSS animations, `tailwindcss-animate`, `embla-carousel-react` (for carousels).

## 📂 Project Structure

The repository is organized to separate concerns, making it easy to navigate and maintain.

```
.
├── app/                  # Next.js App Router, pages, layout, and global styles
│   ├── globals.css       # Global and custom CSS, animations, and theme variables
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Main dashboard page
├── components/           # Reusable React components
│   ├── Sidebar.tsx       # Collapsible side navigation bar
│   ├── TopBar.tsx        # Top header with search and user actions
│   ├── ui/               # Core shadcn/ui components (Button, Card, etc.)
│   └── widgets/          # High-level dashboard widgets
│       ├── AssetRadar.tsx
│       ├── InfluencerIntel.tsx
│       ├── MarketViewAI.tsx
│       ├── NewsPulse.tsx
│       └── SmartAlerts.tsx
├── lib/                  # Utility functions (e.g., cn for classnames)
├── public/               # Static assets (images, logos)
├── next.config.js        # Next.js configuration
└── tailwind.config.ts    # Tailwind CSS configuration
```

## 🛠️ Getting Started

To run this project locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/tejinderb/pulse---ui-design.git
    cd pulse---ui-design
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

The application will be available at `http://localhost:3000`.

### Available Scripts

-   `npm run dev`: Starts the development server.
-   `npm run build`: Creates a production-ready build of the application. The output is configured for static export.
-   `npm run start`: Starts the application from the production build (Note: requires a server, as this project uses 'output': 'export').
