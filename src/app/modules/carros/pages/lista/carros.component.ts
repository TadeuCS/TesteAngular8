import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { ICarro } from '../../models/icarro.model';
import { CarrosService } from '../../services/carros.service';

const customColumns = [
  {
    columnDef: 'id',
    header: 'CÓDIGO',
    cell: (element: ICarro) => `${element.id}`,
  },
  {
    columnDef: 'marca',
    header: 'MARCA',
    cell: (element: ICarro) => `${element.marca}`,
  },
  {
    columnDef: 'modelo',
    header: 'MODELO',
    cell: (element: ICarro) => `${element.modelo}`,
  }
];

@Component({
  selector: 'app-carros',
  templateUrl: './carros.component.html',
  styleUrls: ['./carros.component.css']
})
export class CarrosComponent implements OnInit {

  carros: ICarro[] = [];
  columns = customColumns;
  displayedColumns = this.columns.map(c => c.columnDef);

  constructor(private service: CarrosService) { }

  ngOnInit(): void {
    this.service.listarTodos().subscribe(carros => {
      this.carros = carros;
      console.log('Carros: ', carros);
    });
  }

}
