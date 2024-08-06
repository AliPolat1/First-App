class Person{
    constructor(firstName, lastName,age,country = "Türkiye ",city){
            console.log(this)
            this.firstName = firstName
            this.lastName = lastName
            this.age = age
            this.country = country
            this.city = city
            this.skills = []

    }
    getFullName(){
        return this.firstName + " " + this.lastName
    }

    set setSkills(skill){
        this.skills.push(skill)
    }
    appendSkill(skill){
        this.skills.push(skill)
    }
    get getSkills(){
        return this.skills
    }
    getPersonelInfo(){
        let fullName = this.getFullName()
        let skills = this.skills.length > 0 ? `Yeteneklerim ise şunlar: ${this.skills.join(", ")}` : ""
        return `Benim adım ${fullName} ve ${this.age} yaşındayım. ${this.country} ülkesinde ve ${this.city} şehrinde yaşıyorum. ${skills}`
    }

}
const person1 = new Person("Ali","Polat",17,"Türkiye","İstanbul")
const person2 = new Person("Baran","Sel",40,undefined,"İstanbul")
const person3 = new Person("Senem","Polatsel",29,"Türkiye","İstanbul")

person1.appendSkill("Javascript")
person2.setSkills = "C#" 
person3.setSkills = "PHP" 

//console.log(`\n`,person1.getSkills,`\n`,person2.getSkills,`\n`,person3.getSkills)

//console.log(person1.getPersonelInfo())
//console.log(person2.getPersonelInfo())
//console.log(person3.getPersonelInfo())


class Teacher extends Person{

}
class Student extends Person{
    
}