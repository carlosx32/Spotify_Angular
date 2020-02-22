import { Component, OnInit } from '@angular/core';
import { CategoriasService } from 'src/app/service/categorias.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {  pais: any;
  cate:any[]=[];


  constructor(private servicioDeDatos: CategoriasService) { }

  ngOnInit() {
    this.servicioDeDatos.getCategorias().subscribe((data:any)=>{
      console.log(data.categories.items);
      this.cate = data.categories.items;
      
    })
  }

}
