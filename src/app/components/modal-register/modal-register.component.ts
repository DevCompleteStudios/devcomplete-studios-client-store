import { Component, Output, EventEmitter, signal, Input } from '@angular/core';
import { FormGroup, Validators, FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-modal-register',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './modal-register.component.html',
})
export class ModalRegisterComponent {

  protected loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email])
  });

  protected codeForm = new FormGroup({
    code: new FormControl('', [Validators.required, Validators.maxLength(6), Validators.minLength(6)]),
  })


  protected loading = signal(false);
  protected showModalCode = signal(false);
  protected codeAuth = signal<string | undefined>(undefined);

  constructor(private authService: AuthService) {}

  @Output()
  protected onClose = new EventEmitter<boolean>();

  @Input({required: true})
  succesCallabck!: any;

  close(){
    this.onClose.emit(true);
  }


  onSubmit() {
    if (this.loginForm.valid) {
      this.loading.set(true);
      const email: string = this.loginForm.controls.email.value!;

      this.authService.loginUser(email)
        .subscribe({
          next: (data) => {
            console.log(data);
            this.showModalCode.set(true);
            this.codeAuth.set(data.data.authCode!.code);
          }
        })
    }
  }

  onVerifyCode(){
    const code = this.codeForm.controls.code;

    if( code.value?.trim().length === 6 && code.value === this.codeAuth() ){
      this.authService.authenticatedCode(this.codeAuth()!)
        .subscribe({
          next: () => {
            this.close();
            this.succesCallabck();
          }
        })
    }
  }

}
