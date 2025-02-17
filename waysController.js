
const db =require("./db")



// قيمة كل حرف في اللغة العربية بحسب كل طريقة
const valuesByKey = {
    "أ": { "arrangOfLetters": 1, "minorSentences": 1, "middleSentences": 1, "bigSentences": 1, "mostRepeatedLetters": 1, "appearanceOfLetters": 4 },
    "ب": { "arrangOfLetters": 2, "minorSentences": 2, "middleSentences": 2, "bigSentences": 2, "mostRepeatedLetters": 9, "appearanceOfLetters": 1 },
    "ت": { "arrangOfLetters": 3, "minorSentences": 5, "middleSentences": 22, "bigSentences": 400, "mostRepeatedLetters": 11, "appearanceOfLetters": 15 },
    "ث": { "arrangOfLetters": 4, "minorSentences": 5, "middleSentences": 23, "bigSentences": 500, "mostRepeatedLetters": 25, "appearanceOfLetters": 28 },
    "ج": { "arrangOfLetters": 5, "minorSentences": 3, "middleSentences": 3, "bigSentences": 3, "mostRepeatedLetters": 19, "appearanceOfLetters": 27 },
    "ح": { "arrangOfLetters": 6, "minorSentences": 8, "middleSentences": 8, "bigSentences": 8, "mostRepeatedLetters": 18, "appearanceOfLetters": 8 },
    "خ": { "arrangOfLetters": 7, "minorSentences": 6, "middleSentences": 24, "bigSentences": 600, "mostRepeatedLetters": 20, "appearanceOfLetters": 24 },
    "د": { "arrangOfLetters": 8, "minorSentences": 4, "middleSentences": 4, "bigSentences": 4, "mostRepeatedLetters": 16, "appearanceOfLetters": 11 },
    "ذ": { "arrangOfLetters": 9, "minorSentences": 7, "middleSentences": 25, "bigSentences": 700, "mostRepeatedLetters": 17, "appearanceOfLetters": 18 },
    "ر": { "arrangOfLetters": 10, "minorSentences": 2, "middleSentences": 20, "bigSentences": 200, "mostRepeatedLetters": 8, "appearanceOfLetters": 7 },
    "ز": { "arrangOfLetters": 11, "minorSentences": 7, "middleSentences": 7, "bigSentences": 7, "mostRepeatedLetters": 24, "appearanceOfLetters": 22 },
    "س": { "arrangOfLetters": 12, "minorSentences": 6, "middleSentences": 15, "bigSentences": 60, "mostRepeatedLetters": 15, "appearanceOfLetters": 2 },
    "ش": { "arrangOfLetters": 13, "minorSentences": 3, "middleSentences": 21, "bigSentences": 300, "mostRepeatedLetters": 21, "appearanceOfLetters": 26 },
    "ص": { "arrangOfLetters": 14, "minorSentences": 9, "middleSentences": 18, "bigSentences": 90, "mostRepeatedLetters": 22, "appearanceOfLetters": 16 },
    "ض": { "arrangOfLetters": 15, "minorSentences": 8, "middleSentences": 26, "bigSentences": 800, "mostRepeatedLetters": 23, "appearanceOfLetters": 20 },
    "ط": { "arrangOfLetters": 16, "minorSentences": 9, "middleSentences": 9, "bigSentences": 9, "mostRepeatedLetters": 26, "appearanceOfLetters": 17 },
    "ظ": { "arrangOfLetters": 17, "minorSentences": 9, "middleSentences": 27, "bigSentences": 900, "mostRepeatedLetters": 28, "appearanceOfLetters": 25 },
    "ع": { "arrangOfLetters": 18, "minorSentences": 7, "middleSentences": 16, "bigSentences": 70, "mostRepeatedLetters": 12, "appearanceOfLetters": 12 },
    "غ": { "arrangOfLetters": 19, "minorSentences": 1, "middleSentences": 28, "bigSentences": 1000, "mostRepeatedLetters": 27, "appearanceOfLetters": 19 },
    "ف": { "arrangOfLetters": 20, "minorSentences": 8, "middleSentences": 17, "bigSentences": 80, "mostRepeatedLetters": 13, "appearanceOfLetters": 23 },
    "ق": { "arrangOfLetters": 21, "minorSentences": 1, "middleSentences": 19, "bigSentences": 100, "mostRepeatedLetters": 14, "appearanceOfLetters": 21 },
    "ك": { "arrangOfLetters": 22, "minorSentences": 2, "middleSentences": 11, "bigSentences": 20, "mostRepeatedLetters": 10, "appearanceOfLetters": 13 },
    "ل": { "arrangOfLetters": 23, "minorSentences": 3, "middleSentences": 12, "bigSentences": 30, "mostRepeatedLetters": 2, "appearanceOfLetters": 5 },
    "م": { "arrangOfLetters": 24, "minorSentences": 4, "middleSentences": 13, "bigSentences": 40, "mostRepeatedLetters": 4, "appearanceOfLetters": 3 },
    "ن": { "arrangOfLetters": 25, "minorSentences": 5, "middleSentences": 14, "bigSentences": 50, "mostRepeatedLetters": 3, "appearanceOfLetters": 9 },
    "ه": { "arrangOfLetters": 26, "minorSentences": 5, "middleSentences": 5, "bigSentences": 5, "mostRepeatedLetters": 7, "appearanceOfLetters": 6 },
    "و": { "arrangOfLetters": 27, "minorSentences": 6, "middleSentences": 6, "bigSentences": 6, "mostRepeatedLetters": 5, "appearanceOfLetters": 10 },
    "ي": { "arrangOfLetters": 28, "minorSentences": 1, "middleSentences": 10, "bigSentences": 10, "mostRepeatedLetters": 6, "appearanceOfLetters": 14 }
};

