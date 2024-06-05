function buttonClicked(currentButton)
{
    if (document.getElementById('secondHalf').hidden == true) 
    {
        document.getElementById('secondHalf').hidden = false;
        fade(document.getElementById('secondHalf'))
    }
    for (button of teamButtons)
    {
        var selectedButton = document.getElementById(button);
        if (button == currentButton)
        {
            selectedButton.style.color = "white";
            selectedButton.style.backgroundColor = "grey";
            selectedButton.style.textShadow = "1px 1px black";
        }
        else
        {
            selectedButton.style.color = "black";
            selectedButton.style.backgroundColor = "white";
            selectedButton.style.textShadow = "none";
        }
    }
    if (currentButton == 'button1')
    {
        button1Clicked = true;
        button2Clicked = false;
        button3Clicked = false;
        button4Clicked = false;
        button5Clicked = false;
        teamSize = 1;
    }
    else if (currentButton == 'button2')
    {
        button1Clicked = false;
        button2Clicked = true;
        button3Clicked = false;
        button4Clicked = false;
        button5Clicked = false;
        teamSize = 2;
    }
    else if (currentButton == 'button3')
    {
        button1Clicked = false;
        button2Clicked = false;
        button3Clicked = true;
        button4Clicked = false;
        button5Clicked = false;
        teamSize = 3;
    }
    else if (currentButton == 'button4')
    {
        button1Clicked = false;
        button2Clicked = false;
        button3Clicked = false;
        button4Clicked = true;
        button5Clicked = false;
        teamSize = 4;
    }
    else if (currentButton == 'button5')
    {
        button1Clicked = false;
        button2Clicked = false;
        button3Clicked = false;
        button4Clicked = false;
        button5Clicked = true;
        teamSize = 5;
    }
}

function fade(currentElement)
{
    var Opacity = 0.1;
    var timer = setInterval(function () {
        if (Opacity >= 1)
        {
            clearInterval(timer);
        }
        currentElement.style.opacity = Opacity;
        Opacity += Opacity * 0.1;
    }, 0.1);
}

function generate()
{
    var erasSelected = new Array();
    var minOVR = 0;
    var maxOVR = 99;
    playerPool = new Array();
    OVRPool = new Array();
    teamPool = new Array();
    if ((!currentChecked && !classicChecked && !allTimeChecked) || (currentChecked && classicChecked && allTimeChecked))
    {
        for (var era in eras)
        {
            erasSelected.push(eras[era]);
        }
    }
    else if (currentChecked && !classicChecked && !allTimeChecked)
    {
        erasSelected.push(eras[0]);
    }
    else if (!currentChecked && classicChecked && !allTimeChecked)
    {
        erasSelected.push(eras[1]);
    }
    else if (!currentChecked && !classicChecked && allTimeChecked)
    {
        erasSelected.push(eras[2]);
    }
    else if (currentChecked && classicChecked && !allTimeChecked)
    {
        erasSelected.push(eras[0]);
        erasSelected.push(eras[1]);
    }
    else if (!currentChecked && classicChecked && allTimeChecked)
    {
        erasSelected.push(eras[1]);
        erasSelected.push(eras[2]);
    }
    else if (currentChecked && !classicChecked && allTimeChecked)
    {
        erasSelected.push(eras[0]);
        erasSelected.push(eras[2]);
    }
    if (overallChecked)
    {
        if (document.getElementById('MinOvr').value != '')
        {
            minOVR = parseInt(document.getElementById('MinOvr').value);
        }
        if (document.getElementById('MaxOvr').value != '')
        {
            maxOVR = parseInt(document.getElementById('MaxOvr').value);
        }
    }
    for (var era in erasSelected)
    {
        var currentEra = erasSelected[era];
        for (var team of currentEra.keys())
        {
            var currentTeam = currentEra.get(team);
            for (var player of currentTeam.keys())
            {
                var currentPlayer = player;
                var currentPlayerOVR = currentTeam.get(player);
                if (currentPlayerOVR >= minOVR && currentPlayerOVR <= maxOVR)
                {
                    playerPool.push(currentPlayer);
                    OVRPool.push(currentPlayerOVR);
                    teamPool.push(team);
                }
            }
        }
    }
    if (playerPool.length >= (teamSize * 2))
    {
        document.getElementById('generator').style.color = "white";
        document.getElementById('generator').style.backgroundColor = "grey";
        document.getElementById('generator').style.textShadow = "1px 1px black";
        document.getElementById('generator').disabled = true;
        document.getElementById('setOne').style.opacity = 0;
        document.getElementById('setOneTeams').style.opacity = 0;
        document.getElementById('setTwo').style.opacity = 0;
        document.getElementById('setTwoTeams').style.opacity = 0;
        document.getElementById('setThree').style.opacity = 0;
        document.getElementById('setThreeTeams').style.opacity = 0;
        document.getElementById('setFour').style.opacity = 0;
        document.getElementById('setFourTeams').style.opacity = 0;
        document.getElementById('setFive').style.opacity = 0;
        document.getElementById('setFiveTeams').style.opacity = 0;
        if (document.getElementById('error').style.opacity == 1)
        {
            document.getElementById('error').style.opacity = 0;
        }
        if (document.getElementById('teamTable').hidden == true)
        {
            document.getElementById('teamTable').hidden = false;
            window.scrollTo(0, document.body.scrollHeight);
            fade(document.getElementById('teams'))
        }
        window.scrollTo(0, document.body.scrollHeight);
        if (teamSize == 1)
        {
            changePlayer('player-nameR1T1')
            changePlayer('player-nameR1T2')
        }
        else if (teamSize == 2)
        {
            changePlayer('player-nameR1T1')
            changePlayer('player-nameR1T2')
            changePlayer('player-nameR2T1')
            changePlayer('player-nameR2T2')
        }
        else if (teamSize == 3)
        {
            changePlayer('player-nameR1T1')
            changePlayer('player-nameR1T2')
            changePlayer('player-nameR2T1')
            changePlayer('player-nameR2T2')
            changePlayer('player-nameR3T1')
            changePlayer('player-nameR3T2')
        }
        else if (teamSize == 4)
        {
            changePlayer('player-nameR1T1')
            changePlayer('player-nameR1T2')
            changePlayer('player-nameR2T1')
            changePlayer('player-nameR2T2')
            changePlayer('player-nameR3T1')
            changePlayer('player-nameR3T2')
            changePlayer('player-nameR4T1')
            changePlayer('player-nameR4T2')
        }
        else if (teamSize == 5)
        {
            changePlayer('player-nameR1T1')
            changePlayer('player-nameR1T2')
            changePlayer('player-nameR2T1')
            changePlayer('player-nameR2T2')
            changePlayer('player-nameR3T1')
            changePlayer('player-nameR3T2')
            changePlayer('player-nameR4T1')
            changePlayer('player-nameR4T2')
            changePlayer('player-nameR5T1')
            changePlayer('player-nameR5T2')
        }
        if (button1Clicked)
        {
            setTimeout(fade, 1000, document.getElementById('setOne'))
            setTimeout(fade, 1000, document.getElementById('setOneTeams'))
            setTimeout(revertButton, 1500, document.getElementById('generator'))
        }
        else if (button2Clicked)
        {
            setTimeout(fade, 1000, document.getElementById('setOne'))
            setTimeout(fade, 1000, document.getElementById('setOneTeams'))
            setTimeout(fade, 2000, document.getElementById('setTwo'))
            setTimeout(fade, 2000, document.getElementById('setTwoTeams'))
            setTimeout(revertButton, 2500, document.getElementById('generator'))
        }
        else if (button3Clicked)
        {
            setTimeout(fade, 1000, document.getElementById('setOne'))
            setTimeout(fade, 1000, document.getElementById('setOneTeams'))
            setTimeout(fade, 2000, document.getElementById('setTwo'))
            setTimeout(fade, 2000, document.getElementById('setTwoTeams'))
            setTimeout(fade, 3000, document.getElementById('setThree'))
            setTimeout(fade, 3000, document.getElementById('setThreeTeams'))
            setTimeout(revertButton, 3500, document.getElementById('generator'))
        }
        else if (button4Clicked)
        {
            setTimeout(fade, 1000, document.getElementById('setOne'))
            setTimeout(fade, 1000, document.getElementById('setOneTeams'))
            setTimeout(fade, 2000, document.getElementById('setTwo'))
            setTimeout(fade, 2000, document.getElementById('setTwoTeams'))
            setTimeout(fade, 3000, document.getElementById('setThree'))
            setTimeout(fade, 3000, document.getElementById('setThreeTeams'))
            setTimeout(fade, 4000, document.getElementById('setFour'))
            setTimeout(fade, 4000, document.getElementById('setFourTeams'))
            setTimeout(revertButton, 4500, document.getElementById('generator'))
        }
        else if (button5Clicked)
        {
            setTimeout(fade, 1000, document.getElementById('setOne'))
            setTimeout(fade, 1000, document.getElementById('setOneTeams'))
            setTimeout(fade, 2000, document.getElementById('setTwo'))
            setTimeout(fade, 2000, document.getElementById('setTwoTeams'))
            setTimeout(fade, 3000, document.getElementById('setThree'))
            setTimeout(fade, 3000, document.getElementById('setThreeTeams'))
            setTimeout(fade, 4000, document.getElementById('setFour'))
            setTimeout(fade, 4000, document.getElementById('setFourTeams'))
            setTimeout(fade, 5000, document.getElementById('setFive'))
            setTimeout(fade, 5000, document.getElementById('setFiveTeams'))
            setTimeout(revertButton, 5500, document.getElementById('generator'))
        }
    }
    else if (playerPool.length < (teamSize * 2))
    {
        if (document.getElementById('error').style.opacity == 0)
        {
            document.getElementById('error').style.opacity = 1;
        }
    }
}

function revertButton()
{
    document.getElementById('generator').style.color = "black";
    document.getElementById('generator').style.backgroundColor = "white";
    document.getElementById('generator').style.textShadow = "none";
    document.getElementById('generator').disabled = false;
}

function changeCheckbox(checkbox)
{
    if (checkbox == 'Overall')
    {
        if (overallChecked == false)
        {
            overallChecked = true;
        }
        else
        {
            overallChecked = false;
        }
    }
    else if (checkbox == 'Current')
    {
        if (currentChecked == false)
        {
            currentChecked = true;
        }
        else
        {
            currentChecked = false;
        }
    }
    else if (checkbox == 'Classic')
    {
        if (classicChecked == false)
        {
            classicChecked = true;
        }
        else
        {
            classicChecked = false;
        }
    }
    else if (checkbox == 'All-Time')
    {
        if (allTimeChecked == false)
        {
            allTimeChecked = true;
        }
        else
        {
            allTimeChecked = false;
        }
    }
}

