const setMaxHeight = (el) =>
  el.style.setProperty("height", `${window.innerHeight}px`);

const directive100vh = {
  inserted: (el) => {
    setMaxHeight(el);
  },
  bind: (el) => {
    window.addEventListener("resize", () => setMaxHeight(el));
  },
};

export default directive100vh;
