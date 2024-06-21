import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FilmeService } from './filmes.service';
import { AddFilmeDialogComponent } from '../add-filme-dialog/add-filme-dialog.component';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.scss']
})
export class FilmesComponent implements OnInit {
  filmes: any[] = [];

  constructor(private filmeService: FilmeService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.carregarFilmes();
  }

  carregarFilmes(): void {
    this.filmeService.getFilmes(0, 50).subscribe(
      (data) => {
        this.filmes = data;
        console.log('Filmes:', data);
      },
      (error) => {
        console.error('Erro ao carregar filmes:', error);
      }
    );
  }

  openAddFilmeDialog(): void {
    const dialogRef = this.dialog.open(AddFilmeDialogComponent, {
      width: '250px',
      data: { filme: null }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.filmes.push(result);
        console.log('Novo filme adicionado:', result);
      }
    });
  }

  openEditFilmeDialog(filme: any): void {
    const dialogRef = this.dialog.open(AddFilmeDialogComponent, {
      width: '250px',
      data: { filme }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.filmeService.updateFilme(result).subscribe(
          updatedFilme => {
            const index = this.filmes.findIndex(f => f.id === updatedFilme.id);
            if (index !== -1) {
              this.filmes[index] = updatedFilme;
              // Utilize o slice() para forçar a atualização da lista no Angular
              this.filmes = this.filmes.slice();
              console.log('Filme atualizado:', updatedFilme);
            }
          },
          (error) => console.error('Erro ao atualizar filme:', error)
        );
      }
    });
  }
}
