# dr-pr-test

Paquete de prueba de despliegue en npm

### Douglas Ramirez

## Ejemplo

```
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from  'dr-pr-test';
```

```
<ProductCard
	product={product}
	initialValues={{
		count: 4,
		maxCount: 10,
	}}
>
	{({ reset, increaseBy, count, isMaxCountReached }) => (
		<>
			<ProductImage />
			<ProductTitle />
			<ProductButtons />
		</>
	)}
</ProductCard>
```
