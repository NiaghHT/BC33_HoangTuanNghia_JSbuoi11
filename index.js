//BT1
//Sơ đồ 3 khối
//Input: 3 Sô ngẫu nhiên a ,b ,c
//Process: 
//1. lấy được input 3 số từ người dùng (hardcode)
//2. So sánh  a, b, c  
// a<b<c, a<c<b, b<a<c, b<c<a, c<a<b, c<b<a       
//Output: 
//a b c đã được sắp xếp theo thứ tự tăng dần 
var a = 15;
var b = 75;
var c = 10;
if (a < b && b < c) {
    console.log(a, b, c)
} else if (a < c && c < b) {
    console.log(a, c, b)
} else if (b < a && a < c) {
    console.log(b, a, c)
} else if (b < c && c < a) {
    console.log(b, c, a)
} else if (c < b && b < a) {
    console.log(c, b, a)
} else if (c < a && a < b) {
    console.log(c, a, b)
};

//BT2
//Sơ đồ 3 khối
//Input: ai trong gia đình
//Process: 1. có input từ hardcode
//2. tạo greeting nếu là 1 trong 4 Bố, Mẹ, Anh Trai, Em Gái thì chào tương ứng 
//3. nếu greeting bỏ chống thì là người lạ
//Output: 
// xin chào người tương ứng 
var greeting = '';
if (greeting === "B") { console.log("Xin Chào Bố") } else if (greeting === "M") { console.log("Xin Chào Mẹ") } else if (greeting === "A") { console.log("Xin Chào Anh Trai") } else if (greeting === "E") { console.log("Xin Chào Em Gái") } else if (greeting === "") { console.log("Người Lạ") };

//BT3
//Sơ đồ 3 khối
//Input: 3 số ngầu nhiên
//Process: 1. lấy được input 3 số từ người dùng (hardcode)
//2. nếu a hoặc b hoặc c chia lấy dư cho 2 == 0 thì even +1 ngược lại %2 !=0 thì odd +1
//Output: 
//số chắn và số lẽ 
var a = 15;
var b = 19;
var c = 26;
var even = 0;
var odd = 0;
if (a % 2 === 0) { even = +1 } else { odd += 1 };
if (b % 2 === 0) { even = +1 } else { odd += 1 };
if (c % 2 === 0) { even = +1 } else { odd += 1 };
console.log("Sô chẳn = ", even);
console.log("Số lẽ =", odd);

//BT4
//Sơ đồ 3 khối
//Input: 3 cạnh của tam giác 
//Process: 1. lấy được input 3 cạnh từ người dùng (hardcode)
//2. nếu  a = b =c tam giác đều
//3. nếu có 2 cạnh bằng nhau là tam giác cân
//4. đúng định lý pytago là tam giác vuông 
//Output: 
// loại tam giác 
var a = 3;
var b = 4;
var c = 5;
if (a == b && b == c) { console.log("tam giác đều") }
if (a == b) { console.log("tam giác cân") } else if (b == c) { console.log("tam giác cân") } else if (a == c) { console.log("tam giác cân") };
if (a * a == b * b + c * c) { console.log("tam giác vuông") } else if (b * b == a * a + c * c) { console.log("tam giác vuông") } else if (c * c == a * a + b * b) { console.log("tam giác vuông") };