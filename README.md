# Flow AI Website

A modern, responsive website showcasing Flow AI with a beautiful design and video embedding capabilities.

## Features

- **Modern Design**: Clean, professional layout with gradient backgrounds
- **Responsive**: Works perfectly on all devices (desktop, tablet, mobile)
- **Interactive**: Smooth animations and hover effects
- **Video Ready**: Easy video embedding for YouTube, Vimeo, or custom videos
- **Professional**: Beautiful typography and modern UI elements

## Getting Started

1. **Open the website**: Simply open `index.html` in your web browser
2. **Customize content**: Edit the HTML file to change text, colors, or layout
3. **Embed your demo video**: Use the provided JavaScript functions to embed your video

## Embedding Your Demo Video

### Option 1: YouTube Video
```javascript
// Replace YOUR_VIDEO_ID with your actual YouTube video ID
embedVideo('https://www.youtube.com/watch?v=YOUR_VIDEO_ID', 'youtube');
```

### Option 2: Vimeo Video
```javascript
// Replace YOUR_VIDEO_ID with your actual Vimeo video ID
embedVideo('https://vimeo.com/YOUR_VIDEO_ID', 'vimeo');
```

### Option 3: Custom Video
```javascript
// For any custom HTML video embed code
embedVideo('<video src="your-video.mp4" controls></video>', 'custom');
```

### Option 4: Direct HTML Replacement
You can also directly replace the video placeholder in `index.html`:

```html
<!-- Replace this section in index.html -->
<div class="video-container">
    <iframe 
        width="100%" 
        height="400" 
        src="YOUR_VIDEO_EMBED_URL" 
        frameborder="0" 
        allowfullscreen>
    </iframe>
</div>
```

## File Structure

```
FlowAIWebsite/
├── index.html          # Main website file
├── styles.css          # CSS styling and responsive design
├── script.js           # JavaScript for animations and video embedding
└── README.md           # This file
```

## Customization

### Colors
The main color scheme uses a blue-purple gradient. You can modify the colors in `styles.css`:

```css
body {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

### Fonts
The website uses Inter font from Google Fonts. You can change this in `index.html` and `styles.css`.

### Layout
The layout is fully responsive and uses CSS Grid and Flexbox for modern layouts.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Deployment

To deploy this website:

1. **Static Hosting**: Upload all files to any static hosting service (Netlify, Vercel, GitHub Pages)
2. **Web Server**: Place files in your web server's public directory
3. **Local Development**: Use a local server like `python -m http.server` or Live Server extension

## Support

For any questions or customization needs, feel free to modify the code or reach out for assistance.

---

**Flow AI** - Intelligent Flow Management
