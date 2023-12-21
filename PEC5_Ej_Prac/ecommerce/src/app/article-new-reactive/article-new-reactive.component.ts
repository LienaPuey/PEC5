import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { NameArticleValidator } from '../name-article-validator';
@Component({
  selector: 'app-article-new-reactive',
  templateUrl: './article-new-reactive.component.html',
  styleUrls: ['./article-new-reactive.component.css']
})
export class ArticleNewReactiveComponent {
  articleForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder){
    this.createform();
  }

  createform(){
    this.articleForm = this.fb.group({
      name: ["", [Validators.required, NameArticleValidator.test]],
      price:[0, [Validators.required, Validators.pattern(/^-?\d*(\.\d+)?$/), Validators.min(0.1)]],
      url: ["", [Validators.required, Validators.pattern(/(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/)]],
      sale: [false]
    });
  }

  submitForm(){
    if(this.articleForm.valid){
      let formData = this.articleForm.value;
      console.log("Datos del formulario: ", formData);
      this.articleForm.reset();
    }
  }
}
