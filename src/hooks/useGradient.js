import { getRandomInt } from "../utils/helpers";

export const useGradient = () => {
  const gradients = [
    { "--grad-1": "#D38312", "--grad-2": "#A83279" },
    { "--grad-1": "#ee9ca7", "--grad-2": "#ffdde1" },
    { "--grad-1": "#a8c0ff", "--grad-2": "#3f2b96" },
    { "--grad-1": "#83a4d4", "--grad-2": "#b6fbff" },
    { "--grad-1": "#00F260", "--grad-2": "#0575E6" },
    { "--grad-1": "#FF5F6D", "--grad-2": "#FFC371" },
    { "--grad-1": "#fc00ff", "--grad-2": "#00dbde" },
    { "--grad-1": "#FBD3E9", "--grad-2": "#BB377D" },
    { "--grad-1": "#4CB8C4", "--grad-2": "#3CD3AD" },
  ];

  const randGradIndex = getRandomInt(0, gradients.length - 1);
  const selectedGrad = gradients[randGradIndex];

  Object.entries(selectedGrad).forEach(([index, grad]) => {
    document.documentElement.style.setProperty(index, grad);
  });
};
