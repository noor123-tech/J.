
async function fetchdata(){
    try{
       const data=document.getElementById("pokimon_name" ).value.toLowerCase();
       // here we get pokimmon name
    let response=await fetch(`https://pokeapi.co/api/v2/pokemon/${data}`);
    if(!response.ok)
        {
            throw new Error("Error occured");
        }
      
   const pokiname= await response.json();
    const pokisprite=pokiname.sprites.front_default;

    const imgelement=document.getElementById("pok_sprite");
    imgelement.src=pokisprite;
    imgelement.style.display="block";
   
       
    }

    catch(error){
        console.error("there is error" , error);
    }
}
/*
async function fetchdata() {
    try {
        const data = document.getElementById("pokimon_name").value.toLowerCase();
        // Fetch Pokémon data
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${data}`);

        if (!response.ok) {
            throw new Error("Failed to fetch Pokémon");
        }

        const pokiname = await response.json();
        const pokisprite = pokiname.sprites.front_default;

        const imgelement = document.getElementById("pok_sprite");
        imgelement.src = pokisprite;
        imgelement.style.display = "block";

    } catch (error) {
        console.error("Error fetching Pokémon:", error);
    }
}
*/