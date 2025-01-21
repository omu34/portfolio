let isPaused = false;
let lastSectionId = null;

function scrollToSection(sectionId) {
    if (isPaused) return; // Prevent further actions during the pause

    const targetSection = document.getElementById(sectionId);
    const bannerSection = document.getElementById('banner'); // Assume the banner has an ID 'banner'

    if (!targetSection || !bannerSection) {
        console.error(`Section with ID ${sectionId} or banner not found`);
        return;
    }

    // Determine the current scroll position
    const currentScroll = window.scrollY;
    const targetOffset = targetSection.offsetTop;
    const bannerOffset = bannerSection.offsetTop;

    // If the same section is clicked again, return to the banner
    if (lastSectionId === sectionId) {
        window.scrollTo({
            top: bannerOffset,
            behavior: 'smooth'
        });
        lastSectionId = null; // Reset so that next click scrolls to the section
    } else {
        // Scroll to the new section
        window.scrollTo({
            top: targetOffset,
            behavior: 'smooth'
        });
        lastSectionId = sectionId; // Save the last visited section
    }

    // Pause user interaction for 2 seconds
    isPaused = true;
    setTimeout(() => {
        isPaused = false; // Re-enable interactions after the pause
    }, 2000);
}
