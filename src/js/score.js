export class Score{
    currenthighscore

    checkhighscore(){
        // Retrieve the saved integer value from local storage, if it exists
        var savedValue = localStorage.getItem("highscoreMinerGame");

        // If the saved value exists, display it
        if(savedValue !== null) {
            console.log("Saved value: " + savedValue);
            this.currenthighscore = savedValue
        }
    }

    sethighscore(setValue){
        // Prompt the user for a new integer value
        var newValue = setValue

        // Save the new integer value to local storage
        localStorage.setItem("highscoreMinerGame", newValue);

        console.log("Value saved successfully.");
    }
}