import { ICarData } from '../types/interfaces';

const data: ICarData[] = [
  {
    id: 1,
    name: 'Mercedes EQA',
    year: 2021,
    color: 'белый',
    km: 300,
    img: 'https://www.mbeqclub.com/attachments/polar-white-mercedes-eqa-png.813/',
    price: 59022,
    description:
      'Mercedes-Benz EQA — это компактный электрический хэтчбек со спортивным характером. Концептуальный автомобиль имеет по одному электрическому двигателю на передней и задней оси, которые обеспечивает ему мощность более 200 кВт.',
  },
  {
    id: 2,
    name: 'Mercedes EQA',
    year: 2021,
    color: 'серый',
    km: 300,
    img: 'https://listers.co.uk/img/cap/v/c/new/largest/22716/3/new-mercedes-benz-eqa-hatchback-eqa-66.5kwh-5dr-auto-front-three-quarter.jpg',
    price: 39022,
    description:
      'Mercedes-Benz EQA — это компактный электрический хэтчбек со спортивным характером. Концептуальный автомобиль имеет по одному электрическому двигателю на передней и задней оси, которые обеспечивает ему мощность более 200 кВт.',
  },
  {
    id: 3,
    name: 'Mercedes EQA',
    year: 2021,
    color: 'красный',
    km: 300,
    img: 'https://www.mbeqclub.com/attachments/manufaktur-patagonia-red-metallic-mercedes-eqa-png.805/',
    price: 69022,
    description:
      'Mercedes-Benz EQA — это компактный электрический хэтчбек со спортивным характером. Концептуальный автомобиль имеет по одному электрическому двигателю на передней и задней оси, которые обеспечивает ему мощность более 200 кВт.',
  },
  {
    id: 4,
    name: 'Mercedes EQB',
    year: 2022,
    color: 'белый',
    km: 400,
    img: 'https://www.evspecifications.com/images/model/2953164/640/main.jpg',
    price: 50022,
    description:
      'Mercedes-Benz EQB — это компактный электрический хэтчбек. Концептуальный автомобиль имеет по одному электрическому двигателю на передней и задней оси, которые обеспечивает ему мощность более 400 кВт.',
  },
  {
    id: 6,
    name: 'Mercedes EQB',
    year: 2022,
    color: 'красный',
    km: 400,
    img: 'https://www.evspecifications.com/images/model/54a3167/640/main.jpg',
    price: 63022,
    description:
      'Mercedes-Benz EQB — это компактный электрический хэтчбек. Концептуальный автомобиль имеет по одному электрическому двигателю на передней и задней оси, которые обеспечивает ему мощность более 400 кВт.',
  },
  {
    id: 7,
    name: 'Mercedes EQS',
    year: 2022,
    color: 'белый',
    km: 500,
    img: 'https://www.evspecifications.com/images/model/84bd152/640/main.jpg',
    price: 55022,
    description:
      'Mercedes EQS — это электрическая машина. Концептуальный автомобиль имеет по одному электрическому двигателю на передней и задней оси, которые обеспечивает ему мощность более 350 кВт.',
  },
  {
    id: 8,
    name: 'Mercedes EQS',
    year: 2022,
    color: 'серый',
    km: 500,
    img: 'https://www.evspecifications.com/images/model/35af153/640/main.jpg',
    price: 79022,
    description:
      'Mercedes EQS — это электрическая машина. Концептуальный автомобиль имеет по одному электрическому двигателю на передней и задней оси, которые обеспечивает ему мощность более 350 кВт.',
  },
  {
    id: 9,
    name: 'Mercedes EQS',
    year: 2022,
    color: 'красный',
    km: 500,
    img: 'https://www.evspecifications.com/images/model/8991151/640/main.jpg',
    price: 99002,
    description:
      'Mercedes EQS — это электрическая машина. Концептуальный автомобиль имеет по одному электрическому двигателю на передней и задней оси, которые обеспечивает ему мощность более 350 кВт.',
  },
  {
    id: 10,
    name: 'Tesla model 3',
    year: 2017,
    color: 'белый',
    km: 300,
    img: 'https://media-server2.modenamotorsgmbh.com/24777/tesla-model-3-standard-range.jpg',
    price: 49009,
    description:
      'Cамый доступный электрокар в гамме американской компании Tesla.Автомобиль построен на новой платформе, которая в корне отличается от Model S и Model X. Обновленная версия компактного седана была представлена в конце 2020 года Tesla.',
  },
  {
    id: 11,
    name: 'Tesla model 3',
    year: 2017,
    color: 'серый',
    km: 300,
    img: 'https://3dnews.ru/assets/external/illustrations/2021/11/05/1053048/tesla_02.jpg',
    price: 45092,
    description:
      'Cамый доступный электрокар в гамме американской компании Tesla.Автомобиль построен на новой платформе, которая в корне отличается от Model S и Model X. Обновленная версия компактного седана была представлена в конце 2020 года Tesla.',
  },
  {
    id: 12,
    name: 'Tesla model 3',
    year: 2017,
    color: 'красный',
    km: 300,
    img: 'https://imgcdn.oto.com/large/gallery/color/133/2219/tesla-model-3-color-183277.jpg',
    price: 98022,
    description:
      'Cамый доступный электрокар в гамме американской компании Tesla.Автомобиль построен на новой платформе, которая в корне отличается от Model S и Model X. Обновленная версия компактного седана была представлена в конце 2020 года Tesla.',
  },
  {
    id: 13,
    name: 'Tesla model Y',
    year: 2019,
    color: 'белый',
    km: 400,
    img: 'https://evbikeandcar.com/wp-content/uploads/2022/02/Tesla-model-Y-.png',
    price: 59055,
    description:
      'это так называемый SUV (Sport utility vehicle), то есть, условно говоря, кроссовер. В целом, под характеристику SUV попадают автомобили, у которых увеличенный дорожный просвет, полный привод и повышенная вместимость.',
  },
  {
    id: 14,
    name: 'Tesla model Y',
    year: 2019,
    color: 'серый',
    km: 400,
    img: 'https://cdn.shopify.com/s/files/1/0058/0252/4785/products/tesla_model_y_black_grey_front_300x300.jpg?v=1625598947',
    price: 71022,
    description:
      'это так называемый SUV (Sport utility vehicle), то есть, условно говоря, кроссовер. В целом, под характеристику SUV попадают автомобили, у которых увеличенный дорожный просвет, полный привод и повышенная вместимость.',
  },
  {
    id: 15,
    name: 'Tesla model Y',
    year: 2019,
    color: 'красный',
    km: 400,
    img: 'https://www.ccarprice.com/products/Tesla_Model_Y_Long_Range_2022_1.jpg',
    price: 65098,
    description:
      'это так называемый SUV (Sport utility vehicle), то есть, условно говоря, кроссовер. В целом, под характеристику SUV попадают автомобили, у которых увеличенный дорожный просвет, полный привод и повышенная вместимость.',
  },
  {
    id: 16,
    name: 'Tesla model S',
    year: 2022,
    color: 'белый',
    km: 500,
    img: 'https://media.evo.co.uk/image/private/s--vp0QGPIB--/f_auto,t_content-image-full-mobile@1/v1611850044/evo/2021/01/2021%20Tesla%20Model%20S%20facelift-17.jpg',
    price: 45012,
    description:
      'Именно Model S принесла марке Tesla первую мировую славу. Дебютировав в 2013 году, автомобиль продержался с легкими изменениями до 2021 года. В январе компания объявила о глобальном обновлении модели. ',
  },
  {
    id: 18,
    name: 'Tesla model S',
    year: 2022,
    color: 'красный',
    km: 500,
    img: 'https://cdn.motor1.com/images/mgl/RvWpK/s3/2021-tesla-model-s.jpg',
    price: 56019,
    description:
      'Именно Model S принесла марке Tesla первую мировую славу. Дебютировав в 2013 году, автомобиль продержался с легкими изменениями до 2021 года. В январе компания объявила о глобальном обновлении модели. ',
  },
  {
    id: 19,
    name: 'Volkswagen ID3',
    year: 2021,
    color: 'белый',
    km: 300,
    img: 'https://www.ccarprice.com/products/Volkswagen_ID_3_2022.jpg',
    price: 67012,
    description:
      'первый серийный электромобиль Volkswagen. Официальная презентация состоялась 9 сентября 2019 года на международном автосалоне во Франкфурте. Основой электромобиля является платформа MEB ',
  },
  {
    id: 20,
    name: 'Volkswagen ID3',
    year: 2021,
    color: 'серый',
    km: 300,
    img: 'https://cdn.leasing.com/cms/moonstone-grey--flat-black---no-cost.jpg',
    price: 59032,
    description:
      'первый серийный электромобиль Volkswagen. Официальная презентация состоялась 9 сентября 2019 года на международном автосалоне во Франкфурте. Основой электромобиля является платформа MEB ',
  },
  {
    id: 21,
    name: 'Volkswagen ID3',
    year: 2021,
    color: 'красный',
    km: 300,
    img: 'https://s.alicdn.com/@sc04/kf/H2992186a23d9443382293ab29c0873edw.jpg_720x720q50.jpg',
    price: 75022,
    description:
      'первый серийный электромобиль Volkswagen. Официальная презентация состоялась 9 сентября 2019 года на международном автосалоне во Франкфурте. Основой электромобиля является платформа MEB ',
  },
  {
    id: 23,
    name: 'Volkswagen ID4',
    year: 2021,
    color: 'серый',
    km: 400,
    img: 'https://mosautoshina.ru/i/auto/volkswagen_id4_2021-600.jpg',
    price: 55555,
    description:
      ' электромобиль от Volkswagen, он базируется на платформе Volkswagen Group MEBrude и стал первым кроссовером в электрической линейке марки.[1] В платформе MEB аккумуляторная батарея расположена в полу автомобиля.',
  },
  {
    id: 24,
    name: 'Volkswagen ID4',
    year: 2021,
    color: 'красный',
    km: 400,
    img: 'https://cdn-ds.com/media/sz_58014/2757/w_480/MY21-ID4-1st-EditionPro-KingsRedMetallic_o.jpg',
    price: 67422,
    description:
      ' электромобиль от Volkswagen, он базируется на платформе Volkswagen Group MEBrude и стал первым кроссовером в электрической линейке марки.[1] В платформе MEB аккумуляторная батарея расположена в полу автомобиля.',
  },
  {
    id: 25,
    name: 'Volkswagen ID6',
    year: 2021,
    color: 'белый',
    km: 500,
    img: 'https://image.made-in-china.com/202f0j00iSwWvjUlrPub/High-Speed-Fast-Charger-5-Door-7-Seats-SUV-Electric-Cars-Volkswagen-VW-ID-6-Crozz.jpg',
    price: 70812,
    description:
      ' электромобиль от Volkswagen, базирующийся на платформе Volkswagen Group MEBrude,в настоящее время продающийся только в Китае.',
  },
  {
    id: 26,
    name: 'Volkswagen ID6',
    year: 2021,
    color: 'серый',
    km: 500,
    img: 'https://netrinoimages.s3.eu-west-2.amazonaws.com/2019/05/11/608680/392604/volkswagen_id6_x_2022_3d_model_c4d_max_obj_fbx_ma_lwo_3ds_3dm_stl_4062777_o.jpg',
    price: 78013,
    description:
      ' электромобиль от Volkswagen, базирующийся на платформе Volkswagen Group MEBrude,в настоящее время продающийся только в Китае.',
  },
  {
    id: 27,
    name: 'Volkswagen ID6',
    year: 2022,
    color: 'красный',
    km: 500,
    img: 'https://thedriven.io/wp-content/uploads/2021/02/roommzz_DB2019AU00535_medium.jpg',
    price: 50000,
    description:
      ' электромобиль от Volkswagen, базирующийся на платформе Volkswagen Group MEBrude,в настоящее время продающийся только в Китае.',
  },
];

export default data;
