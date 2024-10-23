import { Component, OnInit, signal } from '@angular/core';
import { IScriptDto } from './interface/IScriptDto';
import { ScriptsHttpService } from '../../services/scripts-http.service';
import { AuthService } from '../../services/auth.service';
import { ModalRegisterComponent } from "../../components/modal-register/modal-register.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-scripts',
  standalone: true,
  imports: [ModalRegisterComponent],
  templateUrl: './scripts.component.html',
  styleUrl: './scripts.component.css'
})
export class ScriptsComponent implements OnInit {
  ngOnInit(): void {
    this.scriptsService.findAll()
      .subscribe({
        next: (data) => {
          this.scripts = data.data;
        }
      })
  }

  protected id?: string | number;
  protected scripts?: IScriptDto[];
  protected showModalLogin = signal(false);

  constructor(
    private scriptsService: ScriptsHttpService,
    private authService: AuthService,
  ){}


  onBuy(id: string | number){
    if( !this.authService.getIsLogged ) return this.showModalLogin.set(true);
    this.id = id;
  }

  onCloseModal(value: boolean){
    this.showModalLogin.set(!value);
  }

  onSucces(){
    if( this.id ){
      //TODO: hacer la peticion para la compra.
      console.log('Haciendo la compra con el id: ' + this.id);
    }
  }


}
