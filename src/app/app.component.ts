import {
  style,
  transition,
  trigger,
  animate,
  query,
  group,
} from '@angular/animations';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    // AQUI COMEÇA A ANIMAÇÃO, TEMOS QUE IMPORTAR NO COMPONENTE
    trigger('routeAnim', [
      // O ASTERISCO * SERVE PARA DIZER QUE TODOS ELEMENTOS/ALTERAÇÕES SOFRERÃO A ANIMAÇÃO
      transition('* => *', [
        style({
          position: 'relative',
          overflow: 'hidden',
        }),
        query(
          ':enter, :leave',
          [
            style({
              position: 'absolute',
              top: '0',
              left: '0',
              width: '100%',
              height: '100%',
              display: 'block',
              paddingTop: '100px',
            }),
          ],
          { optional: true }
        ),

        group([
          query(
            ':leave',
            [
              animate(
                350,
                style({
                  opacity: '0',
                  transform: 'translateX(-80px)',
                })
              ),
            ],
            { optional: true }
          ),

          query(
            ':enter',
            [
              style({
                opacity: '0',
                transform: 'translateX(80px)',
              }),
              animate(
                350,
                style({
                  opacity: '1',
                  transform: 'translateX(0)',
                })
              ),
            ],
            { optional: true }
          ),
        ]),
      ]),
    ]),
  ],
})
export class AppComponent {
  dateTime!: Date
  ngOnInit() {

    timer(0, 1000).subscribe(() => {
      this.dateTime = new Date()
    })
  }
  prepareRoute(outlet: RouterOutlet): any {
    if (outlet.isActivated) return outlet.activatedRoute.snapshot.url;
  }
}

/* animations: [
  // AQUI COMEÇA A ANIMAÇÃO, TEMOS QUE IMPORTAR NO COMPONENTE
  trigger('routeAnim', [
    // O ASTERISCO * SERVE PARA DIZER QUE TODOS ELEMENTOS/ALTERAÇÕES SOFRERÃO A ANIMAÇÃO
    transition('* => *', [
      // QUERY SERVE PARA SELECIONAR ELEMENTOS, NESSE CASO A ANIMAÇÃO DESCRITA SÓ OCORRERA NOS ELEMENTOS NOVOS
      query(
        ':enter',
        [
          style({
            background: 'wheat',
            display: 'block',
            height: '100%',
          }),
          animate(
            1000,
            style({
              background: '*',
            })
          ),
        ],
        { optional: true }
      ),

      style({
        background: 'blue',
      }),
      animate(1000),
    ]),
  ]),
], */
