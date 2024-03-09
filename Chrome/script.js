// Function to generate a random number between min and max (inclusive)
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Generate a random Surah number (between 1 and 114, inclusive)
const randomSurahNumber = getRandomNumber(1, 114);

// Get the total number of Ayahs (verses) in the selected Surah
const surahInfo = quranAyahCounts[randomSurahNumber];
const totalAyahsInSurah = surahInfo.ayahCount;
//const totalAyahsInSurah = QuranData.surahs[randomSurahNumber - 1].ayahs;

// Generate a random Ayah number (between 1 and the total number of Ayahs)
const randomAyahNumber = getRandomNumber(1, totalAyahsInSurah);

// Output the random Surah and Ayah numbers
//console.log(`Random Surah Number: ${randomSurahNumber}`);
//console.log(`Random Ayah Number: ${randomAyahNumber}`);

async function fetchData() {
    const url = "https://al-quran1.p.rapidapi.com/" + randomSurahNumber + "/" + randomAyahNumber;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'e6292d8c91msh6ef9388ac48ec3bp105cb9jsn5b647a767ae0',
            'X-RapidAPI-Host': 'al-quran1.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        //console.log(result);
        document.getElementById("loading").innerHTML = ``;
        document.getElementById("arabic").innerHTML = result.content;
        document.getElementById("eng").innerHTML = result.translation_eng;
        document.getElementById("info").innerHTML = `${surahInfo.name}(${randomAyahNumber})`;

    } catch (error) {
        console.error(error);
    }
}

fetchData();
