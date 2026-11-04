/* Lumen Edge — minimal interactivity for segmented controls.
   The system's visual language does the rest. */

document.querySelectorAll(".segmented").forEach((group) => {
  const segments = group.querySelectorAll(".seg");

  segments.forEach((seg) => {
    seg.addEventListener("click", () => {
      segments.forEach((s) => {
        s.classList.remove("is-active");
        if (s.hasAttribute("aria-selected")) s.setAttribute("aria-selected", "false");
      });
      seg.classList.add("is-active");
      if (seg.hasAttribute("aria-selected")) seg.setAttribute("aria-selected", "true");
    });
  });
});
