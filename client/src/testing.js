const data = {
    "status": 200,
    "headers":
        { "access-control-allow-origin": "*", "alt-svc": "h3=\":443\"; ma=2592000", "content-length": "3781", "content-type": "application/json", "date": "Mon, 14 Apr 2025 16:56:21 GMT", "vary": "Accept-Encoding", "x-beeceptor-rule-id": "h33qiirhz6" },
    "data": [
        { "id": 1, "name": "Alberto Hauck", "company": "Wehner - Dooley", "username": "Lois.Weber88", "email": "Laurie.Mueller@gmail.com", "address": "9690 Stephania Expressway", "zip": "45523-8724", "state": "Virginia", "country": "Kuwait", "phone": "1-624-349-4340 x656", "photo": "https://json-server.dev/ai-profiles/51.png" },
        { "id": 2, "name": "Juvenal Faker Attribute Error: person.astName is not supported", "company": "Bauch - Klein", "username": "Lowell.Dickinson", "email": "Bella.Kiehn@gmail.com", "address": "15989 Garden Close", "zip": "20316-2275", "state": "Ohio", "country": "Estonia", "phone": "743.493.8513 x8639", "photo": "https://json-server.dev/ai-profiles/100.png" },
        { "id": 3, "name": "Kaelyn McCullough", "company": "McClure, Reichert and Ernser", "username": "Megane46", "email": "Casandra_Kilback-Schaefer69@yahoo.com", "address": "568 Howe Extensions", "zip": "80701", "state": "Vermont", "country": "Anguilla", "phone": "1-922-352-2956 x73085", "photo": "https://json-server.dev/ai-profiles/38.png" },
        { "id": 4, "name": "Benton Russel", "company": "Corwin - Heaney", "username": "Emmalee.Cormier", "email": "Samara.Waelchi@yahoo.com", "address": "726 Easter Bridge", "zip": "89455-0757", "state": "North Carolina", "country": "Burundi", "phone": "248-939-5718", "photo": "https://json-server.dev/ai-profiles/37.png" },
        { "id": 5, "name": "Annette Wyman", "company": "Goodwin - Lebsack", "username": "Jacinto32", "email": "Kassandra.Schaefer51@hotmail.com", "address": "734 Earl Spur", "zip": "08870", "state": "Nebraska", "country": "Western Sahara", "phone": "(544) 973-9749 x250", "photo": "https://json-server.dev/ai-profiles/78.png" },
        { "id": 6, "name": "Rebecca Schultz", "company": "Towne, Erdman and Kling", "username": "Cyril_Ziemann93", "email": "Robert.Stamm30@yahoo.com", "address": "9366 Sycamore Close", "zip": "74184-3794", "state": "Wyoming", "country": "Guyana", "phone": "1-533-761-8051 x55013", "photo": "https://json-server.dev/ai-profiles/40.png" },
        { "id": 7, "name": "Mathias Huel", "company": "Thiel - Effertz", "username": "Ayla_Bernier40", "email": "Merl_Klein-Braun63@hotmail.com", "address": "41959 Judah Divide", "zip": "14260-5401", "state": "South Dakota", "country": "Uzbekistan", "phone": "1-668-404-8924 x83894", "photo": "https://json-server.dev/ai-profiles/86.png" },
        { "id": 8, "name": "Fae Donnelly", "company": "Spencer Group", "username": "Frederique_Halvorson", "email": "Leonardo51@hotmail.com", "address": "5353 Jannie Corners", "zip": "09517-1700", "state": "Wisconsin", "country": "Norfolk Island", "phone": "1-806-749-7750 x84574", "photo": "https://json-server.dev/ai-profiles/29.png" },
        { "id": 9, "name": "Horace Hagenes", "company": "Cole - Baumbach", "username": "Katrina.Nolan", "email": "Ansley.Schroeder10@hotmail.com", "address": "643 German Freeway", "zip": "44645", "state": "Arizona", "country": "Chad", "phone": "828-996-0793 x104", "photo": "https://json-server.dev/ai-profiles/31.png" },
        { "id": 10, "name": "Ebba Langworth", "company": "Ryan - Hane", "username": "Alessandro.Satterfield", "email": "Eudora.Douglas@yahoo.com", "address": "2280 Reynolds Villages", "zip": "21893", "state": "Wyoming", "country": "Vanuatu", "phone": "1-559-609-2357", "photo": "https://json-server.dev/ai-profiles/48.png" }
    ]
}

const sliced = Object.entries(data).slice(2);
// console.log(sliced);
const slicedObject = Object.fromEntries(sliced);
// console.log(slicedObject);

const url = "https://www.api.com   ";
console.log(url.length);
console.log(url.trim().length);
