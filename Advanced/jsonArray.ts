

interface Person{
          name: string; 
          age: number,
          children?: Person[];
}

const person : Person[] = [
    {
      "name": "Ashok",
      "age": 60,
      "children": [
        {
          "name": "Arun",
          "age": 20,
          "children": []
        },
        {
          "name": "Divya",
          "age": 25,
          "children": [
            {
              "name": "Ajay",
              "age": 10,
              "children": []
            }
          ]
        }
      ]
    }, 
    {
        "name": "Sidhu",
        "age": 35,
        "children": []
      }
    
  ]
  
  class Json{

    calculateToTalPersons(person : Person[]) : number{
        let Count = 0;
        for(const i of person){
            if(typeof(i) == 'object' && i!= null){
                Count++;

                // Array.isArray() is to check passed value is an array or not. it returns a boolean value
                if(Array.isArray(i.children)){
                    Count += this.calculateToTalPersons(i.children);
                }
            }
        }

        return Count;
    }

  }

  const json = new Json();
  console.log(json.calculateToTalPersons(person));