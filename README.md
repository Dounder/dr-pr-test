# DR-product-card

Paquete de prueba de despliegue en npm

### Douglas Ramirez

## Ejemplo

```
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from  'dr-product-card';
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
