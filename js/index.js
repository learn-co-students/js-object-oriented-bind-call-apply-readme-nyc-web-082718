function greet() {
  console.log(`my name is ${this.name}, hi!`)
}

let sally = {name: 'Sally'}

greet.call(sally)

greet.apply(sally)