function changePlayer(elementId)
{
    var playerIndex = 0;
    var randomIndex = Math.floor(Math.random() * playerPool.length);
    var selectedPlayer = "";
    for (var player of playerPool)
    {
        if (playerIndex == randomIndex)
        {
            selectedPlayer = player;
            OVRInt = OVRPool[playerIndex];
            playerOVR = OVRInt.toString();
            playerTeam = teamPool[playerIndex];
            playerPool.splice(randomIndex, 1);
            teamPool.splice(randomIndex, 1);
            OVRPool.splice(randomIndex, 1);
            if (OVRInt < 70)
            {
                backgroundColorRGB = "rgb(205, 127, 50)";
                backgroundColorRGBHalved = "rgb(102, 63, 25)";
                auraColor = "none";
            }
            else if (OVRInt >= 70 && OVRInt <= 74)
            {
                backgroundColorRGB = "rgb(192, 192, 192)";
                backgroundColorRGBHalved = "rgb(96, 96, 96)";
                auraColor = "none";
            }
            else if (OVRInt >= 75 && OVRInt <= 79)
            {
                backgroundColorRGB = "rgb(218, 165, 32)";
                backgroundColorRGBHalved = "rgb(109, 82, 16)";
                auraColor = "none";
            }
            else if (OVRInt >= 80 && OVRInt <= 83)
            {
                backgroundColorRGB = "rgb(80, 200, 120)";
                backgroundColorRGBHalved = "rgb(40, 100, 60)";
                auraColor = "none";
            }
            else if (OVRInt >= 84 && OVRInt <= 86)
            {
                backgroundColorRGB = "rgb(15, 82, 186)";
                backgroundColorRGBHalved = "rgb(7, 41, 93)";
                auraColor = "none";
            }
            else if (OVRInt >= 87 && OVRInt <= 89)
            {
                backgroundColorRGB = "rgb(220, 20, 60)";
                backgroundColorRGBHalved = "rgb(110, 10, 30)";
                auraColor = "none";
            }
            else if (OVRInt >= 90 && OVRInt <= 91)
            {
                backgroundColorRGB = "rgb(153, 102, 204)";
                backgroundColorRGBHalved = "rgb(76, 51, 102)";
                auraColor = "none";
            }
            else if (OVRInt >= 92 && OVRInt <= 95)
            {
                backgroundColorRGB = "rgb(154, 197, 219)";
                backgroundColorRGBHalved = "rgb(77, 98, 109)";
                auraColor = "none";
            }
            else if (OVRInt >= 96 && OVRInt <= 98)
            {
                backgroundColorRGB = "rgb(255, 105, 180)";
                backgroundColorRGBHalved = "rgb(127, 52, 90)";
                auraColor = "0 0 5px 5px rgba(255, 105, 180, 0.5)";
            }
            else if (OVRInt == 99)
            {
                backgroundColorRGB = "rgb(64, 0, 0)";
                backgroundColorRGBHalved = "rgb(32, 0, 0)";
                auraColor = "0 0 5px 5px rgba(249, 139, 5, 0.5)";
            }
            break;
        }
        else
        {
            playerIndex++;
        }
    }
    document.getElementById(elementId).innerHTML = selectedPlayer;
    if (elementId == 'player-nameR1T1')
    {
        changeTeam('team-nameR1T1')
    }
    else if (elementId == 'player-nameR1T2')
    {
        changeTeam('team-nameR1T2')
    }
    else if (elementId == 'player-nameR2T1')
    {
        changeTeam('team-nameR2T1')
    }
    else if (elementId == 'player-nameR2T2')
    {
        changeTeam('team-nameR2T2')
    }
    else if (elementId == 'player-nameR3T1')
    {
        changeTeam('team-nameR3T1')
    }
    else if (elementId == 'player-nameR3T2')
    {
        changeTeam('team-nameR3T2')
    }
    else if (elementId == 'player-nameR4T1')
    {
        changeTeam('team-nameR4T1')
    }
    else if (elementId == 'player-nameR4T2')
    {
        changeTeam('team-nameR4T2')
    }
    else if (elementId == 'player-nameR5T1')
    {
        changeTeam('team-nameR5T1')
    }
    else if (elementId == 'player-nameR5T2')
    {
        changeTeam('team-nameR5T2')
    }

}

function changeTeam(elementId)
{
    document.getElementById(elementId).innerHTML = playerTeam;
    if (elementId == 'team-nameR1T1')
    {
        changeOVR('overallR1T1')
    }
    else if (elementId == 'team-nameR1T2')
    {
        changeOVR('overallR1T2')
    }
    else if (elementId == 'team-nameR2T1')
    {
        changeOVR('overallR2T1')
    }
    else if (elementId == 'team-nameR2T2')
    {
        changeOVR('overallR2T2')
    }
    else if (elementId == 'team-nameR3T1')
    {
        changeOVR('overallR3T1')
    }
    else if (elementId == 'team-nameR3T2')
    {
        changeOVR('overallR3T2')
    }
    else if (elementId == 'team-nameR4T1')
    {
        changeOVR('overallR4T1')
    }
    else if (elementId == 'team-nameR4T2')
    {
        changeOVR('overallR4T2')
    }
    else if (elementId == 'team-nameR5T1')
    {
        changeOVR('overallR5T1')
    }
    else if (elementId == 'team-nameR5T2')
    {
        changeOVR('overallR5T2')
    }
}

function changeOVR(elementId)
{
    document.getElementById(elementId).innerHTML = playerOVR;
    document.getElementById(elementId).style.boxShadow = auraColor;
    if (OVRInt == 99)
    {
        document.getElementById(elementId).style.backgroundImage = "linear-gradient(rgba(75, 168, 255, 0.1), rgba(0, 0, 0, 0.7)), linear-gradient(to left bottom, rgb(24, 143, 255), rgb(225, 166, 231), rgb(249, 162, 5))";
    }
    else
    {
        document.getElementById(elementId).style.backgroundImage = "linear-gradient(" + backgroundColorRGB + ", " + backgroundColorRGBHalved + ")";
    }
    if (elementId == 'overallR1T1')
    {
        changeOVRColor('overallColorR1T1')
    }
    else if (elementId == 'overallR1T2')
    {
        changeOVRColor('overallColorR1T2')
    }
    else if (elementId == 'overallR2T1')
    {
        changeOVRColor('overallColorR2T1')
    }
    else if (elementId == 'overallR2T2')
    {
        changeOVRColor('overallColorR2T2')
    }
    else if (elementId == 'overallR3T1')
    {
        changeOVRColor('overallColorR3T1')
    }
    else if (elementId == 'overallR3T2')
    {
        changeOVRColor('overallColorR3T2')
    }
    else if (elementId == 'overallR4T1')
    {
        changeOVRColor('overallColorR4T1')
    }
    else if (elementId == 'overallR4T2')
    {
        changeOVRColor('overallColorR4T2')
    }
    else if (elementId == 'overallR5T1')
    {
        changeOVRColor('overallColorR5T1')
    }
    else if (elementId == 'overallR5T2')
    {
        changeOVRColor('overallColorR5T2')
    }
}

function changeOVRColor(elementId)
{
    if (OVRInt == 99)
    {
        document.getElementById(elementId).style.backgroundImage = "linear-gradient(rgba(75, 168, 255, 0.1), rgba(0, 0, 0, 0.7)), linear-gradient(to left bottom, rgb(24, 143, 255), rgb(225, 166, 231), rgb(249, 162, 5))"
    }
    else
    {
        document.getElementById(elementId).style.backgroundImage = "linear-gradient(" + backgroundColorRGB + ", " + backgroundColorRGBHalved + ")";
    }
}

window.onload = fade(document.getElementById('firstHalf'));

const teamButtons = new Array("button1", "button2", "button3", "button4", "button5")