// دالة لاسترجاع القيمة لكل حرف بناءً على الطريقة المحددة باستخدام المصفوفة valuesByKey
function getLetterValue(char, method) {
    const charData = valuesByKey[char];
    if (charData) {
        return charData[method] || 0; // إذا وجدت الحرف، استرجع قيمته في الطريقة المحددة، وإلا فارجع قيمة صفر
    } else {
        return 0; // إذا لم يتم العثور على الحرف، فارجع قيمة صفر
    }
}

// دالة لحساب قيمة كلمة بناءً على حساب كل حرف فيها
function calculateWordValue(word, method) {
    let wordValue = 0;
    for (let i = 0; i < word.length; i++) {
        const char = word[i];
        const charValue = getLetterValue(char, method);
        wordValue += charValue;
    }
    return wordValue;
}

// دالة لحساب قيمة الجملة بناءً على حساب كل كلمة فيها
function calculateSentenceValue(sentence, method) {

        const words = sentence.split(" ");
        let sentenceValue = 0;
        for (let i = 0; i < words.length; i++) {
            const word = words[i];
            const wordValue = calculateWordValue(word, method);
            sentenceValue += wordValue;
            console.log(wordValue,word);
        }
        return sentenceValue+1 ;
    }


// راوت للحصول على مجموع عدد الحروف بالطريقة المحددة
const countVerse =async (req, res) => {
    const method = req.params.method;
    //const sentence = req.body.sentence; // جملة البحث
    const { surah, ayah } = req.body;

    // Fetch the verse based on surah and ayah
    try {
        db.query(`SELECT text,name_arab As Surah FROM ayahs INNER JOIN surah 
                ON ayahs.surah_id = surah.id WHERE surah_id = ? AND number_in_surah = ? `, [surah, ayah], (err, results) => {
            if (err) {
                res.json({err});
            } else {
                if (!method || !valuesByKey["أ"][method]) {
                    return res.status(400).json({ error: 'Invalid method' });
                }
                if (results.length === 0) {
                    return res.status(404).json({ error: 'Ayah not found' });
                }
        
                const ayahText = results[0].text;
                const Surah = results[0].Surah;
                
                const totalSum = calculateSentenceValue(ayahText, method);
                const dividedResult =totalSum /7 ;
                res.json({ "طريقة البحث":method, "مجموع العدد ":totalSum ,"نص الآية ":ayahText,"السورة":Surah,"ناتج القسمة علي 7":dividedResult});
            }
        });
        
    } catch (err) {
        console.error("Error:", err);
        res.json({ error: "An error occurred while fetching text." });
    }
};
/************************************************************************************************************* */
    const countSurah =async (req, res) => {
        const method = req.params.method;
        const surah = req.body.surah;
    
        try {
            db.query(`SELECT text ,name_arab As Surah FROM ayahs INNER JOIN surah ON ayahs.surah_id = surah_id
                 WHERE surah_id = ? `, [surah], (err, results) => {
                if (err) {
                    res.json({err});
                } else {
                    if (!method || !valuesByKey["أ"][method]) {
                        return res.status(400).json({ error: 'Invalid method' });
                    }
                    if (results.length === 0) {
                        return res.status(404).json({ error: 'Surah not found' });
                    }
            
                    let totalSum=0;
                    for(var i=0 ; i<results.length;i++){
                        var surahText=results[i].text;
                    
                        totalSum += calculateSentenceValue(surahText, method);
                        
                        const surah=results[0].text;
                    }
                    //const surahText=results[i].text;
                    const dividedResult =totalSum /7;
                    res.json({ "طريقة البحث":method,  "مجموع العدد ":totalSum ,"ناتج القسمة علي 7":dividedResult, "نص السورة":surahText,"السورة":surah});
                }
            });
            
        } catch (err) {
            console.error("Error:", err);
            res.json({ error: "An error occurred while fetching text." });
        }
    };
