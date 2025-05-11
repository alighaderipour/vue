const data = {
  name :'Luis'
}

const observedData= new Proxy(data, {
  set(target, key , value){
    document.querySelector("#name").innerText = value
    target[key] = valuex

  }
})
observedData.name = 'John'
console.log(observedData.name)