const currHawks = new Map([["Trae Young", 89], ["Dejonte Murray", 87], ["Clint Capela", 81], ["Onyeka Okongwu", 81], ["Jalen Johnson", 81], ["Bogdan Bogdanovic", 80], ["De'Andre Hunter", 80], ["Saddiq Bey", 79], ["AJ Griffin", 74], ["Bruno Fernando", 74], ["Kobe Bufkin", 72], ["Wesley Matthews", 72], ["Dylan Windler", 72], ["Garrison Mathews", 72], ["Vit Krejci", 72], ["Trent Forrest", 70], ["Mouhamed Gueye", 70], ["Seth Lundy", 68]]);
const currCeltics = new Map([["Jason Tatum", 95], ["Jaylen Brown", 91], ["Robert Williams III", 83], ["Malcolm Brogdon", 83], ["Marcus Smart", 82], ["Al Horford", 80], ["Derrick White", 80], ["Danilo Gallinari", 78], ["Grant Williams", 76], ["Blake Griffin", 75], ["Mike Muscala", 75], ["Sam Hauser", 75], ["Luke Kornet", 74], ["Payton Pritchard", 73], ["Justin Champagnie", 70], ["Mfiondu Kabengele", 70], ["JD Davison", 69]]);
const currNets = new Map([["Mikal Bridges", 87], ["Nicolas Claxton", 84], ["Spencer Dinwiddie", 83], ["Cameron Johnson", 80], ["Ben Simmons", 78], ["Cameron Thomas", 78], ["Dorian Finney-Smith", 77], ["Seth Curry", 77], ["Joe Harris", 76], ["Edmond Summer", 76], ["Royce O'Neale", 76], ["Yuta Watanabe", 75], ["Patty Mills", 74], ["Day'Ron Sharpe", 73], ["David Duke Jr.", 72], ["Raiquan Gray", 69], ["Dru Smith", 67]]);
const currHornets = new Map([["LaMelo Ball", 86], ["Terry Rozier III", 81], ["Kelly Oubre Jr.", 80], ["Gordon Hayward", 79], ["Mark Williams", 78], ["Nick Richards", 78], ["P.J. Washington", 77], ["Cody Martin", 75], ["Dennis Smith Jr.", 74], ["Svialtoslav Mykhailiuk", 74], ["Theo Maledon", 74], ["James Bouknight", 72], ["Bryce McGowens", 72], ["J.T. Thor", 72], ["Kai Jones", 72], ["Kobi Simmons", 68], ["Xavier Sneed", 68]]);
const currBulls = new Map([["Zach LaVine", 87], ["DeMar DeRozan", 87], ["Nikola Vucevic", 84], ["Lonzo Ball", 82], ["Andre Drummond", 78], ["Patrick Williams", 77], ["Javonte Green", 77], ["Patrick Beverley", 76], ["Alex Caruso", 76], ["Coby White", 76], ["Derrick Jones Jr.", 76], ["Ayo Dosunmu", 74], ["Terry Taylor", 74], ["Dalen Terry", 73], ["Marko Simonović", 70], ["Justin Lewis", 67], ["Carlik Jones", 67]]);
const currCavs = new Map([["Donovan Mitchell", 92], ["Darius Garland", 87], ["Evan Mobley", 86], ["Jarrett Allen", 84], ["Caris LeVert", 77], ["Isaac Okoro", 76], ["Ricky Rubio", 75], ["Cedi Osman", 75], ["Robin Lopez", 74], ["Raul Neto", 74], ["Danny Green", 73], ["Lamar Stevens", 73], ["Dean Wade", 73], ["Dylan Windler", 71], ["Sam Merrill", 71], ["Isaiah Mobley", 70], ["Mamadi Diakite", 69]]);
const currMavs = new Map([["Luka Doncic", 97], ["Kyrie Irving", 91], ["Christian Wood", 82], ["Tim Hardaway Jr.", 78], ["Jaden Hardy", 77], ["Dwight Powell", 77], ["Reggie Bullock", 77], ["JaVale McGee", 76], ["Josh Green", 76], ["Maxi Kleber", 75], ["Markieff Morris", 74], ["Davis Bertans", 73], ["Justin Holiday", 73], ["Frank Ntilikina", 72], ["Theo Pinson", 72], ["McKinley Wright IV", 68], ["A.J. Lawson", 67]]);
const currNuggets = new Map([["Nikola Jokic", 97], ["Jamal Murray", 84], ["Michael Porter Jr.", 83], ["Aaron Gordon", 83], ["Bruce Brown Jr.", 77], ["Kentavious Caldwell-Pope", 77], ["Thomas Bryant", 76], ["Reggie Jackson", 75], ["Zeke Nnaji", 75], ["Jeff Green", 75], ["Christian Braun", 73], ["Ish Smith", 73], ["Vlatko Cancar", 73], ["DeAndre Jordan", 72], ["Peyton Watson", 71], ["Collin Gillespie", 68], ["Jack White", 67]]);
const currPistons = new Map([["Cade Cunningham", 84], ["Bojan Bogdanovic", 82], ["Jaden Ivey", 81], ["Jalen Duren", 80], ["James Wiseman", 79], ["Marvin Bagley III", 79], ["Isaiah Stewart", 78], ["Hamidou Diallo", 77], ["Alec Burks", 77], ["Killian Hayes", 75], ["R.J. Hampton", 74], ["Cory Joseph", 74], ["Eugene Omoruyi", 74], ["Isaiah Livers", 74], ["Rodney McGruder", 73], ["Jared Rhoden", 69], ["Buddy Boeheim", 68]]);
const currWarriors = new Map([["Stephen Curry", 96], ["Klay Thompson", 86], ["Jordan Poole", 84], ["Draymond Green", 83], ["Andrew Wiggins", 82], ["Jonathan Kuminga", 78], ["Kevon Looney", 78], ["Donte DiVincenzo", 77], ["Gary Peyton II", 77], ["JaMychal Green", 77], ["Andre Iguodala", 75], ["Ty Jerome", 75], ["Moses Moody", 73], ["Anthony Lamb", 73], ["Patrick Baldwin Jr.", 72], ["Ryan Rollins", 68], ["Lester Quiñones", 67]]);
const currRockets = new Map([["Jalen Green", 84], ["Alperen Sengun", 83], ["Kevin Porter Jr.", 81], ["Jabari Smith Jr.", 79], ["Tari Eason", 79], ["Kenyon Martin Jr.", 79], ["Jae'Sean Tate", 77], ["Josh Christopher", 75], ["Frank Kaminsky", 75], ["Usman Garuba", 74], ["Boban Marjanovic", 73], ["Willie Cauley-Stein", 73], ["TyTy Washington", 72], ["D.J. Augustin", 70], ["Daishen Nix", 70], ["Trevor Hudgins", 68], ["Darius Days", 67]]);
const currPacers = new Map([["Tyrese Haliburton", 89], ["Myles Turner", 85], ["Buddy Hield", 80], ["Bennedict Mathurin", 79], ["T.J. McConnell", 78], ["Andrew Nembhard", 77], ["Isaiah Jackson", 76], ["Jalen Smith", 76], ["Jordan Nwora", 76], ["Aaron Nesmith", 76], ["Chris Duarte", 75], ["Oshae Brissett", 73], ["George Hill", 73], ["James Johnson", 71], ["Kendall Brown", 69], ["Gabe York", 67]]);
const currClippers = new Map([["Kawhi Leonard", 92], ["Paul George", 89], ["Russell Westbrook", 81], ["Ivica Zubac", 81], ["Mason Plumlee", 80], ["Norman Powell", 79], ["Bones Hyland", 77], ["Robert Covington", 77], ["Terance Mann", 77], ["Eric Gordon", 76], ["Marcus Morris Sr.", 75], ["Nicolas Batum", 74], ["Brandon Boston Jr.", 74], ["Amir Coffey", 72], ["Jason Preston", 71], ["Moussa Diabate", 69], ["Xavier Moon", 67]]);
const currLakers = new Map([["LeBron James", 97], ["Anthony Davis", 94], ["D'Angelo Russell", 83], ["Austin Reaves", 81], ["Jarred Vanderbilt", 80], ["Dennis Schroder", 77], ["Mohammed Bamba", 77], ["Rui Hachimura", 76], ["Malik Beasley", 76], ["Lonnie Walker IV", 76], ["Wenyen Gabriel", 75], ["Tristian Thompson", 73], ["Troy Brown Jr.", 73], ["Max Christie", 71], ["Shaquille Harrison", 69], ["Scotty Pippen Jr.", 68], ["Cole Swider", 67]]);
const currGrizzlies = new Map([["Ja Morant", 92], ["Jared Jackson Jr.", 87], ["Desmond Bane", 85], ["Steven Adams", 82], ["Tyus Jones", 80], ["Dillon Brooks", 79], ["Brandon Clarke", 78], ["Xavier Tillman", 78], ["Santi Aldama", 77], ["Luke Kennard", 77], ["David Roddy", 73], ["Ziarie Williams", 72], ["Jake LaRavia", 72], ["John Konchar", 72], ["Kenneth Lofton Jr.", 72], ["Vince Williams Jr.", 69], ["Jacob Gilyard", 69]]);
const currHeat = new Map([["Jimmy Butler", 93], ["Bam Adebayo", 87], ["Tyler Herro", 84], ["Kyle Lowry", 77], ["Kevin Love", 76], ["Victor Oladipo", 76], ["Max Strus", 76], ["Caleb Martin", 76], ["Gabe Vincent", 75], ["Cody Zeller", 75], ["Omer Yurtseven", 75], ["Nikola Jovic", 74], ["Duncan Robinson", 74], ["Orlando Robinson", 72], ["Udonis Haslem", 70], ["Jamal Cain", 70], ["Haywood Highsmith", 70]]);
const currBucks = new Map([["Giannis Antetokounmpo", 97], ["Jrue Holiday", 88], ["Khris Middleton", 86], ["Brook Lopez", 85], ["Bobby Portis", 82], ["Jae Crowder", 78], ["Joe Ingles", 76], ["Pat Connaughton", 75], ["Grayson Allen", 75], ["Jevon Carter", 75], ["Goran Dragic", 73], ["Wesley Matthews", 72], ["MarJon Beauchamp", 72], ["Meyers Leonard", 72], ["Thanasis Antetokounmpo", 72], ["A.J. Green", 71], ["Lindell Wigginton", 70]]);
const currWolves = new Map([["Anthony Edwards", 86], ["Karl-Anthony Towns", 86], ["Rudy Gobert", 84], ["Mike Conley", 80], ["Naz Reid", 80], ["Jaden McDaniels", 79], ["Kyle Anderson", 78], ["Jaylen Nowell", 77], ["Taurean Prince", 75], ["Nickeil Alexander-Walker", 74], ["Austin Rivers", 74], ["Jordan McLaughlin", 73], ["Nathan Knight", 73], ["Luke Garza", 73], ["Wendell Moore Jr.", 71], ["Matt Ryan", 71], ["Josh Minott", 70]]);
const currPels = new Map([["Zion Williamson", 92], ["Brandon Ingram", 87], ["C.J. McCollum", 84], ["Jonas Valanciunas", 83], ["Trey Murphy", 80], ["Herbert Jonas", 79], ["Larry  Nance Jr.", 77], ["Jose Alvarado", 77], ["Willy Hernangomez", 76], ["Dyson Daniels", 75], ["Josh Richardson", 75], ["Jaxson Hayes", 75], ["Naji Marshall", 75], ["Kira Lewis Jr.", 73], ["E.J. Liddell", 70], ["Garrett Temple", 70], ["Dereon Seabron", 67]]);
const currKnicks = new Map([["Julius Randle", 87], ["Jalen Brunson", 87], ["R.J. Barrett", 82], ["Immanuel Quickley", 82], ["Mitchell Robinson", 80], ["Josh Hart", 79], ["Quentin Grimes", 78], ["Obi Toppin", 77], ["Derrick Rose", 76], ["Jericho Sims", 76], ["Isaiah Hartenstein", 76], ["Evan Fournier", 74], ["Isaiah Roby", 74], ["Miles McBride", 73], ["Duane Washington Jr.", 73], ["DaQuan Jeffries", 70], ["Trevor Keels", 68]]);
const currThunder = new Map([["Shai Gilgeous-Alexander", 94], ["Josh Giddey", 84], ["Jalen Williams", 82], ["Luguentz Dort", 78], ["Isaiah Joe", 78], ["Chet Holmgren", 77], ["Aleksej Pokusevski", 77], ["Kenrich Williams", 77], ["Dario Saric", 76], ["Jaylin Williams", 75], ["Tre Mann", 75], ["Jeremiah Robinson-Earl", 75], ["Aaron Wiggins", 74], ["Lindy Waters III", 74], ["Ousmane Deing", 73], ["Jared Butler", 73], ["Oliver Sarr", 67]]);
const currMagic = new Map([["Paolo Banchero", 84], ["Franz Wagner", 84], ["Wendell Carter Jr.", 82], ["Markelle Fultz", 82], ["Cole Anthony", 80], ["Jonathan Isaac", 78], ["Moritz Wagner", 78], ["Bol Bol", 78], ["Jalen Suggs", 76], ["Goga Bitadze", 75], ["Gary Harris", 75], ["Chuma Okeke", 74], ["Caleb Houstan", 71], ["Michael Carter-Williams", 71], ["Admiral Schofield", 70], ["Kevon Harris", 69], ["Jay Scrubb", 67]]);
const currSixers = new Map([["Joel Embiid", 97], ["James Harden", 90], ["Tyrese Maxey", 84], ["Tobias Harris", 81], ["De'Anthony Melton", 78], ["Shake Milton", 77], ["Montrezl Harrell", 76], ["Jalen McDaniels", 76], ["Paul Reed", 76], ["P.J. Tucker", 75], ["Dewayne Dedmon", 74], ["Danuel House Jr.", 73], ["Georges Niang", 73], ["Jaden Springer", 71], ["Furkan Korkmaz", 71], ["Mac McClung", 69], ["Louis King", 68]]);
const currSuns = new Map([["Kevin Durant", 96], ["Devin Booker", 92], ["Chris Paul", 87], ["Deandre Ayton", 84], ["Josh Okogie", 78], ["T.J. Warren", 77], ["Cameron Payne", 77], ["Darius Bazley", 76], ["Terrance Ross", 76], ["Landry Shamet", 75], ["Torrey Craig", 75], ["Jock Landale", 75], ["Damion Lee", 75], ["Bismack Biyombo", 75], ["Saben Lee", 73], ["Ish Wainright", 73]]);
const currBlazers = new Map([["Damian Lillard", 95], ["Anfernee Simons", 83], ["Jusuf Nurkic", 82], ["Jerami Grant", 82], ["Shaedon Sharpe", 78], ["Drew Eubanks", 77], ["Tredon Watford", 77], ["Matisse Thybulle", 76], ["Nassir Little", 75], ["Cam Reddish", 75], ["Justise Winslow", 74], ["Skylar Mays", 72], ["Jabari Walker", 71], ["Keon Johnson", 71], ["Kevin Knox", 71], ["Jeenathan Williams", 70], ["Justin Minaya", 69]]);
const currKings = new Map([["De'Aaron Fox", 89], ["Domantas Sabonis", 89], ["Kevin Huerter", 81], ["Malik Monk", 80], ["Keegan Murray", 79], ["Harrison Barnes", 79], ["Trey Lyles", 77], ["Terence Davis", 76], ["Chimezie Metu", 76], ["Davion Mitchell", 75], ["Richaun Holmes", 75], ["Alex Len", 74], ["P.J. Dozier", 74], ["Kessler Edwards", 71], ["Neemais Queta", 70], ["Matthew Dellavedova", 69], ["Keon Ellis", 68]]);
const currSpurs = new Map([["Keldon Johnson", 83], ["Devin Vassell", 81], ["Zach Collins", 80], ["Tre Jones", 79], ["Jeremy Sochan", 78], ["Malaki Branham", 76], ["Keita Bates-Diop", 76], ["Devonte' Graham", 76], ["Charles Bassey", 75], ["Doug McDermott", 74], ["Khem Birch", 74], ["Sandro Mamukelashvili", 73], ["Gorgui Dieng", 73], ["Romeo Langford", 73], ["Blake Wesley", 72], ["Dominick Barlow", 68], ["Julian Champagnie", 68]]);
const currRaptors = new Map([["Pascal Siakam", 87], ["Scottie Barnes", 83], ["Fred VanVleet", 83], ["OG Anunoby", 82], ["Jakob Poeltl", 81], ["Gary Trent Jr.", 80], ["Chris Boucher", 79], ["Precious Achiuwa", 78], ["Thaddeus Young", 76], ["Otto Porter Jr.", 76], ["Dalano Banton", 75], ["Will Barton", 74], ["Christian Koloko", 73], ["Malachi Flynn", 73], ["Joe Wieskamp", 70], ["Jeff Dowtin", 69], ["Ron Harper Jr.", 68]]);
const currJazz = new Map([["Lauri Markkanen", 86], ["Walker Kessler", 83], ["Jordan Clarkson", 82], ["Collin Sexton", 81], ["Talen Horton-Tucker", 79], ["Kelly Olynyk", 79], ["Ochai Agbaji", 77], ["Kris Dunn", 76], ["Rudy Gay", 75], ["Simone Fontecchio", 74], ["Vernon Carey Jr.", 73], ["Damian Jones", 73], ["Juan Toscano-Anderson", 72], ["Udoka Azubuike", 72], ["Luka Samanic", 71], ["Johnny Juzang", 68], ["Micah Potter", 67]]);
const currWiz = new Map([["Bradley Beal", 87], ["Kristaps Porzingis", 87], ["Kyle Kuzma", 83], ["Monte Morris", 79], ["Corey Kispert", 78], ["Delon Wright", 78], ["Daniel Gafford", 77], ["Dani Avdija", 76], ["Kendrick Nunn", 75], ["Jordan Goodwin", 74], ["Taj Gibson", 73], ["Johnny Davis", 72], ["Anthony Gill", 72], ["Xavier Cooks", 71], ["Isaiah Todd", 70], ["Quenton Jackson", 68], ["Jay Huff", 67]]);
const current = new Map([["Atlanta Hawks", currHawks], ["Boston Celtics", currCeltics], ["Brooklyn Nets", currNets], ["Charlotte Hornets", currHornets], ["Chicago Bulls", currBulls], ["Cleveland Cavaliers", currCavs], ["Dallas Mavericks", currMavs], ["Denver Nuggets", currNuggets], ["Detroit Pistons", currPistons], ["Golden State Warriors", currWarriors], ["Houston Rockets", currRockets], ["Indiana Pacers", currPacers], 
    ["Los Angeles Clippers", currClippers], ["Los Angeles Lakers", currLakers], ["Memphis Grizzlies", currGrizzlies], ["Miami Heat", currHeat], ["Milwaukee Bucks", currBucks], ["Minnesota Timberwolves", currWolves], ["New Orleans Pelicans", currPels], ["New York Knicks", currKnicks], ["Oklahoma City Thunder", currThunder], ["Orlando Magic", currMagic], ["Philadelphia 76ers", currSixers], ["Phoenix Suns", currSuns],
    ["Portland Trail Blazers", currBlazers], ["Sacramento Kings", currKings], ["San Antonio Spurs", currSpurs], ["Toronto Raptors", currRaptors], ["Utah Jazz", currJazz], ["Washington Wizards", currWiz]]);

