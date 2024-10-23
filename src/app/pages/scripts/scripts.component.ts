import { Component, OnInit } from '@angular/core';
import { IScriptDto } from './interface/IScriptDto';
import { ScriptsHttpService } from '../../services/scripts-http.service';

@Component({
  selector: 'app-scripts',
  standalone: true,
  imports: [],
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


  constructor(
    private scriptsService: ScriptsHttpService,
  ){}

}
