const accordionHeaders = document.querySelectorAll(".accordion-header");
const accordionContents = document.querySelectorAll(".accordion-content");

accordionHeaders.forEach((header) => {
  header.addEventListener("click", () => {
    const accordionItem = header.parentElement;
    console.log(accordionItem);
    const accordionContent = accordionItem.querySelector(".accordion-content");
    

    // Close all other accordions
    accordionContents.forEach((content) => {
      console.log("closed", content);
      if (content !== accordionContent) {
        content.classList.remove("active");
        content.style.maxHeight = 0;
      }
    });

    // Toggle the clicked accordion
    accordionContent.classList.toggle("active");

    if (accordionContent.classList.contains("active")) {
      accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
    } else {
      accordionContent.style.maxHeight = 0;
    }
  });
});
