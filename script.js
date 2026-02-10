(function () {
  const currentYear = new Date().getFullYear();
  document.title = `AlexFred · ${currentYear}`;

  const navLinks = document.querySelectorAll('.top-nav a[href^="#"]');
  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const targetId = link.getAttribute("href");
      const target = targetId ? document.querySelector(targetId) : null;
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  const publicationItems = Array.from(document.querySelectorAll(".publication-item"));
  const togglePublicationsButton = document.getElementById("toggle-publications");
  let showAllPublications = false;

  const renderPublications = () => {
    publicationItems.forEach((item, index) => {
      item.classList.toggle("hidden", !showAllPublications && index >= 3);
    });

    if (togglePublicationsButton) {
      togglePublicationsButton.textContent = showAllPublications ? "Show selected" : "Show all";
      togglePublicationsButton.setAttribute("aria-expanded", String(showAllPublications));
    }
  };

  if (togglePublicationsButton) {
    togglePublicationsButton.addEventListener("click", () => {
      showAllPublications = !showAllPublications;
      renderPublications();
    });
  }

  renderPublications();

  const copyEmailButton = document.getElementById("copy-email");
  const emailLink = document.getElementById("email-link");

  if (copyEmailButton && emailLink) {
    copyEmailButton.addEventListener("click", async () => {
      const email = emailLink.textContent?.trim() || "";
      if (!email) {
        return;
      }

      try {
        await navigator.clipboard.writeText(email);
        copyEmailButton.textContent = "Copied";
        setTimeout(() => {
          copyEmailButton.textContent = "Copy email";
        }, 1200);
      } catch {
        copyEmailButton.textContent = "Copy unavailable";
      }
    });
  }
})();
