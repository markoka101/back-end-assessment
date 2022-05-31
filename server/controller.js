let user = {};

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortunes = ["A beautiful, smart, and loving person will be coming into your life.", "A feather in the hand is better than a bird in the air.", "A golden egg of opportunity falls into your lap this month.", "A person of words and not deeds is like a garden full of weeds.", "Advice, when most needed, is least heeded."];

        //choose random fortune
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];

        res.status(200).send(randomFortune);
    },

    createName: (req,res) => {
        user = req.body;
        res.sendStatus(200);
    },

    getName: (req,res) => {
        res.status(200).send(user);
    },

    clear: (req,res)=> {
        user = {};
        res.sendStatus(200);
    },

    updateName: (req,res)=> {
        const oldName = user.name;
        
        const {newName} = req.params;
        user.name = newName;

        res.status(200).send(`you have changed your name from ${oldName} to ${user.name}`);
    }
    
}