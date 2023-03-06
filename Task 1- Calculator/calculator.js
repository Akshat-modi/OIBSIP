
function display(num){
    document.getElementById('btn').value += num
    return num
}

function solve(){
    let a = document.getElementById('btn').value
    let b = eval(a);
    document.getElementById('btn').value = b
    return b
}

function clearscreen(){
    document.getElementById('btn').value = ''
}

function toclearlast(){
    console.log(document.getElementById('btn').value.toString().slice(0,-1))
    document.getElementById('btn').value.toString().slice(0,-1)
}