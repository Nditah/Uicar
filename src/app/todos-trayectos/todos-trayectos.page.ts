import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-todos-trayectos',
  templateUrl: './todos-trayectos.page.html',
  styleUrls: ['./todos-trayectos.page.scss'],
})
export class TodosTrayectosPage implements OnInit {

  zona = 'Madrid';
  trayectos = [];
  constructor(private router: Router , public active: ActivatedRoute ,  private http: HttpClient) {
    this.zona = this.active.snapshot.paramMap.get('zona');
  }

  ngOnInit() {
    this.zona = this.active.snapshot.paramMap.get('zona');
    this.trayectosload();
  }
  gotomain() {
    this.router.navigate(['home']);
  }

  async trayectosload() {
    await this.http.get(`http://uicar.openode.io/zonas/${this.zona}/30`).subscribe((data: any) => {
      // console.log(data);
      this.trayectos = data;
    });
    return this.trayectos;
  }
  gotoinfoTrayecto(id: string) {
    this.router.navigate([`/info-trayecto/${id}`]);
  }

}
