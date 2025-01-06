export function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}
export const scrollToTop = (event) => {
    event.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};