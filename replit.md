# Trash 2 Cash (𝚃𝚛𝚊𝚜𝚑 𝟸 𝚌𝚊𝚜𝚑)

## Overview
A bilingual (Arabic/English) e-commerce web application for selling upcycled and recycled handmade products. The platform promotes sustainability by transforming waste materials into valuable crafts and decorative items.

**Project Type:** Static frontend website (HTML, CSS, JavaScript)
**Languages:** Arabic (RTL), English (LTR)

## Purpose
- Transform trash into treasure through creative upcycling
- Provide a marketplace for handmade, eco-friendly products
- Support environmental sustainability initiatives
- Contribute to community development

## Current State
The project is a fully functional static website with:
- User authentication (login/signup)
- Multi-language support (Arabic/English)
- Product catalog with shopping cart
- Help and settings pages
- Responsive design for mobile and desktop

## Project Architecture

### File Structure
```
.
├── index.html          # Main HTML file with all page templates
├── script.js           # JavaScript for app logic and interactivity
├── style.css           # CSS styling and responsive design
└── README.md          # Basic project info
```

### Key Features
1. **Authentication System**
   - Login and signup forms
   - Welcome page after authentication
   - Session management (client-side)

2. **Shopping Features**
   - Product catalog with 10 handmade items
   - Shopping cart with quantity controls
   - Checkout process with payment instructions
   - Maximum 5 items per product

3. **Multi-language Support**
   - Dynamic language switching
   - RTL (Arabic) and LTR (English) support
   - All UI elements translated

4. **Pages**
   - Shop: Product browsing and cart management
   - Help: Survey, ratings, and support links
   - Settings: User ID, QR code, password change, language toggle, logout

### Technical Details
- **Frontend Framework:** Vanilla JavaScript (no dependencies)
- **Styling:** Custom CSS with gradient backgrounds and modern UI
- **Images:** Product images reference `/images/` folder (currently using fallback placeholders)
- **State Management:** Client-side JavaScript variables
- **Payment:** Manual bank transfer to 01200206113

## Development Setup
- Served via Python HTTP server on port 5000
- Bound to 0.0.0.0 for Replit environment compatibility
- No build process required

## Recent Changes
- **2025-11-02:** Initial import from GitHub
- **2025-11-02:** Configured for Replit environment with Python HTTP server
- **2025-11-02:** Added .gitignore for Python and common development files
- **2025-11-02:** Created project documentation

## Product Catalog
The site features 10 handmade products including:
- Decorated tin cans (25 EGP)
- Wooden pen holders (30 EGP)
- Hair accessories organizers (30 EGP)
- Decorative candles (45 EGP)
- Patchwork tote bags (50 EGP)
- Embroidered crossbody bags (50 EGP)
- Decorative mason jars (40 EGP)
- Wall hanging jar lights (40 EGP)
- Giraffe wall art (60 EGP)
- Pearl whale art (60 EGP)

## External Links
- Survey: Links to Google Forms (placeholder URLs)
- Rating: https://www.jotform.com/build/253035675636563
- Support: https://www.jotform.com/build/253035646419560

## Future Enhancements
- Add actual product images to `/images/` folder
- Implement real backend for authentication
- Add database for order management
- Integrate actual payment gateway
- Add order tracking functionality
