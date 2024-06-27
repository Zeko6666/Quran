const express = require('express');
const quranController = require('./controller');
const waysController = require('./waysController');

const router = express.Router();

router.post('/countLetters', quranController.getcountLetter); 
router.post('/getText', quranController.getAyaText);
router.post('/getSurahText', quranController.getSurahAyas);
router.get('/getQuranText', quranController.getTextForQuran);
router.post('/countLetterInAya', quranController.countLetterForAya);
router.post('/countLetterInSurah', quranController.countLetterForSurah);
router.get('/countLetterInQuran', quranController.countLetterForQuran);
router.post('/countOccurrencesInSentence', quranController.getOccurrenc);
router.post('/countOccurrencesInQuran', quranController.getOccurrencInQuran);
router.post('/countOccurrencesInAya', quranController.getOccurrencesInAya);
router.post('/countOccurrencesInSurah', quranController.getOccurrencInSurah);

router.post('/wayVerse/:method', waysController.countVerse);
router.post('/waySurah/:method', waysController.countSurah);
router.post('/waySentence/:method', waysController.countSentence);
router.get('/wayQuran/:method', waysController.countQuran);

router.post('/countRepeatLetterInQuran', quranController.getOccurrenceLettersOfWordInQuran);
router.post('/countRepeatLetterInSurah', quranController.getOccurrenceLettersOfWordInSurah);
router.post('/countRepeatLetterInAyah', quranController.getOccurrenceLettersOfWordInAyah);
router.post('/countRepeatLetterInSentence2', quranController.getOccurrenceLettersOfWordInSentence);

router.post('/countWordsInSurah', quranController.countWordsForSurah);
router.post('/countWordsInAyah', quranController.countWordsForAyah);
router.post('/countWordsInSentence',quranController.CountWordsInSentence);
router.post('/sumIndexsInWordInSurah', quranController.sumIndexesForWordInSurah);
router.post('/sumIndexsInWordInAyah', quranController.sumIndexesForWordInAyah);
router.post('/sumIndexsInWordInSentence', quranController.sumIndexesForWordInSentence);


router.post('/calculateLettersInSentences', quranController.calculateLettersInSentences);
router.post('/calculateLettersInAyah', quranController.calculateLettersInAyah);
router.post('/calculateLettersInSurah', quranController.calculateLettersInSurah);

router.post('/calculateOccurrences', quranController.calculateOccurrencesForSentence);
router.post('/calculateOccurrences/ayah', quranController.  calculateOccurrencesForeAyah);
router.post('/calculateOccurrences/surah', quranController. calculateOccurrencesForSurah  );

router.post('/countRepeatLetterInAyah2', quranController.getOccurrenceLettersOfWordInAyah2);
router.post('/countRepeatLetterInSurah2', quranController.getOccurrenceLettersOfWordInSurah2);
router.post('/countRepeatLetterInSentence', quranController.getOccurrenceLettersOfWordInSentence2);



module.exports = router;