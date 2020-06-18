//obejct literal vs object class
class Product {
  constructor(name) {
    this.name = name
  }
}
const thinkpad = new Product("Lenovo thinkap x230")
console.log(thinkpad.name) // Lenovo thinkpad x230


//Function Constructur dan Class
// Bagaimana jika kita punya kasus seperti ini.
// Kita disuruh untuk membuat 3 objek yang memiliki model atau bentuk yang sama, 
//hanya berbeda value di setiap property atau methodnya.

// const barang1 ={
//     name : "Lenovo thinkpad x230",
//     price : 100,
//     detail: function() {
//         return this.name + ""+ this.harga
//     }
// }
// const barang2 ={
//     name : "Dell xw20",
//     price : 200,
//     detail: function() {
//         return this.name + ""+ this.harga
//     }
// }
// const barang3 ={
//     name : "Lenovo thinkpad xCarbon",
//     price : 300,
//     detail: function() {
//         return this.name + ""+ this.harga
//     }
// }


// function Barang (nama,price){
//     this.name=name;
//     this.price=price;
//     this.detail=function() {
//         return this.name+"     "+this.price
//     }
// }
// const barang1 = new Barang ("Lenovo Thinkpad x230","2juta")
// const barang2 = new Barang ("Dell xps 130","12juta")
// const barang3 = new Barang ("Lenovo Thinkpad carbon","5juta")

// console.log(barang1.name)
// console.log(barang2.name)
// console.log(barang3.name)


// Javascript private, public properties and methods.
// Di dalam object oriented programing di kenal istilah access modifier atau visibility.
// Apa itu access modifier ?
// Access modifier atau visibility adalah sebuah konsep yang di gunakan untuk mengatur tingkat akses terhadap property atau method dalam sebuah objek.

// function Barang (nama,price,weight,color){
// //public property
// this.nama= nama;
// this.price = price;
// //private property
// var weight = weight;
// var color = color;

// //public method
// this.detail = function () {
//   return this.nama + "  " + this.price
// }
// //private method
// function showeightColor(){
//   return weight + ""+color
// }
// }

// //instanisasi sebuah objek
// const barang1 = new Barang("Lenovo",100,2,"blue")

// console.log(barang1)
// console.log(barang1.nama)
// console.log(barang1.weight)
// console.log(barang1.detail())
// console.log(barang1.showeightColor)


// // Encapsulation
// function Ongkir(berat){
//   this.pajak = 500;
//   this.biaya = function(){
//     return berat *1000
//   }
//   this.totalBiaya = function() {
//     return this.biaya() + this.pajak
//   }
// }
// const laptop = new Ongkir(4);
// // console.log(laptop.totalBiaya());




// function Ongkir(berat){
//   this.pajak = 500;
//   this.biaya = function(){
//     return berat *1000
//   }
//   this.totalBiaya = function() {
//     return this.biaya() + this.pajak
//   }
// }
// const laptop = new Ongkir(4);
// laptop.pajak = 800
// console.log(laptop.totalBiaya());

//Caranya adalah mengubah property pajak dari public menjadi private.
//Seperti kode di bawah!

// function Ongkir(berat){
//   var pajak = 500;
//   var biaya = function(){
//     return berat * 1000
//   }
//   this.totalBiaya = function() {
//     return biaya() + pajak
//   }

//   }
//   const laptop = new Ongkir(4);
//   laptop.pajak = 800
//   console.log(laptop.totalBiaya())


//inheritance
//Inheritance dalam OOP adalah sebuah proses dimana 
//sebuah class mewariskan property dan methodnya ke class lain atau childnya.

// class People{
//   constructor(nama,umur){
//     this.nama = nama;
//     this.umur = umur
//   }
// }
// class Person extends People {
//   constructor(nama,umur,pekerjaan){
//     super(nama,umur);
//     this.pekerjaan = pekerjaan;
//   }
// }
// const tanjiro = new Person("Kamado Tanjiro", 15,"Demon slayer");
// console.log(tanjiro.nama)
// console.log(tanjiro.umur)
// console.log(tanjiro.pekerjaan)

//Polymorphism
//Dari asal katanya, poly berarti banyak dan morphe berarti bentuk.
// Dengan kata lain polymorphism berarti banyak bentuk.
// Polymorphism adalah kemampuan untuk membuat variabel,
// fungsi, atau objek yang memiliki banyak bentuk.

// class People {
//   constructor(name) {
//     this.name = name;
//   } 
//   greet(){
//     return 'Halo, good morning my name is ${this.name}'
//   }
// }
// class Person extends People{
//   constructor (name){
//     super(name)
//   }
//   greet(){
//     return 'halo, good morning my name is ${this.name}'
//   }
// }

// const seiya = new Person("Seiya");
// console.log(seiya.greet());


// Abstraction
// Abstraction adalah sebuah teknik untuk menyembunyikan detail
//  tertentu dari sebuah objek dan hanya menampilkan fungsionalitas 
//  atau fitur penting dari objek tersebut.

// function Ongkir(berat){
//   var berat = berat;
//   var totalBiaya = function(){
//     return berat * 10000
//   }
//   this.tampilBiaya = function() {
//     return totalBiaya()
//   }
// }
// const laptop = new Ongkir(4);
// console.log(laptop.tampilBiaya())


//ptototype method 
// class Rectangle {
//   constructor (height,width){
//     this.height =height;
//     this.width = width;
//   }
//   get area(){
//     return this.calcArea();
//   }
//   calcArea(){
//     return this.height * this.width;
//   }}
//   const square = new Rectangle(10,10);
//   console.log (square.area);
//static method
// class Point{
//   constructor(x,y){
//     this.x =x;
//     this.y = y;
//   }
//   static distance (a,b){
//     const dx =a.x - b.x;
//     const dy =a.y - b.y;

//     return Math.hypot(dx,dy);
//   }
// }

// const p1 = new Point(5,5);
// const p2 = new Point(10,10);

// console.log(Point.distance(p1,p2));