import { makeAutoObservable, observable, action } from "mobx";

class ObservableWordStore{
 words=[];
 isGetLoading = false;
 isLoading = false;

 constructor(){
    makeAutoObservable(this,{
        words: observable,
        isGetLoading: observable,
        isLoading: observable,
        getData: action,
        deleteWord: action,
        updateWord: action,
        addWord: action
    })
 }


    getData(){
   this.isGetLoading = true;
   return fetch(`/api/words`,{
    method: "GET"
   })
   .then((response)=>{
    if(!response.ok){
        throw new Error('Network Response was not ok');
    }
    return response.json();
   })
   .then((data)=>{
   this.words=data;
   
   console.log(data);
   })
   .catch((error)=>{
    console.log(error);
   })
   .finally(()=>{
    this.isGetLoading = false;
   });
}

   deleteWord(id,index){
    this.isLoading = true;
    return fetch(`/api/words/${id}/delete`,{
        method: 'POST',
        headers:{
            "Content-Type":"application/json:charset=utf-8"
        },
    })
    .then((response)=>{
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        console.log(response);
        const newArr=this.words.filter((el,i)=>{
            return i !== index;
        });
        this.words=newArr;
    })
    .catch((error)=>{
        console.log(error);
    })
     .finally(()=>{
        this.isLoading = false;
     })
   }

   updateWord(word, index){
    console.log(word);
    this.isLoading = true;
    console.log(word, index);
    const id = word.id;
    return fetch(`api/words/${id}/update`,{
        method: 'POST',
        headers: {
            'Content-Type':'application/json;charset=utf-8'
        },
        body: JSON.stringify(word),
    })
    .then((response)=>{
        if(!response.ok){
            throw new Error('Network response was not ok')
        }
        console.log(response);
    const newArr = this.words.map((el,i)=>{
      console.log(i);
        if(i==index){
           el={...word};
           console.log(word);
       }
       return el;
    });
    console.log(newArr);
    this.words = newArr;
   
    })
    .catch((error)=>{
        console.log(error);
    })
    .finally(()=>{
        this.isLoading=false;
    });
   }

   addNewWord(word){
     this.isGetLoading = true;
     return fetch(`/api/words/add`,{
        method: 'POST',
        headers: {
            'Content-Type':'application/json;charset=utf-8'
        },
        body: JSON.stringify(word),
     })
     .then((response)=>{
        if(!response.ok){
            throw new Error('Network response was not ok');
        }
        console.log(response);
        this.words.push(word);
        return true;
     })
     .catch((error)=>{
        console.log(error);
        return false;
     })
     .finally(()=>{
        this.isLoading = true;
     });
   }


}

export default ObservableWordStore;