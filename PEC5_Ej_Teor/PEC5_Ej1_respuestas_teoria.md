# Ejercicio 1 – Preguntas teóricas sobre formularios Angular
## 1.  ¿Cuáles son las principales diferencias entre formularios dirigidos por template y formularios reactivos?
* En los formularios dirigidos por template se manipula el DOM directamente en el HTML, en cambio en los formularios reactivos se define el formulario en el código Typescript.
* Los formularios dirigidos por template se validan directamente e el HTML usando atributos como `required`, `minLength`, etc. En los formularios reactivos las validaciones se hacen mediante el código.
* Los formularios dirigidos por template utilizan [(ngModel)] para realizar el two-way-data-binding, en cambio los reactive forms no lo utilizan.
* Los formularios dirigidos por template están pensados para formularios simples, sin embargo los formularios reactivos pueden ser más complejos y dinámicos.

## 2. ¿Qué son, para qué sirven y cómo se utilizan las directivas ngModel y ngModelChange?
* **ngModel**: Se utiliza para establecer el two-way data binding entre un control de formulario y una propiedad del modelo en el componente. Permite sincronizar automáticamente el valor del control de formulario con la propiedad del modelo en el componente y viceversa.

* **ngModelChange**: Se utiliza para capturar eventos de cambio en un control de formulario asociado a `ngModel`. Permite ejecutar una función en el componente cuando el valor del control de formulario cambia.

## 3. ¿Qué son, cuáles son y para qué sirven los estados en los formularios dirigidos por templates?
Los formularios dirigidos por templates tienen estados que reflejan el estado de un formulario. Son fundamentales para la manipulación y validación de los formularios. Los principales estados son:
* **`pristine`**: se utiliza para saber si el usuario ha interactuado con el formulario.
* **`dirty`**: el formulario está en estado `dirty` si ha sido tocado o modificado. Puede utilizarse para habilitar o deshabilitar ciertas funcionalidades basadas en si el usuario ha interactuado con el formulario.
* **`untouched`**: el formulario está en este estado cuando el usuario no ha interactuado con él. 
* **`touched`**: se utiliza para saber si el usuario ha tocado el formulario.
* **`valid`**: un formulario está en estado `valid` si cumple con todas las validaciones.
* **`invalid`**: un formulario está en estado `invalid` cuando no cumple con alguna de las validaciones.
* **`submitted`**: el formulario está en este estado si ha sido enviado.

## 4. ¿Qué ventajas aportan los FormGroup en la composición de formularios?
Permite agrupar controles relacionados en una estructura lógica, se pueden aplicar las validaciones a nivel de grupo en lugar de hacerlo individualmente, facilita la construcción dinámica de formularios, proporciona observables que permiten reaccionar a cambios en los controles y tiene su propio estado, que refleja el estado de todos los controles dentro del grupo.

