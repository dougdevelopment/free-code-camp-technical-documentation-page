

const sections = [
    document.querySelector(".Section_1"),
    document.querySelector(".Section_2"),
    document.querySelector(".Section_3"),
    document.querySelector(".Section_4"),
    document.querySelector(".Section_5")
  ];
  
  const navItems = {
    Section_1: document.querySelector(".nav-1"),
    Section_2: document.querySelector(".nav-2"),
    Section_3: document.querySelector(".nav-3"),
    Section_4: document.querySelector(".nav-4"),
    Section_5: document.querySelector(".nav-5")
  };
  
  // intersection observer setup
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5
  };
  
  
  function observerCallback(entries, observer) {
    entries.forEach((entry) => {
      console.log(entry.isIntersecting)
      if (entry.isIntersecting) {
        // get the nav item corresponding to the id of the section
        // that is currently in view
        const navItem = navItems[entry.target.id];
        // add 'active' class on the navItem
        navItem.classList.add('active');
        // remove 'active' class from any navItem that is not
        // same as 'navItem' defined above
        Object.values(navItems).forEach((item) => {
          if (item != navItem) {
            item.classList.remove('active');
          }
        });
      }
    });
  }
  
  const observer = new IntersectionObserver(observerCallback, observerOptions);
  
  sections.forEach((sec) => observer.observe(sec));