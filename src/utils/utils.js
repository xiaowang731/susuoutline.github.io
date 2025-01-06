const createAnimation = (scrollStart, scrollEnd, startValue, endValue) => {
  return (x) => {
    if (x < scrollStart) {
      return startValue;
    }
    if (x > scrollEnd) {
      return endValue;
    }
    const progress = (x - scrollStart) / (scrollEnd - scrollStart);
    return startValue + (endValue - startValue) * progress;
  };
};

const animationMap = new Map();
// const items = document.querySelectorAll(".list-item");
// const playGroundReact = document.querySelector(".playground"); //
// const list = document.querySelector(".list");

export const updataStyles = () => {
  const scrollY = window.scrollY;
  for (const [dom, animations] of animationMap) {
    for (const prop in animations) {
      const value = animations[prop](scrollY);
      dom.style[prop] = value;
    }
  }
};

const getDomAnimation = (scrollStart, scrollEnd, dom, list) => {
  scrollStart += dom.getAttribute("data-order") * 100;

  const opacityAnimation = createAnimation(scrollStart, scrollEnd, 0, 1);
  const opacity = (x) => {
    return opacityAnimation(x);
  };
  const scaleAnimation = createAnimation(scrollStart, scrollEnd, 0.5, 1);
  const { clientWidth, clientHeight, offsetTop, offsetLeft } = dom;
  const rect = list.getBoundingClientRect();
  const XAnimation = createAnimation(
    scrollStart,
    scrollEnd,
    rect.width / 2 - clientWidth / 2 - offsetLeft,
    1
  );
  const YAnimation = createAnimation(
    scrollStart,
    scrollEnd,
    rect.height / 2 - clientHeight / 2 - offsetTop,
    1
  );
  const transform = (x) => {
    return `translate(${XAnimation(x)}px,${YAnimation(
      x
    )}px) scale(${scaleAnimation(x)}) `;
  };
  return {
    opacity,
    transform,
  };
};

export const updataMap = (playGroundReactRef, items, list) => {
  const playGroundReact = playGroundReactRef.getBoundingClientRect();
  const scrollY = window.screenY;
  const scrollStart = playGroundReact.top + scrollY - window.innerHeight;
  const scrollEnd = playGroundReact.bottom + scrollY - window.innerHeight * 1.3;

  for (const item of items) {
    animationMap.set(item, getDomAnimation(scrollStart, scrollEnd, item, list));
  }
};
