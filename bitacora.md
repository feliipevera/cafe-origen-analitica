# bitacora cafe origen dia 1 punto 5 dicionario

| Propiedad | Tipo | Significado |

* id | number | Identificador único de la venta 
* fecha | string | Fecha de la venta (es texto, no objeto esta entre"") 
* cliente | string | Código del cliente (C01, C02...). Un mismo cliente puede aparecer en varias ventas 
* producto | string | Nombre del producto vendido 
* ciudad | string | Ciudad donde se hizo la venta 
* cantidad | number | Unidades vendidas en esa venta 
* precio | number | Precio en pesos colombianos

# Casos borde detectados 3 problemas de calidad

1. **Ciudad con mayúsculas inconsistentes** (id 5: "medellín" vs "Medellín").
   Si agrupo por ciudad, se contaría como dos ciudades distintas.
   **Decisión:** normalizar la ciudad (primera letra en mayúscula) antes de agrupar.

2. **Cantidad igual a 0** (id 8).
   Una venta de 0 unidades no genera ingreso y podría distorsionar promedios y conteos.
   **Decisión:** excluir los registros con cantidad 0 de los cálculos de ventas.

3. **Clientes repetidos** (C01 aparece 3 veces; C02 y C03, 2 veces).
   Contar registros no es lo mismo que contar clientes.
   **Decisión:** para "número de clientes" contaré códigos únicos, no filas.
