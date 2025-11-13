const listOfDefinitions = [ "Affect-as-Information Theory: When your feelings give information on how you should decide, think and judge.",
    "Mood Repair Theory: When people will try to change their mood by doing things that make them feel better.",
    `Hedonistic Discounting Hypothesis: When people are in a good mood, they don’t want anything to ruin their happiness, so they avoid thinking about anything serious or negative.`,
    "Control Theory: When comparing current state to goals, people will fix the gap or state if it does not match it.",
    "Broaden-and-Build Theory: When having positive emotions, it helps you think more openly (broaden part) and allows you to develop new skills and strengths over time (build part)."
];
let currentDefinitionNum = 0;

function updateDefinition() {
    document.getElementById("definitionSentence").innerText = listOfDefinitions[currentDefinitionNum];
}

function clickLeftDefinition() {
    if (currentDefinitionNum === 0) {
        currentDefinitionNum = 4;
    } else {
        currentDefinitionNum--;
    }
    updateDefinition();
}

function clickRightDefinition() {
    if (currentDefinitionNum === 4) {
        currentDefinitionNum = 0;
    } else {
        currentDefinitionNum++;
    }
    updateDefinition();
}
