import { useEffect, useRef } from 'react';

/**
 * 스크롤 영역 끝에 둘 감시용 ref를 돌려준다.
 * 그 요소가 영역 안에 들어오면 onReachEnd를 호출한다.
 */
export const useReachEnd = (onReachEnd?: () => void) => {
  const sentinelRef = useRef<HTMLDivElement>(null);
  const callbackRef = useRef(onReachEnd);
  callbackRef.current = onReachEnd;

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel || !onReachEnd) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) callbackRef.current?.();
      },
      { root: sentinel.parentElement }
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [!onReachEnd]);

  return sentinelRef;
};