const classSixers76 = new Map([["Julius Erving", 95], ["George McGinnis", 86], ["Doug Collins", 85], ["Henry Bibby", 81], ["World B. Free", 80], ["Steve Mix", 79], ["Darryl Dawkins", 75], ["Joe Bryant", 72], ["Mike Dunleavy", 72], ["Harvey Catchings", 71]]);
const classSixers00 = new Map([["Allen Iverson", 94], ["Dikembe Mutombo", 83], ["Aaron McKie", 81], ["Eric Snow", 80], ["Tyrone Hill", 76], ["George Lynch", 75], ["Speedy Claxton", 74], ["Kevin Ollie", 73], ["Rodney Buford", 71], ["Jumaine Jones", 71], ["Pepe Sanchez", 70], ["Matt Geiger", 69], ["Roshown McLeod", 68], ["Todd MacCulloch", 68], ["Raja Bell", 66]]);
const classBucks70 = new Map([["Kareem Abdul-Jabbar", 98], ["Oscar Robertson", 93], ["Bob Dandridge", 85], ["Lucius Allen", 77], ["Greg Smith", 75], ["Jon McGlocklin", 74], ["Dick Cunningham", 72]]);
const classBucks84 = new Map([["Sidney Moncrief", 91], ["Terry Cummings", 88], ["Paul Pressey", 86], ["Alton Lister", 79], ["Ricky Pierce", 76], ["Mike Dunleavy", 74], ["Kevin Grevey", 73], ["Randy Breuer", 73], ["Craig Hodges", 73], ["Charles Davis", 72], ["Kenny Fields", 69], ["Paul Mokeski", 66]]);
const classBulls85 = new Map([["Michael Jordan", 92], ["Charles Oakley", 83], ["George Gervin", 82], ["Sidney Green", 79], ["Gene Banks", 77], ["Kyle Macy", 72], ["John Paxson", 70], ["Rod Higgins", 70], ["Mike Holton", 70], ["Dave Corzine", 69]]);
const classBulls88 = new Map([["Michael Jordan", 98], ["Scottie Pippen", 82], ["Horace Grant", 82], ["Bill Cartwright", 75], ["John Paxson", 75], ["Craig Hodges", 75], ["Sam Vincent", 74], ["Dave Corzine", 73], ["Charles Davis", 70], ["Brad Sellers", 69], ["Will Perdue", 68]]);
const classBulls90 = new Map([["Michael Jordan", 99], ["Scottie Pippen", 89], ["Horace Grant", 82], ["John Paxson", 78], ["B.J. Armstrong", 75], ["Stacey King", 74], ["Bill Cartwright", 74], ["Scott Williams", 73], ["Will Perdue", 72], ["Dennis Hopson", 72], ["Craig Hodges", 72], ["Cliff Levingston", 69]]);
const classBulls92 = new Map([["Michael Jordan", 99], ["Scottie Pippen", 94], ["Horace Grant", 83], ["B.J. Armstrong", 79], ["Bill Cartwright", 74], ["Rodney McCray", 74], ["Stacey King", 73], ["Will Perdue", 73], ["Scott Williams", 73], ["John Paxson", 72], ["Darrell Walker", 68], ["Ed Nealy", 66]]);
const classBulls95 = new Map([["Michael Jordan", 99], ["Scottie Pippen", 96], ["Dennis Rodman", 89], ["Toni Kukoc", 83], ["Ron Harper", 80], ["Steve Kerr", 79], ["Luc Longley", 75], ["Randy Brown", 74], ["Jason Caffey", 71], ["Jud Buechler", 71], ["John Salley", 69], ["Dickey Simpkins", 69], ["Bill Wennington", 67], ["James Edwards", 66]]);
const classBulls97 = new Map([["Michael Jordan", 98], ["Scottie Pippen", 90], ["Dennis Rodman", 85], ["Toni Kukoc", 83], ["Ron Harper", 80], ["Luc Longley", 78], ["Scott Burrell", 75], ["Randy Brown", 74], ["Steve Kerr", 73], ["Dickey Simpkins", 68], ["Jud Buechler", 68], ["Bill Wennington", 66]]);
const classBulls10 = new Map([["Derrick Rose", 95], ["Carlos Boozer", 86], ["Joakim Noah", 86], ["Taj Gibson", 78], ["Kyle Korver", 76], ["Ronnie Brewer", 76], ["C.J. Watson", 75], ["Omer Asik", 74], ["Kurt Thomas", 73], ["Brian Scalabrine", 70], ["Keith Bogans", 69]]);
const classCavs89 = new Map([["Mark Price", 89], ["Brad Daugherty", 85], ["Larry Nance", 85], ["Hot Rod Williams", 82], ["Craig Ehlo", 79], ["Steve Kerr", 76], ["Winston Bennett", 75], ["Chucky Brown", 71], ["Tree Rollins", 68], ["Paul Mokeski", 64]]);
const classCavs06 = new Map([["LeBron James", 97], ["Zydrunas Ilgauskas", 83], ["Larry Hughes", 82], ["Anderson Varejao", 77], ["Donyell Marshall", 76], ["Drew Gooden", 76], ["Daniel Gibson", 75], ["Damon Jones", 74], ["Scor Pollard", 73], ["Eric Snow", 73], ["David Wesley", 71], ["Shannon Brown", 66]]);
const classCavs15 = new Map([["Lebron James", 99], ["Kyrie Irving", 93], ["Kevin Love", 87], ["J.R. Smith", 80], ["Tristan Thompson", 79], ["Matthew Dellavedova", 76], ["Richard Jefferson", 75], ["Mo Williams", 74], ["Channing Frye", 74], ["Dahntay Jones", 72], ["Jordan McRae", 70]]);
const classCelt64 = new Map([["Bill Russell", 98], ["Sam Jones", 89], ["K.C. Jones", 85], ["Tom Sanders", 85], ["John Havlicek", 83], ["Tom Heisohn", 80], ["Mel Counts", 75], ["Larry Siegfried", 71], ["Gerry Ward", 68], ["John Thompson", 68]]);
const classCelt85 = new Map([["Larry Bird", 97], ["Kevin McHale", 92], ["Robert Parish", 87], ["Dennis Johnson", 84], ["Bill Walton", 82], ["Danny Ainge", 78], ["Scott Wedman", 75], ["Jerry Sichting", 75], ["Greg Kite", 69], ["Sam Vincent", 69]]);
const classCelt07 = new Map([["Kevin Garnett", 94], ["Paul Pierce", 92], ["Ray Allen", 88], ["Rajon Rondo", 86], ["Kendrick Perkins", 77], ["Leon Powe", 77], ["James Posey", 76], ["Tony Allen", 76], ["Glen Davis", 75], ["Sam Cassell", 74], ["P.J. Brown", 74], ["Eddie House", 74], ["Brian Scalabrine", 73], ["Scot Pollard", 73]]);
const classClips13 = new Map([["Chris Paul", 94], ["Blake Griffin", 91], ["DeAndre Jordan", 87], ["JJ Redick", 82], ["Jamal Crawford", 81], ["Darren Collison", 78], ["Jared Dudley", 77], ["Ryan Hollins", 77], ["Danny Granger", 76], ["Hedo Turkoglu", 76], ["Matt Barnes", 76], ["Glen Davis", 73], ["Reggie Bullock", 70]]);
const classGrizz05 = new Map([["Pau Gasol", 91], ["Shane Battier", 83], ["Mike Miller", 82], ["Eddie Jones", 79], ["Damon Stoudamire", 76], ["Bobby Jackson", 76], ["Hakim Warrick", 74], ["Dahntay Jones", 72], ["Brian Cardinal", 72]]);
const classGrizz12 = new Map([["Zach Randolph", 87], ["Mike Conley", 86], ["Tony Allen", 79], ["Ed Davis", 78], ["Keyon Dooling", 73], ["Tony Wroten", 71]]);
const classHawks85 = new Map([["Dominique Wilkins", 92], ["Doc Rivers", 83], ["Kevin Willis", 79], ["Johnny Davis", 79], ["Tree Rollins", 78], ["Spud Webb", 78], ["Randy Wittman", 77], ["Cliff Levingston", 76], ["Jon Koncak", 76], ["Antoine Carr", 69], ["Scott Hastings", 68]]);
const classHeat96 = new Map([["Alonzo Mourning", 93], ["Tim Hardaway", 88], ["P.J. Brown", 84], ["Jamal Mashburn", 80], ["Dan Majerle", 80], ["Willie Anderson", 79], ["Isaac Austin", 78], ["Ed Pinckney", 77], ["Keith Askins", 74], ["John Crotty", 72], ["Bruce Bowen", 71], ["Gary Grant", 69], ["Matt Fish", 68]]);
const classHeat05 = new Map([["Dwyane Wade", 96], ["Shaquille O'Neal", 90], ["Jason Williams", 79], ["Antoine Walker", 79], ["Gary Payton", 76], ["Alonzo Mourning", 76], ["Udonis Haslem", 76], ["James Posey", 75], ["Michael Doleac", 71], ["Shandon Anderson", 71], ["Derek Anderson", 69], ["Dorell Wright", 68]]);
const classHeat12 = new Map([["LeBron James", 99], ["Dwyane Wade", 92], ["Chris Bosh", 87], ["Ray Allen", 78], ["Shane Battier", 77], ["Mike Miller", 76], ["Mario Chalmers", 76], ["Rashad Lewis", 74], ["Chris Andersen", 74], ["Udonis Haslem", 73], ["Juwan Howard", 72]]);
const classHorr92 = new Map([["Alonzo Mourning", 85], ["Larry Johnson", 85], ["Muggsy Bogues", 82], ["Dell Curry", 80], ["Kendall Gill", 80], ["Johnny Newman", 79], ["Kenny Gattison", 78], ["Mike Gminski", 74], ["Sideny Green", 73], ["David Wingate", 71], ["Tony Bennett", 68], ["Kevin Lynch", 65]]);
const classJazz97 = new Map([["Karl Malone", 97], ["John Stockton", 94], ["Jeff Hornacek", 82], ["Adam Keefe", 77], ["Bryon Russell", 76], ["Howard Eisley", 76], ["Shandon Anderson", 75], ["Chris Morris", 72], ["Jacque Vaughn", 70], ["Greg Ostertag", 70], ["Antonie Carr", 69], ["Greg Foster", 69]]);
const classKings01 = new Map([["Peja Stojakovic", 87], ["Vlade Divac", 87], ["Mike Bibby", 83], ["Doug Christie", 83], ["Bobby Jackson", 80], ["Scot Pollard", 78], ["Hedo Turkoglu", 76], ["Lawrence Funderburke", 75], ["Gerald Wallace", 75], ["Chucky Brown", 70]]);
const classKnicks71 = new Map([["Walt Frazier", 93], ["Jerry Lewis", 86], ["Willis Reed", 84], ["Dave DeBusschere", 83], ["Bill Bradley", 80], ["Earl Monroe", 78], ["Dick Barnett", 78], ["Phil Jackson", 75], ["Eddie Mast", 69], ["Luther Rackley", 67]]);
const classKnicks94 = new Map([["Patrick Ewing", 91], ["John Starks", 83], ["Charles Oakley", 81], ["Derek Harper", 79], ["Charles Smith", 79], ["Hubert Davis", 76], ["Greg Anthony", 75], ["Doug Christie", 70], ["Charlie Ward", 70], ["Anthony Bonner", 70], ["Monty Williams", 68], ["Herb Williams", 67]]);
const classKnicks98 = new Map([["Patrick Ewing", 85], ["Latrell Sprewell", 85], ["Allan Houston", 83], ["Larry Johnson", 81], ["Marcus Camby", 80], ["Kurt Thomas", 76], ["Charlie Ward", 75], ["Chris Dudley", 71], ["David Wingate", 68], ["Herb Williams", 67]]);
const classKnicks11 = new Map([["Carmelo Anthony", 91], ["Amar'e Stoudemire", 89], ["Tyson Chandler", 85], ["Jeremy Lin", 84], ["J.R. Smith", 80], ["Steve Novak", 77], ["Landry Fields", 75], ["Baron Davis", 74], ["Jared Jeffries", 74], ["Mike Bibby", 72]]);
const classLakers64 = new Map([["Jerry West", 94], ["Elgin Baylor", 92], ["Rudy LaRusso", 82], ["Dick Barnett", 79], ["Don Nelson", 69], ["Jim King", 67]]);
const classLakers70 = new Map([["Jerry West", 96], ["Wilt Chamberlain", 93], ["Gail Goodrich", 83], ["Elgin Baylor", 76], ["Fred Hetzel", 76], ["Rick Roberson", 75], ["Keith Erickson", 74], ["Willie McCarter", 68]]);
const classLakers86 = new Map([["Magic Johnson", 97], ["Kareem Abdul-Jabbar", 95], ["James Worthy", 86], ["Michael Cooper", 86], ["Byron Scott", 85], ["A.C. Green", 82], ["Mychal Thompson", 82], ["Kurt Rambis", 80], ["Wes Matthews", 73], ["Billy Thompson", 71], ["Frank Brickowski", 68]]);
const classLakers90 = new Map([["Magic Johnson", 93], ["James Worthy", 88], ["Vlade Divac", 77], ["Byron Scott", 76], ["A.C. Green", 76], ["Sam Perkins", 75], ["Terry Teagle", 75], ["Larry Drew", 71], ["Mychal Thompson", 70], ["Elden Campbell", 69], ["Irving Thomas", 69]]);
const classLakers97 = new Map([["Shaquille O'Neal", 94], ["Kobe Bryant", 84], ["Nick Van Exel", 84], ["Eddie Jones", 83], ["Rick Fox", 80], ["Elden Campbell", 76], ["Derek Fisher", 75], ["Robert Horry", 74], ["Corie Blount", 70], ["Jon Barry", 69]]);
const classLakers00 = new Map([["Kobe Bryant", 98], ["Shaquille O'Neal", 98], ["Horace Grant", 80], ["Rick Fox", 79], ["Derek Fisher", 77], ["Robert Horry", 76], ["Isaiah Rider", 75], ["Ron Harper", 73], ["Mark Madsen", 73], ["Mike Penberthy", 73], ["Tyronn Lue", 72], ["Brian Shaw", 72], ["Devean George", 71], ["Greg Foster", 69]]);
const classLakers03 = new Map([["Shaquille O'Neal", 97], ["Kobe Bryant", 96], ["Karl Malone", 84], ["Gary Payton", 83], ["Horace Grant", 75], ["Rick Fox", 75], ["Devean George", 75], ["Byron Russell", 74], ["Brian Cook", 74], ["Derek Fisher", 73], ["Luke Walton", 73], ["Kareem Rush", 70], ["Jamal Sampson", 68]]);
const classMagic94 = new Map([["Shaquille O'Neal", 94], ["Penny Hardaway", 86], ["Nick Anderson", 83], ["Horace Grant", 82], ["Dennis Scott", 82], ["Brian Shaw", 74], ["Darrell Armstrong", 73], ["Donald Royal", 73], ["Jeff Turner", 71], ["Tree Rollins", 70], ["Anthony Bowie", 70]]);
const classMavs02 = new Map([["Dirk Nowitzki", 92], ["Steve Nash", 88], ["Michael Finley", 82], ["Nick Van Exel", 82], ["Rael LaFrentz", 78], ["Shawn Bradley", 75], ["Eduardo Najera", 75], ["Walt Williams", 74], ["Tariq Abdul-Wahad", 73], ["Raja Bell", 72], ["Avery Johnson", 71], ["Adrian Griffin", 71], ["Popeye Jones", 68], ["Evan Eschmeyer", 68]]);
const classMavs10 = new Map([["Drik Nowitzki", 96], ["Jason Terry", 86], ["Tyson Chandler", 84], ["Shawn Marion", 83], ["Jason Kidd", 82], ["Caron Butler", 80], ["Peja Stojakovic", 77], ["DeShawn Stevenson", 77], ["J.J. Barea", 77], ["Corey Brewer", 76]]);
const classNets01 = new Map([["Jason Kidd", 94], ["Kenyon Martin", 83], ["Keith Van Horn", 82], ["Kerry Kittles", 82], ["Richard Jefferson", 78], ["Brian Scalabrine", 72], ["Aaron Williams", 72], ["Todd MacCulloch", 72], ["Jason Collis", 71]]);
const classNuggs93 = new Map([["Dikembe Mutombo", 84], ["Mahmoud Abdul-Rauf", 84], ["LaPhonso Ellis", 81], ["Reggie Williams", 78], ["Bryant Stith", 77], ["Robert Pack", 76], ["Rodney Rogers", 74], ["Tom Hammonds", 73]])
const classNuggs07 = new Map([["Carmelo Anthony", 93], ["Allen Iverson", 89], ["Marcus Camby", 87], ["Kenyon Martin", 80], ["J.R. Smith", 79], ["Eduardo Najera", 75], ["Steven Hunter", 73], ["Yakhouba Diawara", 69]]);
const classPacers13 = new Map([["Paul George", 92], ["Roy Hibbert", 83], ["David West", 81], ["Lance Stephenson", 80], ["George Hill", 80], ["C.J. Watson", 75], ["Luis Scola", 75], ["Evan Turner", 73], ["Ian Mahinmi", 73], ["Solomon Hill", 72]]);
const classPistons88 = new Map([["Isiah Thomas", 93], ["Joe Dumars", 91], ["Dennis Rodman", 83], ["Mark Aguirre", 82], ["Vinnie Johnson", 82], ["Bill Laimbeer", 80], ["James Edwards", 77], ["Rick Mahorn", 77], ["Micheal Williams", 74], ["John Long", 74], ["John Salley", 72]]);
const classPistons03 = new Map([["Chauncey Billups", 89], ["Ben Wallace", 89], ["Richard Hamilton", 88], ["Corliss Williamson", 75], ["Mike James", 74], ["Darvin Ham", 72], ["Elden Campbell", 72], ["Darko Milicic", 72], ["Lindsey Hunter", 70], ["Tremaine Fowlkes", 68]]);
const classRaps99 = new Map([["Vince Carter", 94], ["Tracy McGrady", 84], ["Doug Christie", 80], ["Antonio Davis", 78], ["Charles Oakley", 76], ["Muggsy Bogues", 76], ["Kevin Willis", 75], ["Alvin Williams", 75], ["Dell Curry", 72], ["Dee Brown", 72], ["Haywoode Workman", 70], ["John Thomas", 68]]);
const classRaps18 = new Map([["Kawhi Leonard", 97], ["Pascal Siakam", 86], ["Kyle Lowry", 86], ["Serge Ibaka", 81], ["Fred VanVleet", 81], ["Danny Green", 79], ["OG Anunoby", 76], ["Norman Powell", 76], ["Jeremy Lin", 73], ["Chris Boucher", 73]]);
const classRocks93 = new Map([["Hakeem Olajuwon", 97], ["Otis Thorpe", 80], ["Kenny Smith", 79], ["Vernon Maxwell", 78], ["Robert Horry", 77], ["Sam Cassell", 76], ["Mario Elie", 75], ["Carl Herrera", 72], ["Scott Brooks", 71], ["Larry Robinson", 70], ["Matt Bullard", 69], ["Earl Cureton", 68]]);
const classRocks07 = new Map([["Tracy McGrady", 92], ["Yao Ming", 89], ["Shane Battier", 80], ["Rafer Alston", 79], ["Carl Landry", 77], ["Aaron Brooks", 76], ["Luis Scola", 76], ["Dikembe Mutombo", 75], ["Bobby Jackson", 75], ["Luther Head", 74], ["Steve Novak", 73], ["Steve Francis", 73], ["Chuck Hayes", 70]]);
const classBlaze90 = new Map([["Clyde Drexler", 92], ["Terry Porter", 85], ["Jerome Kersey", 82], ["Clifford Robinson", 79], ["Buck Williams", 79], ["Danny Ainge", 79], ["Drazen Petrovic", 78], ["Walter Davis", 77], ["Kevin Duckworth", 77], ["Alaa Abdelnaby", 74], ["Wayne Cooper", 71], ["Mark Bryant", 69]]);
const classBlaze99 = new Map([["Arvydas Sabonis", 86], ["Scottie Pippen", 85], ["Steve Smith", 83], ["Damon Stoudamire", 81], ["Detlef Schrempf", 78], ["Jermiane O'Neal", 77], ["Brian Grant", 77], ["Bonzi Wells", 76], ["Stacey Augmon", 76], ["Greg Anthony", 75], ["Antonio Harvey", 70], ["Gary Grant", 69]]);
const classBlaze09 = new Map([["LaMarcus Aldridge", 85], ["Nicolas Batum", 83], ["Greg Oden", 83], ["Andre Miller", 83], ["Marcus Camby", 82], ["Rudy Fernandez", 76], ["Juwan Howard", 75], ["Patty Mills", 75]]);
const classSpurs97 = new Map([["David Robinson", 91], ["Tim Duncan", 89], ["Avery Johnson", 79], ["Sean Elliott", 78], ["Vinny Del Negro", 74], ["Malik Rose", 74], ["Willie Burton", 73], ["Carl Herrera", 72], ["Chuck Person", 71], ["Will Perdue", 70], ["Jared Jackson", 70], ["Monty Williams", 69]]);
const classSpurs04 = new Map([["Tim Duncan", 98], ["Tony Parker", 91], ["Manu Ginobili", 87], ["Bruce Bowen", 84], ["Robert Horry", 79], ["Brent Barry", 78], ["Nazr Mohammed", 77], ["Glenn Robinson", 76], ["Beno Udrih", 73], ["Tony Massenburg", 67]]);
const classSpurs13 = new Map([["Tim Duncan", 95], ["Kawhi Leonard", 93], ["Tony Parker", 87], ["Manu Ginobili", 83], ["Danny Green", 82], ["Patty Mills", 79], ["Tiago Splitter", 78], ["Boris Diaw", 77], ["Cory Joseph", 77], ["Matt Bonner", 74]]);
const classSuns02 = new Map([["Shawn Marion", 87], ["Stephon Marbury", 85], ["Amar'e Stoudemire", 82], ["Penny Hardaway", 80], ["Joe Johnson", 76], ["Tom Gugliotta", 75], ["Bo Outlaw", 75], ["Casey Jacobsen", 71], ["Scott Williams", 71], ["Randy Brown", 70]]);
const classSuns04 = new Map([["Steve Nash", 95], ["Amar'e Stoudemire", 89], ["Shawn Marion", 88], ["Quentin Richardson", 78], ["Leandro Barbosa", 77], ["Joe Johnson", 76], ["Walter McCarty", 74], ["Steven Hunter", 73], ["Jim Jackson", 71], ["Bo Outlaw", 70]]);
const classSonics95 = new Map([["Gary Payton", 94], ["Shawn Kemp", 90], ["Detlef Schrempf", 83], ["Nate McMillan", 80], ["Hersey Hawkins", 78], ["Sam Perkins", 77], ["Ervin Johnson", 74], ["Eric Snow", 71], ["David Wingate", 71], ["Vincent Askew", 71], ["Frank Brickowski", 69]]);
const classThunder11 = new Map([["Kevin Durant", 96], ["Russell Westbrook", 90], ["James Harden", 88], ["Serge Ibaka", 88], ["Kendrick Perkins", 77], ["Nick Collison", 75], ["Derek Fisher", 73], ["Daequan Cook", 73], ["Reggie Jackson", 71], ["Nazr Mohammed", 70], ["Royal Ivey", 69]]);
const classWolves03 = new Map([["Kevin Garnett", 98], ["Sam Cassell", 87], ["Latrell Sprewell", 84], ["Wally Szczerbiak", 78], ["Michael Olowokandi", 74], ["Fred Hoiberg", 73], ["Mark Madsen", 72], ["Trenton Hassell", 71], ["Oliver Miller", 70], ["Gary Trent", 69], ["Ervin Johnson", 69]]);
const classWarr90 = new Map([["Chris Mullin", 89], ["Tim Hardaway", 87], ["Mitch Richmond", 86], ["Sarunas Marciulionis", 79], ["Tyrone Hill", 76], ["Mario Elie", 74], ["Rod Higgins", 74], ["Alton Lister", 74], ["Jim Petersen", 70], ["Vincent Askew", 69], ["Tom Tolbert", 68], ["Paul Mokeski", 66]]);
const classWarr06 = new Map([["Baron Davis", 89], ["Monta Ellis", 82], ["Al Harrington", 82], ["Jason Richardson", 81], ["Stephen Jackson", 81], ["Adonal Foyle", 78], ["Matt Barnes", 76], ["Kelenna Azubuike", 73], ["Josh Powell", 70], ["Patrick O'Bryant", 69]]);
const classWarr15 = new Map([["Stephen Curry", 97], ["Klay Thompson", 92], ["Draymond Green", 90], ["Andre Iguodala", 82], ["Harrison Barnes", 81], ["Andrew Bogut", 79], ["Marreese Speights", 77], ["Festus Ezeli", 76], ["Leandro Barbosa", 76], ["Shaun Livingston", 75], ["Brandon Rush", 73], ["Anderson Varejao", 73], ["Kevon Looney", 71]]);
const classWarr16 = new Map([["Kevind Durant", 97], ["Stephen Curry", 96], ["Klay Thompson", 92], ["Draymond Green", 87], ["Andre Iguodala", 80], ["JaVale McGee", 78], ["David West", 77], ["Zaza Pachulia", 77], ["Kevon Looney", 75], ["Shaun Livinston", 74], ["Matt Barnes", 74], ["Damian Jones", 73]]);
const classWiz06 = new Map([["Gilbert Arenas", 91], ["Antawn Jamison", 87], ["Caron Butler", 86], ["Brendan Haywood", 79], ["Antonio Daniels", 78], ["Etan Thomas", 78], ["DeShawn Stevenson", 76], ["Jarvis Hayes", 72], ["Roger Mason", 71]]);
const classic = new Map([["'76-'77 Philadelphia 76ers", classSixers76], ["'00-'01 Philadelphia 76ers", classSixers00], ["'70-'71 Milwaukee Bucks", classBucks70], ["'84-'85 Milwaukee Bucks", classBucks84], ["'85-'86 Chicago Bulls", classBulls85], ["'88-'89 Chicago Bulls", classBulls88], ["'90-'91 Chicago Bulls", classBulls90], ["'92-'93 Chicago Bulls", classBulls92], ["'95-'96 Chicago Bulls", classBulls95], 
    ["'97-'98 Chicago Bulls", classBulls97], ["'10-'11 Chicago Bulls", classBulls10], ["'89-'90 Cleveland Cavaliers", classCavs89], ["'06-'07 Cleveland Cavaliers", classCavs06], ["'15-'16 Cleveland Cavaliers", classCavs15], ["'64-'65 Boston Celtics", classCelt64], ["'85-'86 Boston Celtics", classCelt85], ["'07-'08 Boston Celtics", classCelt07], ["'13-'14 Los Angeles Clippers", classClips13], 
    ["'05-'06 Memphis Grizzlies", classGrizz05], ["'12-'13 Memphis Grizzlies", classGrizz12], ["'85-'86 Atlanta Hawks", classHawks85], ["'96-'97 Miami Heat", classHeat96], ["'05-'06 Miami Heat", classHeat05], ["'12-'13 Miami Heat", classHeat12], ["'92-'93 Charlotte Hornets", classHorr92], ["'97-'98 Utah Jazz", classJazz97], ["'01-'02 Sacramento Kings", classKings01], ["'71-'72 New York Knicks", classKnicks71], 
    ["'94-'95 New York Knicks", classKnicks94], ["'98-'99 New York Knicks", classKnicks98], ["'11-'12 New York Knicks", classKnicks11], ["'64-'65 Los Angeles Lakers", classLakers64], ["'70-'71 Los Angeles Lakers", classLakers70], ["'86-'87 Los Angeles Lakers", classLakers86], ["'90-'91 Los Angeles Lakers", classLakers90], ["'97-'98 Los Angeles Lakers", classLakers97], ["'00-'01 Los Angeles Lakers", classLakers00], 
    ["'03-'04 Los Angeles Lakers", classLakers03], ["'94-'95 Orlando Magic", classMagic94], ["'02-'03 Dallas Mavericks", classMavs02], ["'10-'11 Dallas Mavericks", classMavs10], ["'01-'02 New Jersey Nets", classNets01], ["'93-'94 Denver Nuggets", classNuggs93], ["'07-'08 Denver Nuggets", classNuggs07], ["'13-'14 Indiana Pacers", classPacers13], ["'88-'89 Detroit Pistons", classPistons88], ["'03-'04 Detroit Pistons", classPistons03], 
    ["'99-'00 Toronto Raptors", classRaps99], ["'18-'19 Toronto Raptors", classRaps18], ["'93-'94 Houston Rockets", classRocks93], ["'07-'08 Houston Rockets", classRocks07], ["'90-'91 Portland Trail Blazers", classBlaze90], ["'99-'00 Portland Trail Blazers", classBlaze99], ["'09-'10 Portland Trail Blazers", classBlaze09], ["'97-'98 San Antonio Spurs", classSpurs97], ["'04-'05 San Antonio Spurs", classSpurs04], 
    ["'13-'14 San Antonio Spurs", classSpurs13], ["'02-'03 Phoenix Suns", classSuns02], ["'04-'05 Phoenix Suns", classSuns04], ["'95-'96 Seattle Supersonics", classSonics95], ["'11-'12 Oklahoma City Thunder", classThunder11], ["'03-'04 Minnesota Timberwolves", classWolves03], ["'90-'91 Golden State Warriors", classWarr90], ["'06-'07 Golden State Warriors", classWarr06], ["'15-'16 Golden State Warriors", classWarr15], 
    ["'16-'17 Golden State Warriors", classWarr16], ["'06-'07 Washington Wizards", classWiz06]]);

