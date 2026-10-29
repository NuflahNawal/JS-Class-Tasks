function getCity() {
    var code = Number(document.getElementById("code").value);
    var city;

    switch (code) {
        case 74000:
            city = "Karachi";
            break; 
        case 44000:
            city = "Islamabad";
            break; 
        default:
            city = "Invalid input";
            break;
    }
    document.getElementById("city").value = city;
}




function expand () {
    var less = "Anime is a vibrant style of hand-drawn and computer-generated animation originating from Japan."
    var more = "Anime is a vibrant style of hand-drawn and computer-generated animation originating from Japan. Unlike traditional Western cartoons that often target young children, anime encompasses a vast spectrum of genres and themes created for audiences of all ages, ranging from action-packed adventures and sci-fi epics to deep psychological dramas and slice-of-life comedies. Characterized by distinctive visual features such as expressive, large eyes, dynamic hair styles, and detailed backgrounds, the medium often evolves from Japanese comic books known as manga. Over the decades, it has grown from an early 20th-century artistic experiment into a massive global cultural and economic phenomenon.";

    var link = document.getElementById("showMore").innerHTML = more;
    if (link === "See more") {
        document.getElementById("showMore").innerHTML = more;
        document.getElementById("showLess").innerHTML = less;
    } else {
        document.getElementById("showLess").innerHTML = less;
        document.getElementById("showMore").innerHTML = more;
    }
}