/*************************************************************************************************************** */
    const countSentence =async (req, res) => {
        const method = req.params.method;
        const sentence = req.body.sentence; // جملة البحث
    
        if (!method || !valuesByKey["أ"][method]) {
            return res.status(400).json({ error: 'Invalid method' });
        }
    
        if (!sentence) {
            return res.status(400).json({ error: 'Sentence is required' });
        }
    
        const totalSum = calculateSentenceValue(sentence, method);
        const dividedResult = totalSum /7;
        res.json({"طريقة البحث": method, "مجموع العدد ": totalSum ,"ناتج القسمة علي 7":dividedResult, "النص":sentence});
    };
/************************************************************************************************************ */
    const countQuran =async (req, res) => {
        const method = req.params.method;
       
        try {
            db.query(`SELECT text ,name_arab AS Surah , number_in_surah AS Ayah_Number 
                FROM quran.ayahs INNER JOIN surah ON ayahs.surah_id = surah.id `, (err, results) => {
                if (err) {
                    res.json({err});
                } else {
                    if (!method || !valuesByKey["أ"][method]) {
                        return res.status(400).json({ error: 'Invalid method' });
                    }
                    if (results.length === 0) {
                        return res.status(404).json({ error: 'Quran not found' });
                    }
            
                    let totalSum=0;
                    for(var i=0 ; i<results.length;i++){
                        var ayahText=results[i].text;
                    
                        totalSum += calculateSentenceValue(ayahText, method);
                    }
                    const dividedResult = totalSum /7;
                    res.json({"طريقة البحث": method,  "مجموع العدد ":totalSum ,"ناتج القسمة علي 7":dividedResult,"نص القران":results});
                }
            });
            
        } catch (err) {
            console.error("Error:", err);
            res.json({ error: "An error occurred while fetching text." });
        }
    };
  


module.exports = {
    countVerse,
    countSurah,
    countSentence,
    countQuran
};
