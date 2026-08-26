import React, { useEffect, useState } from 'react';

export const MagicCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPosition, setTrailingPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only run on non-touch devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (target) {
        const isInteractive = Boolean(
          target.closest('a, button, input, select, textarea, [role="button"], .cursor-pointer')
        );
        setIsHovered(isInteractive);
      }
    };

    const onMouseDown = () => setIsClicked(true);
    const onMouseUp = () => setIsClicked(false);
    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [isVisible]);

  useEffect(() => {
    let animationFrameId: number;

    const followMouse = () => {
      setTrailingPosition((prev) => {
        const dx = position.x - prev.x;
        const dy = position.y - prev.y;
        return {
          x: prev.x + dx * 0.18,
          y: prev.y + dy * 0.18,
        };
      });
      animationFrameId = requestAnimationFrame(followMouse);
    };

    animationFrameId = requestAnimationFrame(followMouse);
    return () => cancelAnimationFrame(animationFrameId);
  }, [position]);

  if (!isVisible) return null;

  return (
    <>
      {/* Central Cursor Dot */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-9999 -translate-x-1/2 -translate-y-1/2 rounded-full transition-transform duration-75"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) scale(${isClicked ? 0.7 : 1})`,
          width: isHovered ? '8px' : '6px',
          height: isHovered ? '8px' : '6px',
          backgroundColor: '#ea580c',
        }}
      />

      {/* Trailing Outer Ring (Magic Cursor Ball) */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-9998 -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-300 ease-out"
        style={{
          transform: `translate3d(${trailingPosition.x}px, ${trailingPosition.y}px, 0) scale(${
            isHovered ? 1.8 : isClicked ? 0.8 : 1
          })`,
          width: '34px',
          height: '34px',
          border: isHovered ? '1.5px solid #ea580c' : '1.5px solid rgba(15, 23, 42, 0.35)',
          backgroundColor: isHovered ? 'rgba(234, 88, 12, 0.08)' : 'transparent',
          backdropFilter: isHovered ? 'blur(1px)' : 'none',
        }}
      />
    </>
  );
};
