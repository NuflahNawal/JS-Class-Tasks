// QUESTION 15:
var password = prompt ("Enter your passward")
var hasAlpha = false
var hasNum = false
var startWithNumber = false

if (password.length < 6){
    alert ("It must be atleast 6 characters long")
}else{
    for (var i = 0; i < password.length; i++){
        var code = password.charCodeAt(i)
        if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)){
            hasAlpha = true
        }
        if (code >= 48 && code <= 67){
            hasNum = true
        }
        if (i === 0 &&code >= 48 && code <= 67){
            startWithNumber = true
        }
    }
}

if (!hasAlpha){
    alert ("It must contain alphabats!")
}
if (!hasNum){
    alert ("It must contain number!")
}
if (startWithNumber){
    alert ("It must not start with number!")
}

// QUESTION 18:
