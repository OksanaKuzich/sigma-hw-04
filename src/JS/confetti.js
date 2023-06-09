let colors = ['#bb0000', '#ffffff'];

export default function frame(end) {
  confetti({
    particleCount: 2,
    angle: 60,
    spread: 55,
    origin: { x: 0, y: 1 },
    colors: colors,
  });
  confetti({
    particleCount: 2,
    angle: 120,
    spread: 55,
    origin: { x: 1, y: 1 },
    colors: colors,
  });

  if (Date.now() < end) {
    requestAnimationFrame(() => frame(end));
  }
}
