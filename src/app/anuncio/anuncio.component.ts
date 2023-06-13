import { AnuncioService } from './../anuncio.service';
import { Anuncios } from './../anuncio';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-anuncio',
  templateUrl: './anuncio.component.html',
  styleUrls: ['./anuncio.component.css']
})
export class AnuncioComponent {
  anuncio: Anuncios[] = [];
  formGroupAnuncio: FormGroup;


  constructor(
    private anuncioService: AnuncioService,
    private formBuilder: FormBuilder,
  ){
    this.formGroupAnuncio = formBuilder.group({
      id: [''],
      imagem: [''],
      titulo: [''],
      descr: [''],
      anunciante: [''],
    });
  }


  ngOnInit(): void {
    this.getAnuncios();

  }


  getAnuncios() {
    this.anuncioService.getAnuncios().subscribe({
      next: (data) => {
        this.anuncio = data;
        console.log(this.anuncio);
      },
      error: () => console.log('Error to call endpoint'),
    });
  }

  save() {
    this.anuncioService.save(this.formGroupAnuncio.value).subscribe({
      next: (data) => {
        this.anuncio.push(data);
        console.log(this.anuncio);
      },
    });
    this.formGroupAnuncio.reset();
  }


}
