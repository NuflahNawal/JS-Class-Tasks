var student1 = {
    name: "Nuflah",
    email: "nuflah@gmail.com",
    rollNo: "1234",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs0ZpibrPpxlEB7hpNKqNuyburpaFCHKfj5q93reeHqEyr7Fj63a9YzEg&s=10",
    course:[ "Web Devolopment" , "Digital Marketing"],
    address: {
        country: "Pakistan",
        city: "Karachi"
    }
}
var student2 = {
    name: "Aysha",
    email: "aysha@gmail.com",
    rollNo: "123",
    img: "https://i.pinimg.com/736x/1d/9a/1d/1d9a1d9ff4e7ffc85e970d3379b3726b.jpg",
    course:[ "Web Devolopment" , "Digital Marketing"],
    address: {
        country: "Pakistan",
        city: "Karachi"
    }
}
var student3 = {
    name: "Sabiha",
    email: "sabiha@gmail.com",
    rollNo: "1235",
    img: "https://img.magnific.com/premium-vector/vector-image-business-woman-shirt-suit_1213699-3051.jpg?semt=ais_hybrid&w=740&q=80",
    course:[ "Web Devolopment" , "Digital Marketing"],
    address: {
        country: "Pakistan",
        city: "Karachi"
    }
}

var profile = document.getElementById("card").innerHTML + `<div class="card" style="width: 18rem;">
<div class="card-body">
  <img src="${student1.img}" class="card-img" alt="...">
  <h5 class="mt-2 mb-0">${student1.name}</h5>
  <p class="card-text fg-2"> Email: ${student1.email}</p>
  <p class="card-text fg-2"> Roll no: ${student1.rollNo}</p>
  <p class="card-text fg-2">Course: ${student1.course[0]}</p>
  <p class="card-text fg-2">Address: ${student1.address.country}, ${student1.address.city}</p>
  
</div>
</div>`

document.write (profile)
var profile = document.getElementById("card").innerHTML + `<div class="card" style="width: 18rem;">
<div class="card-body">
  <img src="${student2.img}" class="card-img" alt="...">
  <h5 class="mt-2 mb-0">${student2.name}</h5>
  <p class="card-text fg-2">Email: ${student2.email}</p>
  <p class="card-text fg-2">Roll no: ${student2.rollNo}</p>
  <p class="card-text fg-2">Course: ${student2.course[0]}</p>
  <p class="card-text fg-2">Address: ${student2.address.country}, ${student2.address.city}</p>
  
</div>
</div>`

document.write (profile)
var profile = document.getElementById("card").innerHTML + `<div class="card" style="width: 18rem;">
<div class="card-body">
  <img src="${student3.img}" class="card-img" alt="...">
  <h5 class="mt-2 mb-0">${student3.name}</h5>
  <p class="card-text fg-2">Email: ${student3.email}</p>
  <p class="card-text fg-2">Roll no: ${student3.rollNo}</p>
  <p class="card-text fg-2">Course: ${student3.course[1 ]}</p>
  <p class="card-text fg-2">Address: ${student3.address.country}, ${student3.address.city}</p>
  
</div>
</div>`

document.write (profile)