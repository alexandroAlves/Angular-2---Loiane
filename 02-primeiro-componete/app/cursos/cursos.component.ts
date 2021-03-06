import { Component } from '@angular/core';

import { CursosService } from './cursos.service';

@Component({
    moduleId: module.id,
    selector: 'cursos-lista',
    /*template: `
        <h3>Cursos {{ nomePortal }}</h3>
        <ul>
            <li *ngFor="let curso of cursos">
                {{ curso }}
            </li>
        </ul>
    `,*/
    templateUrl: 'cursos.component.html',
    providers: [CursosService]

})
export class CursosComponent {

    nomePortal = 'Alexandro.traning';
    url = 'http://loiane.com';
    cursos;

    constructor(cursosService: CursosService) {
        this.cursos = cursosService.getCursos();
    }

}
