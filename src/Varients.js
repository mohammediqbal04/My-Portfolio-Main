export const fadeIn = (direction, deploy)=> {
  return {
    hidden: {
      y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
      x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        duration: 1.2,
        type: 'tween',
        delay: deploy,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };  
}