import { INITIAL_WORDS } from "../reducers/wordsData"

export const INITIAL_SOURA = {
        "_id": 1,
        "name": "سورة الفاتحة",
        "englishName": "Al-Faatiha",
        "ayahs": [
            {
                "number": 1,
                "text": "﻿بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
                "numberInSurah": 1,
                "juz": 1
            },
            {
                "number": 2,
                "text": "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
                "numberInSurah": 2,
                "juz": 1
            },
            {
                "number": 3,
                "text": "الرَّحْمَٰنِ الرَّحِيمِ",
                "numberInSurah": 3,
                "juz": 1
            },
            {
                "number": 4,
                "text": "مَالِكِ يَوْمِ الدِّينِ",
                "numberInSurah": 4,
                "juz": 1
            },
            {
                "number": 5,
                "text": "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ",
                "numberInSurah": 5,
                "juz": 1
            },
            {
                "number": 6,
                "text": "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ",
                "numberInSurah": 6,
                "juz": 1
            },
            {
                "number": 7,
                "text": "صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ",
                "numberInSurah": 7,
                "juz": 1
            }
        ]
    }
export const getWords = (soura = INITIAL_WORDS) => {
const wordSet = new Set()
const ayat = []
Object.entries(soura).map(([key, ayahs]) => {
   /*  ayahs.map(ayah => {
        ayat.concat(ayah['text'])
    }) */
    console.log(ayahs)

    })
const words = ayat.map((aya) => {
   const ayatRandom = getRandomInt(ayat.lenght)
   const wordRandom = getRandomInt(aya.lenght)
   wordSet.add({aya:ayat[ayatRandom],word:aya[wordRandom]}) 
    return {aya:ayat[ayatRandom],word:aya[wordRandom]}
})

return words
} 
export const getRandomInt = (max) => {
        return Math.floor(Math.random() * Math.floor(max));
}
      