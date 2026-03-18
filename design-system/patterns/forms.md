# Form Patterns

## Input Variants

### 1. Text Input (on light bg)

```tsx
<input
  type="text"
  placeholder="ชื่อ-นามสกุล"
  className="w-full h-12 px-4 rounded-lg
    bg-white border border-black/8
    font-[IBM_Plex_Sans_Thai] text-base text-[#474747]
    placeholder:text-[#9A9A9A]
    focus:border-[#D4B978] focus:outline-none focus:ring-2 focus:ring-[#D4B978]/20
    transition-colors duration-150"
/>
```

### 2. Text Input (on dark bg)

```tsx
<input
  type="text"
  placeholder="อีเมล"
  className="w-full h-12 px-4 rounded-lg
    bg-white/5 border border-white/12
    font-[IBM_Plex_Sans_Thai] text-base text-white
    placeholder:text-white/35
    focus:border-[#D4B978] focus:outline-none focus:ring-2 focus:ring-[#D4B978]/20
    transition-colors duration-150"
/>
```

### 3. Select Dropdown

```tsx
<select className="w-full h-12 px-4 rounded-lg appearance-none
  bg-white border border-black/8
  font-[IBM_Plex_Sans_Thai] text-base text-[#474747]
  focus:border-[#D4B978] focus:outline-none focus:ring-2 focus:ring-[#D4B978]/20
  transition-colors duration-150
  bg-[url('data:image/svg+xml,...')] bg-no-repeat bg-[right_12px_center]">
  <option value="">เลือกระดับชั้น</option>
  <option value="m4">ม.4</option>
  <option value="m5">ม.5</option>
  <option value="m6">ม.6</option>
</select>
```

## Validation States

### Error

```tsx
<div>
  <input className="... border-[#950606] focus:ring-[#950606]/20" />
  <p className="mt-1.5 text-xs text-[#950606] font-[IBM_Plex_Sans_Thai]">
    กรุณากรอกชื่อ-นามสกุล
  </p>
</div>
```

### Success

```tsx
<div>
  <input className="... border-[#07592c] focus:ring-[#07592c]/20" />
  <p className="mt-1.5 text-xs text-[#07592c] font-[IBM_Plex_Sans_Thai] flex items-center gap-1">
    <CheckCircle size={12} /> ข้อมูลถูกต้อง
  </p>
</div>
```

## Shared Properties

- Height: `48px`
- Border radius: `8px`
- Font: `IBM Plex Sans Thai, 16px`
- Focus: gold border + gold ring
- Transition: `border-color 0.15s`
- Padding: `0 16px`
