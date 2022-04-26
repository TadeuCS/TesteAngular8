import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { Router, RouterModule } from '@angular/router';
import { ICarro } from '../../models/icarro.model';
import { CarrosService } from '../../services/carros.service';

class IColumn {
  header: string="";
  columnDef: string="";
}

class IButton {
  id: string="";
  label: string="";
  color?: string="";
  icon?: string ="";
}

const customColumns: IColumn[] = [
  {
    columnDef: 'id',
    header: 'CÓDIGO',
  },
  {
    columnDef: 'marca',
    header: 'MARCA',
  },
  {
    columnDef: 'modelo',
    header: 'MODELO',
  },
];

const buttons : IButton[] = [
  {
    id: 'btnEdit',
    label: 'Editar',
    color: 'accent',
    icon: 'edit'
  },
  {
    id: 'btnRemove',
    label: 'Remover',
    color: 'warn',
    icon: 'delete'
  },
];

@Component({
  selector: 'app-carros',
  templateUrl: './carros.component.html',
  styleUrls: ['./carros.component.css']
})
export class CarrosComponent implements OnInit {

  carros: ICarro[] = [];
  columnsFields: IColumn[] = customColumns;
  columnsButtons: IButton[] = buttons;
  displayedColumns = this.columnsFields.map(c => c.columnDef);

  constructor(private service: CarrosService, private router: Router) { }

  ngOnInit(): void {
    this.service.listarTodos().subscribe(carros => {
      this.carros = carros;
      console.log('Carros: ', carros);
    });
  }

  goToNewCar(){
    this.router.navigate(['carros/novo']);
  }

}
