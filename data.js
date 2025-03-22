import { coursesBg1, coursesBg2, coursesBg3 } from './img';

export const coursesData = [
   {
      id: 1,
      title: 'Индивидуальный формат проведения',
      textes: ['Занятия проходят 1 на 1 или 2 на 1'],
      priceText: 'Цена за одно занятие',
      price: '2000₽',
      img: coursesBg1,
      link: '/courses-individual',
   },
   {
      id: 2,
      title: 'Коллективный формат проведения',
      textes: ['Занятия проходят в группах по 12 человек', ,],
      priceText: 'Цена за одно занятие',
      price: '1000₽',
      img: coursesBg2,
      link: '/courses-group',
   },
   {
      id: 3,
      title: 'Потоковый формат проведения занятий',
      img: coursesBg3,
      textes: ['Занятие проходят в потоках, без голосового чата с лектором'],
      priceText: 'Цена за одно занятие',
      price: '500₽',
      link: '/courses-original',
   },
];

export const formSelectData = [
   'Индивидуальный формат',
   'Потоковый формат',
   'Коллективный формат',
   // 'Занятия по индивидуальной теме',
];
