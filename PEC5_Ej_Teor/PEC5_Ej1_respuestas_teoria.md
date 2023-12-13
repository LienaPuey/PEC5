# Ejercicio 1 – Preguntas teóricas sobre formularios Angular
1. ## ¿Cuáles son las principales diferencias entre formularios dirigidos por template y formularios reactivos?
* En los formularios dirigidos por template se manipula el DOM directamente en el HTML, en cambio en los formularios reactivos se define el formulario en el código Typescript.
* Los formularios dirigidos por template se validan directamente e el HTML usando atributos como `required`, `minLength`, etc. En los formularios reactivos las validaciones se hacen mediante el código.
* Los formularios dirigidos por template utilizan [(ngModel)] para realizar el two-way-data-binding, en cambio los reactive forms no lo utilizan.
* Los formularios dirigidos por template están pensados para formularios simples, sin embargo los formularios reactivos pueden ser más complejos y dinámicos.

2. ## ¿Qué son, para qué sirven y cómo se utilizan las directivas ngModel y ngModelChange?
* **ngModel**: Se utiliza para establecer el two-way data binding entre un control de formulario y una propiedad del modelo en el componente. Permite sincronizar automáticamente el valor del control de formulario con la propiedad del modelo en el componente y viceversa.

* **ngModelChange**: Se utiliza para capturar eventos de cambio en un control de formulario asociado a `ngModel`. Permite ejecutar una función en el componente cuando el valor del control de formulario cambia.

3. ## ¿Qué son, cuáles son y para qué sirven los estados en los formularios dirigidos por templates?
