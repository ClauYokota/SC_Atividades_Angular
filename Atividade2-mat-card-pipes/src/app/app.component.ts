import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})

export class AppComponent {
  title = 'Funkos';

  produtos = [
    {
      nome:'Eevee',
      descricao:'Funko Pop Pokemon Eevee',
      preco: 60,
      proprietarioDoPost:'Vendedor FUNKO',
      foto:'https://images.kabum.com.br/produtos/fotos/sync_mirakl/162352/Funko-Pop-Pokemon-Eevee-577_1632828205_gg.jpg',
      dataDeCriacao:new Date()
    },
    {
      nome:'Vaporeon',
      descricao:'Funko Pop Pokemon Vaporeon',
      preco: 60,
      proprietarioDoPost:'Vendedor FUNKO',
      foto:'https://storage.geralgeek.com.br/images/venda/Funko-Pop-Vaporeon-60648df89ef21.jpg',
      dataDeCriacao:new Date() 
    },
    {
      nome:'Jolteon',
      descricao:'Funko Pop Pokemon Jolteon',
      preco: 60,
      proprietarioDoPost:'Vendedor FUNKO',
      foto:'https://images.kabum.com.br/produtos/fotos/sync_mirakl/324841/Funko-Pok-mon-Jolteon-628_1648607651_gg.jpg',
      dataDeCriacao:new Date() 
    },
    {
      nome:'Flareon',
      descricao:'Funko Pop Pokemon Flareon',
      preco: 60,
      proprietarioDoPost:'Vendedor FUNKO',
      foto:'https://images.kabum.com.br/produtos/fotos/sync_mirakl/267548/Pop-Funko-Flareon-629-Pok-mon_1651854388_gg.jpg',
      dataDeCriacao:new Date() 
    }
  ]
}
