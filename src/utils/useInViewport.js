import { useState, useEffect, useRef, useCallback } from "react";

function useInViewport(options = {}) {
  const { threshold = 0.5, root = null, rootMargin = "0px" } = options; // 设置 threshold 为 0.5

  const [hasAnimated, setHasAnimated] = useState(false); // 动画是否已执行
  const elementRef = useRef(null);

  const handleIntersection = useCallback(
    (entries) => {
      entries.forEach((entry) => {
        const { intersectionRatio } = entry;
        // 当 intersectionRatio 达到 0.5 以上表示进入视口并执行动画
        if (intersectionRatio >= threshold && !hasAnimated) {
          setHasAnimated(true); // 执行动画
        }

        // 当 intersectionRatio 为 0 时表示完全离开视口，重置动画
        if (intersectionRatio === 0 && hasAnimated) {
          setHasAnimated(false); // 重置动画
        }
      });
    },
    [hasAnimated, threshold] // 依赖 threshold 和 hasAnimated
  );

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: [0, threshold], // 可以设置多个 threshold，0 代表完全离开视口，threshold 代表动画执行的标准
      root, // 观察的根元素（可以是滚动容器）
      rootMargin, // 根元素的 margin 值，用来扩展/缩小视口
    });

    if (elementRef.current) {
      observer.observe(elementRef.current); // 开始观察元素
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current); // 清理观察
      }
    };
  }, [handleIntersection, threshold, root, rootMargin]); // 依赖 handleIntersection

  return { hasAnimated, elementRef };
}

export default useInViewport;
