const tooltip = document.querySelector("[data-tooltip]");

function criaTooltip() {
  const tooltipBox = criaElemento();
  onMouseLeave.tooltipBox = tooltipBox;
  onMouseLeave.elemento = this;
  onMouseMove.tooltipBox = tooltipBox;

  this.addEventListener("mouseleave", onMouseLeave);
  document.body.appendChild(tooltipBox);
  this.addEventListener("mousemove", onMouseMove);
}

const onMouseMove = {
  handleEvent({ pageY, pageX }) {
    this.tooltipBox.style.top = `${pageY + 5}px`;
    this.tooltipBox.style.left = `${pageX + 20}px`;
  },
};

const onMouseLeave = {
  handleEvent() {
    this.tooltipBox.remove();
    this.elemento.removeEventListener("mouseleave", onMouseLeave);
    this.elemento.removeEventListener("mousemove", onMouseMove);
  },
};

tooltip.addEventListener("mouseover", criaTooltip);

function criaElemento() {
  const element = document.createElement("div");
  element.classList.add("tooltip");
  return element;
}
