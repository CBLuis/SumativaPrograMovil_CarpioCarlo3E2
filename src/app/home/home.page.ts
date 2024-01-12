import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  newsTitle: string = "";

  onBuscar(event: string) {
    this.newsTitle = event;}
noticias=[
  {
    title:"NOTICIA 1",
    desc:"En lo que va del año en Azuay se han consumido 568 hectáreas de bosque en Azuay",
    img:"../../assets/Azuay.jpg"
  },
  {
    title:"NOTICIA 2",
    desc:"13 procesados por asaltar canal de televisión en Ecuador",
    img:"../../assets/Terrorismo.jpg"
  },
  {
    title:"NOTICIA 3",
    desc:"Narcotráfico: un poder paralelo al del Estado",
    img:"../../assets/Narcotrafico.jpg"
  },
  {
    title:"NOTICIA 4",
    desc:"Cuenca amanece desolada y con negocios cerrados",
    img:"../../assets/Desolado.jpg"
  },
  {
    title:"NOTICIA 5",
    desc:"Familiares piden que se liberen a personas retenidas en la cárcel de Turi",
    img:"../../assets/Carcel.jpg"
  },
]
}
