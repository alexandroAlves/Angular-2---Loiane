import { Component } from '@angular/core';

import { InputPropertyComponent } from './input-property.component';
import { OutputPropertyComponent } from './output-property.component';

@Component({
    moduleId: module.id,
    selector: 'exemplo-data-binding',
    templateUrl: 'data-binding.component.html',
    styleUrls: ['data-binding.component.css'],
    directives: [InputPropertyComponent, OutputPropertyComponent],

})
export class DataBindingComponent {
    constructor() { }

    url = 'http://loiane.com';
    urlImg = 'http://lorempixel.com/400/200/cats/';

    conteudoAtual: string = '';
    conteudoSalvo: string = '';

    isMouseOver: boolean = false;

    nome: string = 'abc';

    pessoa: Object = { nome: '', idade: 18 };

    nomeCurso: String = 'Curso Angular 2';

    valorInicial: number = 10;

    getValor() {
        return 1;
    }

    onClick() {
        alert('Botão clicado!');
    }

    onKeyup(event: KeyboardEvent) {
        console.log(event);
        this.conteudoAtual = (<HTMLInputElement>event.target).value;
    }

    onSave(valor: string) {
        this.conteudoSalvo = valor;
    }

    onMouseSpan() {
        this.isMouseOver = !this.isMouseOver;
    }

    onValorMudou(event) {
        alert(event.novoValor);
    }

}
