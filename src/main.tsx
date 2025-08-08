import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Disable pinch and double-tap zoom on mobile (especially iOS Safari)
if (typeof window !== 'undefined') {
  const prevent = (e: Event) => e.preventDefault()
  // iOS Safari pinch-zoom gestures
  document.addEventListener('gesturestart', prevent as EventListener, { passive: false })
  document.addEventListener('gesturechange', prevent as EventListener, { passive: false })
  document.addEventListener('gestureend', prevent as EventListener, { passive: false })
  // Double-tap zoom
  let lastTouchEnd = 0
  document.addEventListener(
    'touchend',
    (e) => {
      const now = Date.now()
      if (now - lastTouchEnd <= 300) {
        e.preventDefault()
      }
      lastTouchEnd = now
    },
    { passive: false }
  )
}

createRoot(document.getElementById("root")!).render(<App />);
