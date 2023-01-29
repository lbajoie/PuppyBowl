// Add your cohort name to the cohortName variable below, replacing the 'COHORT-NAME' placeholder
const cohortName = '2211-FTB-ET-WEB-PT';
// Use the APIURL variable for fetch requests
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/`;


export const fetchAllPlayers = async () => {
    try {
        const response = await fetch(APIURL +  '/players/');
        const result = await response.json();
        console.log(result)
        return result;
        
      } catch (err) {
        console.error(err);
      }
};

export const fetchSinglePlayer = async (playerId) => {
    try {
        const response = await fetch(APIURL +  '/players/' + playerId);
        const result = await response.json();
        return result;
        
      } catch (err) {
        console.error(err);
      }
};

export const addNewPlayer = async (playerObj) => {
  try {
  const response = await fetch('(APIURL +  '/players/')
    method: 'POST',
    
    headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'Rufus',
        breed: 'Irish Setter',
      })
  );
 const result = await response.json();
 return result;
} catch (err) {
  console.error(err);
}
};




export const removePlayer = async (playerId) => {
    try {
        const response = await fetch(APIURL + '/players/' + playerId, {
          method: 'DELETE',
        });
        const result = await response.json();
        return result;
        
      } catch (err) {
        console.error(err);
      }
};

 