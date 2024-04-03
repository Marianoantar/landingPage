import { CommonModule} from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {

  contactForm!: FormGroup;
  private formBuilder = inject(FormBuilder);
  
  private _router = inject(Router);

  
constructor(){
  this.contactForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(10)]]
  });

  
}

  ngOnInit(): void {
    
  }

  enviar(event: Event): void {
    event.preventDefault();
    console.log(this.contactForm.value);
    this._router.navigate(['/']);
  }

  
  SeeError(controlName: string, errorName: string) {
    return this.contactForm.get(controlName)?.hasError(errorName) // && this.contactForm.get(controlName)?.touched;
  }
}
