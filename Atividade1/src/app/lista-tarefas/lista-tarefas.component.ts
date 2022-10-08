import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-tarefas',
  templateUrl: './lista-tarefas.component.html',
  styleUrls: ['./lista-tarefas.component.css']
})
export class ListaTarefasComponent implements OnInit {

  lista:any[]=[]

  constructor() { }

  ngOnInit(): void {
  }

  add(tarefa:string):void{
    this.lista.push({id:this.lista.length,frase:tarefa})
    console.log(this.lista)
  }

  deletar(id:number){
    this.lista = this.lista.filter(tarefa =>tarefa.id !== id)
  }

  deleteAll(){
    this.lista = this.lista.filter(tarefa => tarefa.id == -1)
  }


}
