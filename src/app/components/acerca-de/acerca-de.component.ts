//llamamos al servicio desde el componente
//surbscribe queda atento al algun observable, escucha...

import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  persona: persona = new persona("","","");
  constructor(public personaService: PersonaService) { } //llama al service



  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data => {this.persona=data})

  }

}
