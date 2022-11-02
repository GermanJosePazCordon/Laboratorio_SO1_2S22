import { Component, OnInit } from '@angular/core';
import { DashboardService } from './services/dashboard.service';
import { Table } from './models/table'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{

  visibleTable = false;
  visibleCreate = false;
  visibleUpdate = false;
  updateIndex = 0;

  table : Table = {
    placa : '',
    marca : '',
    modelo : '',
    serie : '',
    color : ''
  }

  rows : Table[] = []

  constructor(private dashService : DashboardService){ }

  ngOnInit() {
      
  }

  create(placa : any, marca : any, modelo : any, serie : any, color : any,){
    //document.getElementById('#placaCre').v = ''
    let js = {
      'placa' : placa.value,
      'marca' : marca.value,
      'modelo' : modelo.value,
      'serie' : serie.value,
      'color' : color.value
    }
    placa.value = ''
    marca.value = ''
    modelo.value = ''
    serie.value = ''
    color.value = ''
    this.dashService.create(js).subscribe(res =>{
      console.log(res)
    });
  }

  read(){
    this.showTable()
    this.dashService.read().subscribe((res:any) =>{
      console.log(res)
      this.rows = []
      for(let row of res){
        this.table = JSON.parse(JSON.stringify(row))
        this.rows.push(this.table)
      }
    })
  }

  update(marca : any, modelo : any, serie : any, color : any,){
    //document.getElementById('#placaCre').v = ''
    if (marca.value == '') {
      marca.value = 'NoChange'
    }
    if (modelo.value == '') {
      modelo.value = 'NoChange'
    }
    if (serie.value == '') {
      serie.value = 'NoChange'
    }
    if (color.value == '') {
      color.value = 'NoChange'
    }
    let values = []
    let js1 = {
      'type' : 'marca',
      'value' : marca.value
    }
    values.push(js1)
    let js2 = {
      'type' : 'modelo',
      'value' : modelo.value
    }
    values.push(js2)
    let js3 = {
      'type' : 'serie',
      'value' : serie.value
    }
    values.push(js3)
    let js4 = {
      'type' : 'color',
      'value' : color.value
    }
    values.push(js4)
    let js = {
      'placa' : this.rows[this.updateIndex].placa,
      'value' : values
    }
    marca.value = ''
    modelo.value = ''
    serie.value = ''
    color.value = ''
    this.dashService.update(js).subscribe(res =>{
      console.log(res)
    });
  }

  delete(index : any){
    let js = {
      'placa' : this.rows[index].placa
    }
    this.dashService.delete(js).subscribe(res =>{
      console.log(res)
    });
  }

  filter(placa : any, marca : any, modelo : any, serie : any, color : any, data : any){
    let type = 'color'
    let value = data.value
    if(marca.checked){
      type = 'marca'
    }else if(modelo.checked){
      type = 'modelo'
    }else if(serie.checked){
      type = 'serie'
    }else if(placa.checked){
      type = 'placa'
    }
    let js = {
      'type' : type,
      'value' : value
    }
    data.value = ''
    this.dashService.filter(js).subscribe((res:any) =>{
      this.rows = []
      for(let row of res){
        this.table = JSON.parse(JSON.stringify(row))
        this.rows.push(this.table)
      }
    });
  }

  allFalse(){
    this.visibleCreate = false;
    this.visibleTable = false;
    this.visibleUpdate = false;
  }

  showTable(){
    this.allFalse()
    this.visibleTable = true;
  }

  showCreate(){
    this.allFalse()
    this.visibleCreate = true;
  }

  showUpdate(index : any){
    this.updateIndex = index;
    this.allFalse()
    this.visibleUpdate = true;
  }
}
