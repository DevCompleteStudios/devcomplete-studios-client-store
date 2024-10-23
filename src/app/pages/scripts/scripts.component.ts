import { Component, OnInit, signal } from '@angular/core';
import { IScriptDto } from './interface/IScriptDto';
import { ScriptsHttpService } from '../../services/scripts-http.service';
import { AuthService } from '../../services/auth.service';
import { ModalRegisterComponent } from "../../components/modal-register/modal-register.component";

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

  scripts?: IScriptDto[];
  showModalLogin = signal(false);

  constructor(
    private scriptsService: ScriptsHttpService,
    private authService: AuthService,
  ){}


  onBuy(id: string | number){
    if( !this.authService.getIsLogged ) return this.showModalLogin.set(true);
  }

  onCloseModal(value: boolean){
    this.showModalLogin.set(!value);
  }


}
