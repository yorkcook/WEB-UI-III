class TabLink {
    constructor(tabElement){
      // assign this.tabElement to the tabElement DOM reference
      // this.tabElement;
      
      this.tabElement = tabElement;
  
      // console.log(tabElement);
  
      // Get the `data-tab` value from this.tabElement and store it here
      // this.tabData = ; 
     
      this.tabData = this.tabElement.dataset.tab;
      
      // console.log(this.tabData);
      
      // this.itemElement = document.querySelector(`.tabs[data-tab='${this.tabData}']`)
     
      
      // We need to find out if a user clicked 'all' cards or a specific category.  Follow the instructions below to accomplish this task:    
      
  
      // Check to see if this.tabData is equal to 'all'
      // if(){
      //   // If `all` is true, select all cards regardless of their data attribute values
      //   // this.cards = ;
      // } else {
      //   // else if `all` is false, only select the cards with matching this.tabData values
      //   // this.cards = ;
      // }
  
  
  
      if(this.tabData === "all"){
        this.cards = document.querySelectorAll(".card");
      } else{
        this.cards = document.querySelectorAll(`.card[data-tab='${this.tabData}']`);
      }
      
      // console.log(this.cards)
      // console.log(this.tabData)
  
       // Map over the newly converted NodeList we just created in our if statement above. Convert each this.cards element into a new instance of the TabCard class. Pass in a card object to the TabCard class. 
      // this.cards = Array.from(this.cards).map();
  
      this.cards = Array.from(this.cards).map((card) => {
        return new TabCard(card);
      });
  
      // Add a click event that invokes this.selectTab
      // this.tabElement.addEventListener();
      
      this.tabElement.addEventListener('click', () => this.selectTab());
    }
  
    selectTab(){
  
      // Select all elements with the .tab class on them
      // const tabs = document.querySelectorAll();
  
      const tabs = document.querySelectorAll('.tab');
      
      // Iterate through the NodeList removing the .active-tab class from each element
      // tabs.forEach()
      // tabs.forEach(() => )
  
      tabs.forEach((element) =>{
        element.classList.remove('active-tab')
      })
  
      // Select all of the elements with the .card class on them
      // const cards = ;
  
      const cards = document.querySelectorAll('.card');
  
      // Iterate through the NodeList setting the display style each one to 'none'
      // cards.forEach()
  
      cards.forEach((squares) => {
        squares.style.display = "none";
        // console.log(squares)
      });
      
      // Add a class of ".active-tab" to this.tabElement
      // this.tabElement;
  
      this.tabElement.classList.add("active-tab")
      // console.log(this.tabElement)
    
      // Notice we are looping through the this.cards array and invoking selectCard() from the TabCard class. Just un-comment the code and study what is happening here.
      this.cards.forEach(card => card.selectCard());
    }
  }
  
  class TabCard {
    constructor(cardElement){
      // Assign this.cardElement to the cardElement DOM reference
      // this.cardElement;
  
      this.cardElement = cardElement;
  
    }
    selectCard(){
      // Update the style of this.cardElement to display = "flex"
      // this.cardElement;
  
      this.cardElement.style.display = "flex";
      // document.querySelectorAll('.tab').style.display = "flex";
    }
  
  }
  
  /* START HERE: 
  
  - Select all classes named ".tab" and assign that value to the tabs variable
  
  - With your selection in place, now chain a .forEach() method onto the tabs variable to iterate over the DOM NodeList
  
  - In your .forEach() method's callback function, return a new instance of TabLink and pass in each tab as a parameter
  
  */
  let tabs = document.querySelectorAll('.tab');
  
  console.log(tabs)
  
  tabs.forEach((tab) => {
    return new TabLink(tab);
  })