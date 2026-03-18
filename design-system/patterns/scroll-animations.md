# Scroll Animation Patterns

Scroll animations use Intersection Observer API. No external libraries required.

## 1. Fade Up (Base Pattern)

Elements translate up 24px and fade in when entering viewport.

```tsx
// CSS class approach
const fadeUpStyles = `
  .fade-up {
    opacity: 0;
    transform: translateY(24px);
    transition: opacity 0.5s ease, transform 0.5s ease;
  }
  .fade-up.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Intersection Observer setup
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));
```

**React hook approach:**

```tsx
function useFadeUp(ref: RefObject<HTMLElement>, delay = 0) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.style.opacity = "0";
    el.style.transform = "translateY(24px)";
    el.style.transition = `opacity 0.5s ease ${delay}s, transform 0.5s ease ${delay}s`;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, delay]);
}
```

## 2. Stagger Children

Cards or list items appear one by one with incremental delay.

```tsx
// Parent container
<div className="grid grid-cols-3 gap-5">
  {items.map((item, i) => (
    <div
      key={i}
      className="fade-up"
      style={{ transitionDelay: `${i * 0.1}s` }}
    >
      <HookCard {...item} />
    </div>
  ))}
</div>
```

**Timing:** 0.1s delay per item. Max 0.5s total delay (5 items). Beyond that, group items.

## 3. Counter Animation

Numbers count up from 0 when entering viewport.

```tsx
function AnimatedCounter({ target, duration = 1500 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const start = performance.now();
          const step = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
          observer.unobserve(el);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <div ref={ref} className="font-[Cormorant_Garamond] text-[32px] font-bold text-white">
      {count}
    </div>
  );
}
```

## Animation Tokens

| Token | Value | Usage |
|-------|-------|-------|
| Duration (fade) | `0.5s` | Section elements appearing |
| Duration (counter) | `1.5s` | Number count-up |
| Easing | `ease` | Standard fade-up |
| Easing (counter) | `ease-out cubic` | Decelerating count |
| Stagger delay | `0.1s` | Per child item |
| Threshold | `0.1` | 10% visible triggers animation |
| Transform | `translateY(24px)` | Starting offset |

## Guidelines

- Trigger once only — don't re-animate when scrolling back up
- Keep total animation duration under 0.5s for fade-ups
- Stagger max 5 items (0.5s total delay) — beyond that feels slow
- Counter animation: use ease-out cubic for natural deceleration
- Never animate critical content (nav, CTAs) — they should be immediately visible