const ATSixers = new Map([["Moses Malone", 97], ["Allen Iverson", 96], ["Julius Erving", 94], ["Dolph Schayes", 94], ["Billy Cunningham", 93], ["Wilt Chamberlain", 93], ["Joel Embiid", 95], ["Bobby Jones", 90], ["Hal Greer", 88], ["Andre Iguodala", 88], ["Hersey Hawkins", 87], ["Doug Collins", 87], ["George McGinnis", 87], ["Ben Simmons", 86], ["Maurice Cheeks", 86]]);
const ATBucks = new Map([["Kareem Abdul-Jabbar", 99], ["Oscar Robertson", 96], ["Giannis Antetokounmpo", 97], ["Sidney Moncrief", 93], ["Marques Johnson", 92], ["Ray Allen", 91], ["Bob Dandridge", 88], ["Michael Redd", 88], ["Khris Middleton", 88], ["Vin Baker", 87], ["Junior Bridgeman", 87], ["Terry Cummings", 87], ["Glenn Robinson", 87], ["Brian Winters", 86], ["Paul Pressey", 84]]);
const ATBulls = new Map([["Michael Jordan", 99], ["Scottie Pippen", 97], ["Derrick Rose", 95], ["Dennis Rodman", 93], ["Artis Gilmore", 93], ["Jimmy Butler", 91], ["Jerry Sloan", 89], ["Bob Love", 89], ["B.J. Armstrong", 87], ["Joakim Noah", 87], ["Reggie Theus", 86], ["Zach LaVine", 86], ["Toni Kukoc", 85], ["Horace Grant", 85], ["Kirk Hinrich", 82]]);
const ATCavs = new Map([["LeBron James", 99], ["Kyrie Irving", 94], ["Mark Price", 93], ["Brad Daugherty", 90], ["Larry Nance", 88], ["Zydrunas Ilgauskas", 88], ["Terrell Brandon", 87], ["World B. Free", 87], ["Kevin Love", 87], ["Campy Russell", 86], ["Austin Carr", 86], ["Hot Rod Williams", 85], ["Jim Chones", 84], ["Bingo Smith", 84], ["Anderson Varejao", 84]]);
const ATCeltics = new Map([["Larry Bird", 98], ["Bill Russell", 98], ["Bob Cousy", 96], ["John Havlicek", 96], ["Kevin McHale", 95], ["Dave Cowens", 95], ["Jo Jo White", 94], ["Paul Pierce", 94], ["Robert Parish", 93], ["Bill Sharman", 92], ["Kevin Garnett", 92], ["Rajon Rondo", 90], ["Tom Heinsohn", 89], ["Jayson Tatum", 92], ["Ray Allen", 88]]);
const ATClippers = new Map([["Kawhi Leonard", 95], ["Bob McAdoo", 94], ["Chris Paul", 93], ["World B. Free", 89], ["Elton Brand", 90], ["Blake Griffin", 90], ["Ron Harper", 89], ["DeAndre Jordan", 87], ["Chris Kaman", 87], ["Danny Manning", 87], ["Corey Maggette", 86], ["Norm Nixon", 86], ["Swen Nater", 84], ["JJ Redick", 83], ["Lamar Odom", 82]]);
const ATGrizzlies = new Map([["Marc Gasol", 93], ["Pau Gasol", 92], ["Ja Morant", 89], ["Zach Randolph", 89], ["Mike Conley", 88], ["Mike Bibby", 86], ["Shareef Abdul-Rahim", 86], ["Shane Battier", 85], ["Tony Allen", 85], ["Bryant Reeves", 84], ["Jason Williams", 84], ["Rudy Gay", 83], ["Jaren Jackson Jr.", 82], ["Mike Miller", 82], ["Jonas Valanciunas", 82], ["Greg Anthony", 81]]);
const ATHawks = new Map([["Dominique Wilkins", 95], ["Bob Pettit", 95], ["Dikembe Mutombo", 92], ["Cliff Hagan", 91], ["Lou Hudson", 91], ["Joe Johnson", 89], ["Trae Young", 88], ["Joe Caldwell", 88], ["Kevin Willis", 87], ["Pete Maravich", 87], ["Paul Millsap", 87], ["Steve Smith", 87], ["Doc Rivers", 86], ["Josh Smith", 86], ["Al Horford", 85]]);
const ATHeat = new Map([["LeBron James", 99], ["Dwyane Wade", 97], ["Alonzo Mourning", 94], ["Jimmy Butler", 93], ["Tim Hardaway", 89], ["Shaquille O'Neal", 89], ["Glen Rice", 88], ["Chirs Bosh", 88], ["Rony Seikaly", 86], ["Bam Adebayo", 86], ["Eddie Jones", 85], ["Steve Smith", 85], ["Goran Dragic", 85], ["Hassan Whiteside", 84], ["Udonis Haslem", 84]]);
const ATHornets = new Map([["Glen Rice", 90], ["Kemba Walker", 89], ["Eddie Jones", 89], ["Alonzo Mourning", 89], ["Larry Johnson", 88], ["Derrick Coleman", 86], ["Vlade Divac", 85], ["Dell Curry", 85], ["Kendall Gill", 85], ["Muggsy Bogues", 85], ["Baron Davis", 85], ["Geralnd Wallance", 84], ["Stephen Jackson", 83], ["P.J. Brown", 83], ["David Wesley", 82]]);
const ATJazz = new Map([["Karl Malone", 97], ["John Stockton", 97], ["Pete Maravich", 94], ["Adrian Dantley", 91], ["Mark Eaton", 89], ["Andrei Kirilenko", 89], ["Gordon Hayward", 88], ["Donovan Mitchell", 88], ["Rudy Gobert", 88], ["Carlos Boozer", 88], ["Deron Williams", 87], ["Darrel Griffith", 87], ["Thurl Bailey", 86], ["Truck Robinson", 86], ["Jeff Hornacek", 84]]);
const ATKings = new Map([["Oscar Robertson", 97], ["Jerry Lewis", 95], ["Mitch Richmond", 94], ["Nate Archibald", 94], ["Chris Webber", 93], ["DeMarcus Cousins", 90], ["Wayne Embry", 90], ["Peja Stojakovic", 88], ["Mike Bibby", 88], ["Vlade Divac", 88], ["Otis Birdsong", 87], ["Reggie Theus", 87], ["Kevin Martin", 86], ["Eddie Johnson", 86], ["De'Aaron Fox", 84], ["Doug Christie", 83], ["Lionel Simmons", 81]]);
const ATKnicks = new Map([["Walt Frazier", 97], ["Patrick Ewing", 95], ["Willis Reed", 94], ["Richie Guerin", 92], ["Carmelo Anthony", 92], ["Dave Debusschere", 92], ["Allan Houston", 89], ["Amar'e Stoudemire", 89], ["Bernard King", 89], ["Michael Ray Richardson", 89], ["John Starks", 88], ["Earl Monroe", 88], ["Dick Barnett", 87], ["Julius Randle", 86], ["Charles Oakley", 86]]);
const ATLakers = new Map([["Magic Johnson", 98], ["Kobe Bryant", 98], ["Shaquille O'Neal", 98], ["Jerry West", 97], ["Elgin Baylor", 96], ["LeBron James", 96], ["Kareem Abdul-Jabbar", 96], ["James Worthy", 95], ["George Mikan", 94], ["Anthony Davis", 94], ["Wilt Chamberlain", 91], ["Gail Goodrich", 89], ["Jamaal Wilkes", 87], ["Byron Scott", 86], ["Michael Cooper", 86]]);
const ATMagic = new Map([["Tracy McGrady", 95], ["Penny Hardaway", 94], ["Shaquille O'Neal", 93], ["Dwight Howard", 93], ["Rashard Lewis", 86], ["Hedo Turkoglu", 86], ["Grant Hill", 86], ["Nikola Vucevic", 86], ["Nick Anderson", 85], ["Steve Francis", 85], ["Scott Skiles", 84], ["Dennis Scott", 84], ["Horace Grant", 84], ["Jameer Nelson", 83], ["Darrell Armstrong", 83]]);
const ATMavs = new Map([["Dirk Nowitzki", 98], ["Luka Doncic", 94], ["Derek Harper", 89], ["Mark Aguirre", 88], ["Jamal Mashburn", 88], ["Rolando Blackman", 88], ["Jim Jackson", 88], ["Michael Finley", 88], ["Jason Kidd", 87], ["Steve Nash", 87], ["Jason Terry", 86], ["James Donaldson", 85], ["Brad Davis", 84], ["Shawn Bradley", 82]]);
const ATNets = new Map([["Julius Erving", 97], ["Kevin Durant", 96], ["Jason Kidd", 95], ["James Harden", 93], ["Drazen Petrovic", 90], ["Kyrie Irving", 89], ["Vince Carter", 89], ["Buck Williams", 88], ["Kenny Anderson", 88], ["Derrick Coleman", 88], ["Richard Jefferson", 87], ["Brook Lopez", 87], ["Kenyon Martin", 87], ["Keith Van Horn", 86], ["Otis Birdsong", 86]]);
const ATNuggets = new Map([["David Thompson", 95], ["Carmelo Anthony", 95], ["Alex English", 93], ["Nikola Jokic", 93], ["Dan Issel", 92], ["Fat Lever", 92], ["Allen Iverson", 90], ["Dikembe Mutombo", 90], ["Kiki Vandeweghe", 89], ["Mahmoud Abdul-Rauf", 89], ["Byron Black", 89], ["Chauncey Billups", 88], ["Antonio McDyess", 88], ["Marcus Camby", 85], ["Jamal Murray", 85]]);
const ATPacers = new Map([["Paul George", 93], ["Mel Daniels", 92], ["Jermaine O'Neal", 91], ["Freddie Lewis", 89], ["George McGinnis", 89], ["Victor Oladipo", 88], ["Danny Granger", 88], ["Ron Artest", 88], ["Bob Netolicky", 88], ["Rik Smits", 87], ["Chuck Pearson", 87], ["Don Buse", 87], ["Roy Hibbert", 86], ["Domantas Sabonis", 86], ["Jalen Rose", 86], ["Herb Williams", 85], ["Mark Jackson", 85], ["Clark Kellogg", 85]]);
const ATPelicans = new Map([["Chris Paul", 97], ["Anthony Davis", 94], ["Baron Davis", 92], ["Jamal Mashburn", 89], ["Zion Williamson", 88], ["David West", 88], ["Jrue Holiday", 86], ["Brandon Ingram", 85], ["DeMarcus Cousins", 85], ["David Wesley", 84], ["Tyson Chandler", 83], ["Julius Randle", 83], ["Peja Stojakovic", 82], ["Lonzo Ball", 82], ["Eric Gordon", 81]]);
const ATPistons = new Map([["Isiah Thomas", 95], ["Joe Dumars", 93], ["Chauncey Billups", 93], ["Grant Hill", 93], ["Bob Lanier", 93], ["Dave Bing", 90], ["Richard Hamilton", 89], ["Ben Wallace", 89], ["Dennis Rodman", 89], ["Jerry Stackhouse", 89], ["Dave Debusschere", 89], ["Bailey Howell", 88], ["Bill Laimbeer", 87], ["Kelly Tripucka", 86], ["Andre Drummond", 86]]);
const ATRaptors = new Map([["Kawhi Leonard", 96], ["Vince Carter", 96], ["Chris Bosh", 90], ["DeMar DeRozan", 89], ["Kyle Lowry", 89], ["Pascal Siakam", 86], ["Damon Stoudamire", 86], ["Tracy McGrady", 85], ["Morris Peterson", 85], ["Antonio Davis", 85], ["Andrea Bargnani", 84], ["Doug Christie", 84], ["Fred VanVleet", 83], ["Jonas Valanciunas", 81], ["Serge Ibaka", 81]]);
const ATRockets = new Map([["Hakeem Olajuwon", 98], ["Moses Malone", 97], ["James Harden", 95], ["Clyde Drexler", 93], ["Tracy McGrady", 92], ["Yao Ming", 91], ["Calvin Murphy", 91], ["Chris Paul", 90], ["Ralph Sampson", 89], ["Elvin Hayes", 89], ["Rudy Tomjanovich", 88], ["Steve Francis", 88], ["Kenny Smith", 87], ["Otis Thorpe", 86], ["Vernon Maxwell", 83]]);
const ATSpurs = new Map([["Tim Duncan", 98], ["David Robinson", 96], ["George Garvin", 94], ["Kawhi Leonard", 94], ["Tony Parker", 94], ["Manu Ginobili", 90], ["Louie Dampier", 89], ["Larry Kenon", 88], ["Sean Elliott", 87], ["LeMarcus Aldridge", 86], ["James Silas", 86], ["Bruce Bowen", 86], ["Atris Gilmore", 85], ["Johnny Moore", 84], ["Avery Johnson", 82]]);
const ATSuns = new Map([["Steve Nash", 96], ["Dennis Johnson", 94], ["Amar'e Stoudemire", 92], ["Shawn Marion", 91], ["Walter Davis", 90], ["Jason Kidd", 90], ["Kevin Johnson", 89], ["Charlie Scott", 89], ["Tom Chambers", 89], ["Dick Van Arsdale", 88], ["Devin Booker", 88], ["Dan Majerle", 88], ["Larry Nance", 88], ["Paul Westphal", 88], ["Alvan Adams", 85]]);
const ATThunder = new Map([["Kevin Durant", 97], ["Russell Westbrook", 95], ["Gary Payton", 95], ["Ray Allen", 94], ["Paul George", 91], ["Dennis Johnson", 91], ["Shawn Kemp", 90], ["Rashard Lewis", 89], ["Gus Williams", 89], ["Spencer Haywood", 89], ["Jack Sikma", 89], ["Fred Brown", 88], ["Dale Ellis", 88], ["Detlef Schrempf", 87], ["Xavier McDaniel", 87]]);
const ATWolves = new Map([["Kevin Gernett", 98], ["Kevin Love", 91], ["Karl-Anthony Towns", 89], ["Tom Gugliotta", 88], ["Sam Cassell", 88], ["Jimmy Butler", 87], ["Stephon Marbury", 87], ["Terrell Brandon", 86], ["Doug West", 85], ["Wally Szczerbiak", 85], ["Christian Laettner", 85], ["Ricky Rubio", 85], ["Isaiah Rider", 84], ["Andrew Wiggins", 83], ["Latrell Sprewell", 83]]);
const ATBlazers = new Map([["Clyde Drexler", 96], ["Bill Walton", 95], ["Damian Lillard", 94], ["Maurice Lucas", 90], ["LaMarcus Aldridge", 89], ["Arvydas Sabonis", 88], ["Geoff Petrie", 87], ["Jerome Kersey", 87], ["Terry Porter", 87], ["Sidney Wicks", 87], ["Zach Randolph", 86], ["C.J. McCollum", 86], ["Kiki Vandeweghe", 86], ["Jim Paxson", 85], ["Kevin Duckworth", 85]]);
const ATWarriors = new Map([["Wilt Chamberlain", 98], ["Kevin Durant", 97], ["Stephen Curry", 97], ["Rick Barry", 95], ["Chris Mullin", 94], ["Nate Thurmond", 92], ["Paul Arizin", 91], ["Klay Thompson", 91], ["Baron Davis", 91], ["Tim Hardaway", 90], ["Draymond Green", 89], ["Sleepy Floyd", 88], ["Jason Richardson", 87], ["Purvis Short", 86], ["Andre Iguodala", 84]]);
const ATWizards = new Map([["Elvin Hayes", 94], ["Wes Unseld", 94], ["Gilbert Arenas", 93], ["John Wall", 90], ["Earl Monroe", 89], ["Moses Malone", 89], ["Bradley Beal", 89], ["Phil Chenier", 88], ["Caron Butler", 88], ["Chirs Webber", 87], ["Rod Strickland", 87], ["Bernard King", 87], ["Don Ohl", 87], ["Jeff Ruland", 87], ["Antwan Jamison", 87], ["Jeff Malone", 86], ["Jack Marin", 86]]);
const allTime = new Map([["All-Time Philadelphia 76ers", ATSixers], ["All-Time Milwaukee Bucks", ATBucks], ["All-Time Chicago Bulls", ATBulls], ["All-Time Cleveland Cavaliers", ATCavs], ["All-Time Boston Celtics", ATCeltics], ["All-Time Los Angeles Clippers", ATClippers], ["All-Time Memphis Grizzlies", ATGrizzlies], ["All-Time Atlanta Hawks", ATHawks], ["All-Time Miami Heat", ATHeat], ["All-Time Charlotte Hornets", ATHornets], 
    ["All-Time Utah Jazz", ATJazz], ["All-Time Sacramento Kings", ATKings], ["All-Time New York Knicks", ATKnicks], ["All-Time Los Angeles Lakers", ATLakers], ["All-Time Orlando Magic", ATMagic], ["All-Time Dallas Mavericks", ATMavs], ["All-Time Brooklyn Nets", ATNets], ["All-Time Denver Nuggets", ATNuggets], ["All-Time Indiana Pacers", ATPacers], ["All-Time New Orleans Pelicans", ATPelicans], ["All-Time Detroit Pistons", ATPistons], 
    ["All-Time Toronto Raptors", ATRaptors], ["All-Time Houston Rockets", ATRockets], ["All-Time San Antonio Spurs", ATSpurs], ["All-Time Phoenix Suns", ATSuns], ["All-Time Oklahoma City Thunder", ATThunder], ["All-Time Minnesota Timberwolves", ATWolves], ["All-Time Portland Trail Blazers", ATBlazers], ["All-Time Golden State Warriors", ATWarriors], ["All-Time Washington Wizards", ATWizards]]);

