const rotateArrow = (button) => {
  button.classList.toggle("bg-[#0F0000]");

  const path = button.querySelector("path");
  // Toggle the stroke color between white and another color
  if (path.getAttribute("stroke") === "black") {
    path.setAttribute("stroke", "white"); // Change 'red' to the desired color
  } else {
    path.setAttribute("stroke", "black");
  }

  const svg = button.querySelector("svg");
  svg.classList.toggle("rotate-90");
};

const activeNav = (button) => {
  const a = Object.values(button.classList);
  console.log(a.includes("activeNav"))
  if(a.includes("activeNav")){
    button.classList.remove("activeNav")
  }else{
    button.classList.add("activeNav")
  }
};
