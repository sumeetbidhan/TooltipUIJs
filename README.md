# Tooltip Navigation Project

## Overview
This project demonstrates how to create a dynamic tooltip system for navigation items using HTML, CSS, and JavaScript. The tooltips appear above navigation items when hovered, providing additional information dynamically. This implementation emphasizes CSS positioning, JavaScript event handling, and smooth animations.

## Features
- Dynamic tooltip generation based on `data-tooltip` attributes.
- Smooth animations for tooltip appearance and disappearance.
- Fully responsive and interactive design.
- Tooltips are dynamically removed and re-added on every hover, ensuring a seamless user experience.

## Technology Stack
- **HTML**: Structure of the navigation and tooltip.
- **CSS**: Styling and animations for tooltips and navigation.
- **JavaScript**: Event listeners for hover functionality and dynamic tooltip handling.

## Installation
1. Clone the repository:
   ```bash
   git clonehttps://github.com/sumeetbidhan/TooltipUIJs
   ```
2. Navigate to the project folder:
   ```bash
   cd tooltip-navigation
   ```
3. Open `index.html` in your browser to view the project.

## Code Highlights
### HTML
The navigation structure:
```html
<nav>
  <ul>
    <li class="nav-item" data-tooltip="Home">Home</li>
    <li class="nav-item" data-tooltip="About">About</li>
    <li class="nav-item" data-tooltip="Contact">Contact</li>
  </ul>
</nav>
```

### CSS
Styling for the tooltips and animations:
```css
.nav-item {
  position: relative;
  display: inline-block;
  margin: 10px;
  cursor: pointer;
}

.tooltip {
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%) translateY(0);
  background: rgba(0, 0, 0, 0.8);
  color: #fff;
  padding: 5px 10px;
  border-radius: 5px;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease, transform 0.3s ease;
}
```

### JavaScript
Event listeners for dynamic tooltip handling:
```javascript
document.addEventListener("DOMContentLoaded", () => {
  const navItems = document.querySelectorAll(".nav-item");

  navItems.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      const tooltipText = item.getAttribute("data-tooltip");
      const tooltip = document.createElement("div");
      tooltip.classList.add("tooltip");
      tooltip.textContent = tooltipText;
      item.appendChild(tooltip);
      setTimeout(() => {
        tooltip.style.opacity = "1";
        tooltip.style.transform = "translateX(-50%) translateY(-5px)";
      }, 0);
    });

    item.addEventListener("mouseleave", () => {
      const tooltip = item.querySelector(".tooltip");
      if (tooltip) {
        tooltip.style.opacity = "0";
        tooltip.style.transform = "translateX(-50%) translateY(0)";
        tooltip.addEventListener("transitionend", () => {
          tooltip.remove();
        });
      }
    });
  });
});
```

## Usage
1. Open `index.html` in any modern browser.
2. Hover over any navigation item to see the tooltip.
3. The tooltip dynamically displays the text specified in the `data-tooltip` attribute.

## Customization
- **Tooltip Content**: Modify the `data-tooltip` attribute in the HTML to change the tooltip text.
- **Styles**: Adjust the `.tooltip` class in CSS for different colors, animations, or sizes.
- **JavaScript Logic**: Enhance the `mouseenter` and `mouseleave` event listeners for advanced features like API-based tooltip content.

## Demo
[Live Demo](#) (Replace `#` with your live project URL once hosted)

## Roadmap
This project aligns with the [roadmap.sh Tooltip UI project](https://roadmap.sh/projects/tooltip-ui). Future enhancements could include:
- Support for mobile touch events.
- Advanced animations like fade-in/out, slide, or scale effects.
- Accessibility improvements (e.g., keyboard navigation support).

## License
This project is licensed under the MIT License. You are free to use, modify, and distribute this project as per the license terms.

---
Feel free to reach out for feedback or questions!

