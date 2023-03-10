# Link

how to use

```jsx
import { Link } from "mn-rc-router";
```

## to: string

目标地址 url。支持相对地址、绝对地址。

```jsx
<Link to="relative" />
<Link to="/absolute" />
<Link to="../back" />
```

## replace: boolean

history 历史栈的长度不会变

```jsx
<Link to="/replace" replace />
```

## ref: (node: element) => void

获取 Link 实例

```jsx
<Link ref={node => /* ... */} />
```

## state: obj

赋值给 location.state

```jsx
<Link to="/state" state={{ fromState: true }}>
```

## passProps

props 透传

```jsx
<Link 
	to="where" 
	title="title" 
	className="style" 
	onClick={click} 
/>
```
