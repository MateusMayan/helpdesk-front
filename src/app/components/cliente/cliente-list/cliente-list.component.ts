import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { Cliente } from "src/app/models/cliente";
import { ClienteService } from "src/app/services/cliente.service";

/**
 * @title Table with pagination
 */
@Component({
  selector: "app-cliente-list",
  styleUrls: ["cliente-list.component.css"],
  templateUrl: "cliente-list.component.html",
})
export class ClienteListComponent implements OnInit {

  ELEMENT_DATA: Cliente[] = []

  displayedColumns: string[] = ["id", "nome", "cpf", "email", "acoes"];
  dataSource = new MatTableDataSource<Cliente>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private service: ClienteService
  ) {}

  ngOnInit(): void {
    this.findAll()
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
  findAll() {
    this.service.findAll().subscribe(resposta => {
      this.ELEMENT_DATA = resposta
      this.dataSource = new MatTableDataSource<Cliente>(resposta)
      this.dataSource.paginator = this.paginator;
    })
  }
}