const datos = {
  distance: "3.581",
  elevation: "3815",
  osmtags: {
    wikipedia: "zh:班玛县",
    division_code: "632622",
    name_zh: "班玛县",
    alt_name_en: "Baima;班玛;Banma County;Banma",
    name_vi: "Baima",
    name_bo: "པད་མ་རྫོང་",
    boundary: "administrative",
    alt_name_vi: "Ban Mã",
    name_en: "Banma County",
    wikidata: "Q803870",
    timezone: "Asia/Chongqing",
    name_zh_pinyin: "Bānmǎ Xiàn",
    name: "པད་མ་རྫོང་ 班玛县",
    admin_level: "6",
    alt_name_bo: "པད་མ།",
    type: "boundary",
  },
  latt: "32.76906",
  city: "Gongma",
  prov: "CN",
  geocode: "GYIMKAR-EVPPL",
  stnumber: {},
  staddress: {},
  geonumber: "8117774138901",
  inlatt: "32.78950",
  timezone: "Asia/Shanghai",
  region: "Qinghai",
  postal: {},
  longt: "100.34960",
  remaining_credits: "-26",
  inlongt: "100.32000",
  adminareas: {
    admin6: {
      wikipedia: "zh:班玛县",
      division_code: "632622",
      name_zh: "班玛县",
      alt_name_en: "Baima;班玛;Banma County;Banma",
      name_vi: "Baima",
      name_bo: "པད་མ་རྫོང་",
      boundary: "administrative",
      alt_name_vi: "Ban Mã",
      name_en: "Banma County",
      wikidata: "Q803870",
      timezone: "Asia/Chongqing",
      name_zh_pinyin: "Bānmǎ Xiàn",
      name: "པད་མ་རྫོང་ 班玛县",
      admin_level: "6",
      level: "6",
      alt_name_bo: "པད་མ།",
      type: "boundary",
    },
  },
  altgeocode: "GONGMACN-EVPPL",
};

// let nombre = 'awelo'
// const hello= nombre => console.log(`Hola soy ${nombre}`);

// hello(nombre);
// hello("alrid");
// hello([1,2,3,4]);

// console.log([1,2,3,4,5]);

// function hola(name){
//     console.log(`hello ${name} `)
// }
// // hola("avram");
// let animales = ['conejo', 'vaca','caballo',]
// let numeros = [1,2,3];
// // let onjeto = {
// //     numero: "name",
// //     call: "hola"
// // }
// // console.log(onjeto.call)
// // console.log(numeros[2]);
// let animales2 = [...animales,'perro']
// let numeros2 = [...numeros,4,65]
// console.log(numeros);
// console.log(numeros2);
// console.log(animales);
// console.log(animales2);

// console.log(animales.indexOf('caballo'));

// let mutantes = animales2.some('');
// console.log(mutantes);

// const multi = (a, b) => {
//   let r = 0;
//   for (b !== 0; b--; ) r = r + a;
//   return r;
// };

// console.log(multi(3, 8));

// const multi = (a,b) => {
//   return "x".repeat(a).repeat(b).length
// }

// const multi = (a,b) => "x".repeat(a).repeat(b).length

// const multi = (a,b) => [].push(a).push(b).length
//const multi = (a,b) => ((let r=0) ;(b !==0)) ? (a+b)  : 0

//   const array1 = ['a', 'b', 'x'];
//   let array2 = array1.entries();
//  array2.forEach(element => {
//     console.log(element)
//  })

//   console.log(iterator1.value)

//   console.log(iterator1.next().value);
//   // Expected output: Array [0, "a"]

//   console.log(iterator1.next().value);
//   // Expected output: Array [1, "b"]

// function resolveAfter2Seconds() {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve('resolved');
//     }, 2000);
//   });
// }

// function resolveAfter8Seconds() {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve('reshj');
//     }, 12000);
//   });
// }

// async function asyncCall() {
//   console.log('calling');
//   const result = await resolveAfter2Seconds();

//   console.log(result);

//   // Expected output: "resolved"
// }

// async function llamada() {
//   console.log('esperadnp');
//   const hool = await resolveAfter8Seconds();
//   console.log(hool);
// }

// asyncCall();
// llamada();

// const whereAmI = async (lat, lng)=>{
//   try {
//       const key = '&auth=272727982225460490473x28516'
//       const response = await fetch(`https://geocode.xyz/${lat},${lng}?json=1${key}`);
//       let {city, distance} =await response.json()
//     console.log(city, distance);

//   } catch (error) {
//       console.log(error);
//   }
// }

// whereAmI(32.7895, 100.32);

async function funcionasincrona() {
  try {
    
    console.log(datos.altgeocode);
  } catch {

  }
}
