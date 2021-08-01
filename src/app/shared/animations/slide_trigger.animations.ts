import {
  trigger,
  state,
  animate,
  style,
  transition,
} from '@angular/animations';

export const slide2 = trigger('slide2', [
  transition(
    ':enter',
    [
      style({
        bottom: '-200px',
        opacity: '0.4',
      }),
      animate('{{ time }}ms ', style({ bottom: '-5px', opacity: '1' })),
    ],
    { params: { enterTime: '1200' } }
  ),
  transition(':leave', [animate('{{ time }}ms ', style({ opacity: '0' }))], {
    params: { leaveTime: '2000' },
  }),
]);

//  params: { time: '500' }: default value 500
