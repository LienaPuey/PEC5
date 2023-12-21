# Ejercicio 4 - Preguntas teóricas sobre formularios reactivos Angular 

## 1. ¿Qué son, para qué sirven y cómo se utilizan FormControl, FormGroup y FormBuilder?
Son clases proporcionadas por Angular para trabajar con formularios en aplicaciones web. 
* **FormControl**: Representa un solo campo del formulario, se utiliza para saber el valor y el estado de un control individual del formulario.

* **FormGroup**: Es un grupo de controles relacionados. Puede estar compuesto de varios `FormControl`, se utiliza para saber el valor y el estado de varios controles relacionados.

* **FormBuilder**: Es un servicio que simplifica la creación de instancias `FormControl` y `FormGroup`. Facilita la creación y configuración de formularios reactivos.

## 2. Busca en la página oficial de Angular (o utiliza un recurso de O’Reilly) en el que se especifiquen todos los validadores que incluye Angular para ser utilizados en los formularios reactivos. Construye una tabla de resumen de estos.
| Validador               | Descripción                                             |
|-------------------------|---------------------------------------------------------|
| `required`   | Asegura que el campo tenga un valor.                    |
| `minLength`   | Verifica que la longitud del valor sea igual o mayor que un valor específico. |
| `maxLength`   | Verifica que la longitud del valor sea igual o menor que un valor específico. |
| `pattern`     | Comprueba si el valor coincide con una expresión regular. |
| `email`       | Verifica que el valor sea una dirección de correo electrónico válida. |
| `min`         | Verifica que el valor numérico sea igual o mayor que un valor específico. |
| `max`         | Verifica que el valor numérico sea igual o menor que un valor específico. |
| `nullValidator`| Un validador nulo que siempre devuelve nulo.            |
| `compose`     | Combina varios validadores en uno solo.                 |
| `composeAsync`| Combina varios validadores asincrónicos en uno solo.    |

## 3. ¿Qué son, cuáles son y para qué sirven los estados en los formularios reactivos?
| Estado               | Descripción                                             |
|-------------------------|---------------------------------------------------------|
| `pristine`   |  Se utiliza para determinar si el usuario ha interactuado con un control o si su valor ha sido modificado.                    |
| `dirty`   | Se utiliza para saber si el usuario ha modificado el valor del control. |
| `untouched`   | Se utiliza para determinar si el usuario ha interactuado con el control o no. |
| `valid`     | Se utiliza para validar si el valor del control cumple las reglas definidas. |
| `invalid`       | Se utiliza para identificar si el valor actual del control no cumple alguna de las reglas definidas. |
| `pending`       | Se utiliza en situaciones donde la validación depende de operaciones asíncronas. |
| `disabled`       | Puede utilizarse para deshabilitar un control de formulario basado en ciertas condiciones. |