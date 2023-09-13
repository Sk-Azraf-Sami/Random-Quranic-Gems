const quranAyahCounts = {
    1: { name: "Al-Fatiha", ayahCount: 7 },
    2: { name: "Al-Baqarah", ayahCount: 286 },
    3: { name: "Aal-E-Imran", ayahCount: 200 },
    4: { name: "An-Nisa", ayahCount: 176 },
    5: { name: "Al-Ma'idah", ayahCount: 120 },
    6: { name: "Al-An'am", ayahCount: 165 },
    7: { name: "Al-A'raf", ayahCount: 206 },
    8: { name: "Al-Anfal", ayahCount: 75 },
    9: { name: "At-Tawbah", ayahCount: 129 },
    10: { name: "Yunus", ayahCount: 109 },
    11: { name: "Hud", ayahCount: 123 },
    12: { name: "Yusuf", ayahCount: 111 },
    13: { name: "Ar-Ra'd", ayahCount: 43 },
    14: { name: "Ibrahim", ayahCount: 52 },
    15: { name: "Al-Hijr", ayahCount: 99 },
    16: { name: "An-Nahl", ayahCount: 128 },
    17: { name: "Al-Isra", ayahCount: 111 },
    18: { name: "Al-Kahf", ayahCount: 110 },
    19: { name: "Maryam", ayahCount: 98 },
    20: { name: "Ta-Ha", ayahCount: 135 },
    21: { name: "Al-Anbiya", ayahCount: 112 },
    22: { name: "Al-Hajj", ayahCount: 78 },
    23: { name: "Al-Mu'minun", ayahCount: 118 },
    24: { name: "An-Nur", ayahCount: 64 },
    25: { name: "Al-Furqan", ayahCount: 77 },
    26: { name: "Ash-Shu'ara", ayahCount: 227 },
    27: { name: "An-Naml", ayahCount: 93 },
    28: { name: "Al-Qasas", ayahCount: 88 },
    29: { name: "Al-Ankabut", ayahCount: 69 },
    30: { name: "Ar-Rum", ayahCount: 60 },
    31: { name: "Luqman", ayahCount: 34 },
    32: { name: "As-Sajda", ayahCount: 30 },
    33: { name: "Al-Ahzab", ayahCount: 73 },
    34: { name: "Saba", ayahCount: 54 },
    35: { name: "Fatir", ayahCount: 45 },
    36: { name: "Ya-Sin", ayahCount: 83 },
    37: { name: "As-Saffat", ayahCount: 182 },
    38: { name: "Sad", ayahCount: 88 },
    39: { name: "Az-Zumar", ayahCount: 75 },
    40: { name: "Ghafir", ayahCount: 85 },
    41: { name: "Fussilat", ayahCount: 54 },
    42: { name: "Ash-Shura", ayahCount: 53 },
    43: { name: "Az-Zukhruf", ayahCount: 89 },
    44: { name: "Ad-Dukhan", ayahCount: 59 },
    45: { name: "Al-Jathiya", ayahCount: 37 },
    46: { name: "Az-Zariyat", ayahCount: 60 },
    47: { name: "Muhammad", ayahCount: 38 },
    48: { name: "Al-Fath", ayahCount: 29 },
    49: { name: "Al-Hujraat", ayahCount: 18 },
    50: { name: "Qaf", ayahCount: 45 },
    51: { name: "Adh-Dhariyat", ayahCount: 60 },
    52: { name: "At-Tur", ayahCount: 49 },
    53: { name: "An-Najm", ayahCount: 62 },
    54: { name: "Al-Qamar", ayahCount: 55 },
    55: { name: "Ar-Rahman", ayahCount: 78 },
    56: { name: "Al-Waqi'a", ayahCount: 96 },
    57: { name: "Al-Hadid", ayahCount: 29 },
    58: { name: "Al-Mujadila", ayahCount: 22 },
    59: { name: "Al-Hashr", ayahCount: 24 },
    60: { name: "Al-Mumtahina", ayahCount: 13 },
    61: { name: "As-Saff", ayahCount: 14 },
    62: { name: "Al-Jumu'a", ayahCount: 11 },
    63: { name: "Al-Munafiqun", ayahCount: 11 },
    64: { name: "At-Taghabun", ayahCount: 18 },
    65: { name: "At-Talaq", ayahCount: 12 },
    66: { name: "At-Tahrim", ayahCount: 12 },
    67: { name: "Al-Mulk", ayahCount: 30 },
    68: { name: "Al-Qalam", ayahCount: 52 },
    69: { name: "Al-Haaqqa", ayahCount: 52 },
    70: { name: "Al-Ma'arij", ayahCount: 44 },
    71: { name: "Nuh", ayahCount: 28 },
    72: { name: "Al-Jinn", ayahCount: 28 },
    73: { name: "Al-Muzzammil", ayahCount: 20 },
    74: { name: "Al-Muddaththir", ayahCount: 56 },
    75: { name: "Al-Qiyama", ayahCount: 40 },
    76: { name: "Al-Insan", ayahCount: 31 },
    77: { name: "Al-Mursalat", ayahCount: 50 },
    78: { name: "An-Naba", ayahCount: 40 },
    79: { name: "An-Nazi'at", ayahCount: 46 },
    80: { name: "Abasa", ayahCount: 42 },
    81: { name: "At-Takwir", ayahCount: 29 },
    82: { name: "Al-Infitar", ayahCount: 19 },
    83: { name: "Al-Mutaffifin", ayahCount: 36 },
    84: { name: "Al-Inshiqaq", ayahCount: 25 },
    85: { name: "Al-Buruj", ayahCount: 22 },
    86: { name: "At-Tariq", ayahCount: 17 },
    87: { name: "Al-Ala", ayahCount: 19 },
    88: { name: "Al-Ghashiyah", ayahCount: 26 },
    89: { name: "Al-Fajr", ayahCount: 30 },
    90: { name: "Al-Balad", ayahCount: 20 },
    91: { name: "Ash-Shams", ayahCount: 15 },
    92: { name: "Al-Layl", ayahCount: 21 },
    93: { name: "Adh-Dhuha", ayahCount: 11 },
    94: { name: "Ash-Sharh", ayahCount: 8 },
    95: { name: "At-Tin", ayahCount: 8 },
    96: { name: "Al-Alaq", ayahCount: 19 },
    97: { name: "Al-Qadr", ayahCount: 5 },
    98: { name: "Al-Bayyina", ayahCount: 8 },
    99: { name: "Az-Zalzalah", ayahCount: 8 },
    100: { name: "Al-Adiyat", ayahCount: 11 },
    101: { name: "Al-Qari'a", ayahCount: 11 },
    102: { name: "At-Takathur", ayahCount: 8 },
    103: { name: "Al-Asr", ayahCount: 3 },
    104: { name: "Al-Humazah", ayahCount: 9 },
    105: { name: "Al-Fil", ayahCount: 5 },
    106: { name: "Quraish", ayahCount: 4 },
    107: { name: "Al-Ma'un", ayahCount: 7 },
    108: { name: "Al-Kawthar", ayahCount: 3 },
    109: { name: "Al-Kafirun", ayahCount: 6 },
    110: { name: "An-Nasr", ayahCount: 3 },
    111: { name: "Al-Masad", ayahCount: 5 },
    112: { name: "Al-Ikhlas", ayahCount: 4 },
    113: { name: "Al-Falaq", ayahCount: 5 },
    114: { name: "An-Nas", ayahCount: 6 }
};

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
