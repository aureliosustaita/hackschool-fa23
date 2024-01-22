let sent = ["test", "while", "yupi"];
let count = 0;
function sentences(sentencesList, action, sentence) {
    if (action == 'remove' && sentence) {
        for (i = sentencesList.length - 1; i >= 0; i--) {
            if (sentencesList[i] == sentence) {
                sentencesList.splice(i, 1);
                count++;
            }
        }
        console.log(sentencesList)
    }
    else {
        if (action == 'add' && sentence) {
            sentencesList.push(sentence);
            count++;
            console.log(sentencesList);
        }
        // if sentence is not specified then remove last element, e.i. sentence = null
        else if (action == 'remove' && !sentence) {
            sentence.pop();
            count++;
            console.log(sentencesList)
        }
        else {
            console.log("error");
        }
    }
    return sentencesList;
}

const sentencesErr = sentences(sent);

const sentencesAdd = sentences(sent, 'add', "I'm the best");
console.log("sentencesAdd: " + sentencesAdd);
console.log("count: " + count);

const sentencesRemove = sentences(sent, 'remove', 'yupi');
console.log("sentencesRemove: " + sentencesRemove);
console.log("count: " + count);

const sentencesNull = sentences(sent, 'remove', null);
console.log("sentencesNull: " + sentencesNull);
console.log("count: " + count);