const eras = new Array(current, classic, allTime);

const ones = new Array();
const twos = new Array();
const threes = new Array();
const fours = new Array();
const fives = new Array();

var button1Clicked = false;
var button2Clicked = false;
var button3Clicked = false;
var button4Clicked = false;
var button5Clicked = false;
var overallChecked = false;
var currentChecked = false;
var classicChecked = false;
var allTimeChecked = false;
var teamSize = 0;
var playerOVR = 0;
var playerTeam = "";
var overallColor = "";
var backgroundColorRGB = "";
var backgroundColorRGBHalved = "";
var auraColor = "";
var playerPool = new Array();
var OVRPool = new Array();
var teamPool = new Array();
document.getElementById('OverallRange').checked = false;
document.getElementById('Current').checked = false;
document.getElementById('Classic').checked = false;
document.getElementById('All-Time').checked = false;
document.getElementById('MinOvr').value = '';
document.getElementById('MaxOvr').value = '';

document.getElementById('button1').addEventListener('click', function() {
        buttonClicked('button1');
})

document.getElementById('button2').addEventListener('click', function() {
    buttonClicked('button2');
})

document.getElementById('button3').addEventListener('click', function() {
    buttonClicked('button3');
})

document.getElementById('button4').addEventListener('click', function() {
    buttonClicked('button4');
})

document.getElementById('button5').addEventListener('click', function() {
    buttonClicked('button5');
})

document.getElementById('generator').addEventListener('click', function() {
    generate();
})
document.getElementById('OverallRange').addEventListener('change', function() {
    changeCheckbox('Overall');
})
document.getElementById('Current').addEventListener('change', function() {
    changeCheckbox('Current');
})
document.getElementById('Classic').addEventListener('change', function() {
    changeCheckbox('Classic');
})
document.getElementById('All-Time').addEventListener('change', function() {
    changeCheckbox('All-Time');
})