import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { Tecnico } from "src/app/models/tecnico";

/**
 * @title Table with pagination
 */
@Component({
  selector: "app-tecnico-list",
  styleUrls: ["tecnico-list.component.css"],
  templateUrl: "tecnico-list.component.html",
})
export class TecnicoListComponent implements OnInit {

  ELEMENT_DATA: Tecnico[] = [
    {
      id: 1,
      nome: 'Mateus Mayan',
      cpf: '123.456.789-10',
      email: 'mateusmayan@icloud.com',
      senha: '123456',
      perfis: ['0'],
      dataCriacao: "15/08/2022"
    }
  ]

  displayedColumns: string[] = ["id", "nome", "cpf", "email", "acoes"];
  dataSource = new MatTableDataSource<Tecnico>(this.ELEMENT_DATA);

  constructor() {}

  ngOnInit(): void {}

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}