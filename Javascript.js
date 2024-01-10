// Select all navbar links
const navbarLinks = document.querySelectorAll('.navbar-link');

// Function to check if an element is in a dark section
function isInDarkSection(element) {
  const darkSection = document.querySelector('.dark-section');
  const darkSectionRect = darkSection.getBoundingClientRect();
  const elementRect = element.getBoundingClientRect();

  // Check if the element's bottom is below the dark section's top
  // and the element's top is above the dark section's bottom
  return (
    elementRect.top < darkSectionRect.bottom &&
    elementRect.bottom > darkSectionRect.top
  );
}

// Function to update the color of navbar links based on dark section visibility
function updateNavbarLinksColor() {
  navbarLinks.forEach(link => {
    if (isInDarkSection(link)) {
      link.style.color = 'white'; // Change color to white
    } else {
      link.style.color = 'black'; // Change color back to black
    }
  });
}

// Event listener to check for color change when scrolling or resizing
document.addEventListener('scroll', updateNavbarLinksColor);
document.addEventListener('resize', updateNavbarLinksColor);

