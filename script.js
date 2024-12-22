document.addEventListener("DOMContentLoaded", () => {
  const navItems = document.querySelectorAll(".nav-item");

  navItems.forEach((item) => {
    const tooltipText = item.getAttribute("data-tooltip");

    item.addEventListener("mouseenter", () => {
      // Create tooltip element
      const tooltip = document.createElement("div");
      tooltip.classList.add("tooltip");
      tooltip.textContent = tooltipText;

      // Append tooltip to the item
      item.appendChild(tooltip);

      // Trigger animation
      setTimeout(() => {
        tooltip.style.opacity = "1";
        tooltip.style.transform = "translateX(-50%) translateY(-5px)";
      }, 0);
    });

    item.addEventListener("mouseleave", () => {
      // Remove tooltip on mouse leave
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
