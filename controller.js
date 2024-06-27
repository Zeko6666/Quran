
const text = require("body-parser/lib/types/text");
const db =require("./db");
/********************************************************************************************************************/ 

const getcountLetter=async(req,res)=>{
    try {
        const text = req.body.text;
        const cleanedText=text.replace(/\s/g,'');
        const count = cleanedText.length;
        const dividedResult =count /7;
        res.json({text,count,dividedResult})
    } catch (error) {
        res.json({error})
    }

}
/*************************************************************************************************************************/ 
const getAyaText = async (req, res) => {
    const { surah_id, number_in_surah } = req.body;
    try {
        db.query(`SELECT text,name_arab As Surah,number_in_surah As Ayah_Number FROM ayahs INNER JOIN surah 
        ON ayahs.surah_id = surah.id WHERE surah_id = ? AND number_in_surah = ? `, [surah_id, number_in_surah], (err, results) => {
            if (err) {
                res.json({err});
            } else {
                const Ayah_Text =results[0].text;
                const Surah =results[0].Surah;
                const Ayah_Number =results[0].Ayah_Number;
                res.json({  Surah, Ayah_Number,Ayah_Text});;
            }
        });
        
    } catch (err) {
        console.error("Error:", err);
        res.status(500).json({ error: "An error occurred while fetching text." });
    }
};
/********************************************************************************************************************/ 
const getSurahAyas = (req, res) => {
    const surah = req.body.surah;
    db.query(
        `SELECT text, name_arab As Surah, number_in_surah As Ayah_Number 
        FROM ayahs INNER JOIN surah ON ayahs.surah_id = surah.id 
        WHERE surah_id = ?`,
        [surah], // ضع surah داخل مصفوفة
        (err, results) => {
            if (err) {
                res.json({ err });
            } else {
                const Ayahs = results.map(result => (result.text + `(${result.Ayah_Number})`)).join(' & ');
                const Surah = results[0].Surah;
                res.json({ Surah, Ayahs });
            }
        }
    );
};
/****************************************************************************************************************/ 
const getTextForQuran=async(req,res)=>{
    db.query(`SELECT text,name_arab As Surah,number_in_surah As Ayah_Number 
            FROM ayahs INNER JOIN surah ON ayahs.surah_id = surah.id`, (err, results) => {
        if (err) {
            res.json({err});
        } else {
            res.json({results}) ;
        }
    });

}

/***********************************************************************************************************************/ 

const countLetterForAya = async (req, res) => {
    const { surah_id, number_in_surah } = req.body;
    try {
        db.query('SELECT text_without_tashkeel FROM ayahs WHERE surah_id = ? AND number_in_surah = ? ', [surah_id, number_in_surah], async (err, results) => {
            if (err) {
                console.error("Database error:", err);
                res.status(500).json({ error: "An error occurred while fetching text." });
                return;
            }
            
            let totalLetters = 0;
            for (const result of results) {
                const cleanedText=result.text_without_tashkeel.replace(/\s/g,'');

                totalLetters += cleanedText.length;
            }
            const ayah=results[0].text_without_tashkeel;
            const dividedResult = totalLetters /7;
            
            res.json({ ayah,totalLetters , dividedResult});
        });
    } catch (err) {
        console.error("Error:", err);
        res.status(500).json({ error: "An error occurred while processing the request." });
    }
}
/******************************************************************************************************************/

/**********************************************************************************************************************/

const countLetterForSurah=async(req,res)=>{
    const surah=req.body.surah;
    try {
        db.query(`SELECT text_without_tashkeel ,name_arab As Surah FROM ayahs INNER JOIN surah ON ayahs.surah_id = surah.id
                 WHERE surah_id = ? `, [surah], async (err, results) => {
            if (err) {
                console.error("Database error:", err);
                res.status(500).json({ error: "An error occurred while fetching text." });
                return;
            }
            
            let totalLetters = 0;
            for (const result of results) {
                const cleanedText=result.text_without_tashkeel.replace(/\s/g,'');
                totalLetters += cleanedText.length;
            }

            const dividedResult = totalLetters /7;
            res.json({ totalLetters, results ,dividedResult});
        });
    } catch (error) {
        res.json('Error counting letters in Surah:', error);
    }
}
/********************************************************************************************************************/


const countLetterForQuran=async(req,res)=>{
    try {
        db.query('SELECT text_without_tashkeel , name_arab FROM ayahs INNER JOIN surah ON ayahs.surah_id = surah.id', async (err, results) => {
            if (err) {
                console.error("Database error:", err);
                res.status(500).json({ error: "An error occurred while fetching text." });
                return;
            }
            
            let totalLetters = 0;
            for (const result of results) {
                const cleanedText=result.text_without_tashkeel.replace(/\s/g,'');
                totalLetters += cleanedText.length;
            }
            const dividedResult = totalLetters /7;
            res.json({ totalLetters, results,dividedResult });
        });
    } catch (error) {
        res.json({error})
    }
}
/***************************************************************************************************************************/
/*********************************************************************************************************************/ 
const getOccurrenc = async (req, res) => {
    try {
        const { text, word } = req.body;
        const regex = new RegExp(word, 'gi');
        const result = text.match(regex);
        const count =result.length;
        const dividedResult = count/7;
        res.json({text,word,count,dividedResult});
    } catch (error) {
        res.json({ error });
    }
}

/***********************************************************************************************/ 

const getOccurrencInQuran=async(req,res)=>{
    

    try {
        db.query(`SELECT text_emlaay , text , text_without_tashkeel , name_arab AS Surah , number_in_surah AS Ayah_Number 
                FROM quran.ayahs INNER JOIN surah ON ayahs.surah_id = surah.id `,(err, results) => {
            
            if (err) {
                res.json({err});
            } else {

                const word=req.body.word;

                function hasWord(verse){
                    //const cleanedVerse = cleanText(verse.text_emlaay);
                    return verse.text.includes(word) || verse.text_emlaay.includes(word) || verse.text_without_tashkeel.includes(word);
                }
  
                const ayahSearch = results.filter(result => {
                    const regex = new RegExp(word , "gi");
                    return regex.test(result.text) || regex.test(result.text_emlaay) || regex.test(result.text_without_tashkeel);
                });
                const count =ayahSearch.length;
                const dividedResult =count/7;
                res.json({"عدد النتائج":count,"النتائج":ayahSearch,"ناتج القسمة علي 7":dividedResult});
            }
        });
       
    } catch (error) {
        res.json({ error });
    }
};
/***********************************************************************************************************************/ 

const getOccurrencesInAya = async(req,res)=>{
    const { surah_id, number_in_surah } = req.body;
    try {
        db.query('SELECT text_emlaay , text , text_without_tashkeel FROM ayahs WHERE surah_id = ? AND number_in_surah = ? ', [surah_id, number_in_surah], async (err, results) => {
            if (err) {
                res.json({err});
            } else {
                const word=req.body.word;
               
                function hasWord(verse){
                    return verse.text.includes(word) || verse.text_emlaay.includes(word) || verse.text_without_tashkeel.includes(word);
                }
                const ayahSearch =results.filter(result => {
                    const regex = new RegExp (word,"gi");
                    return regex.test(result.text) || regex.test(result.text_emlaay) || regex.test(result.text_without_tashkeel);
                });
                const count =ayahSearch.length;
                const dividedResult = count /7 ;
                res.json({"عدد النتائج":count,"النتائج":ayahSearch,"ناتج القسمة علي 7":dividedResult});
            }
        });
       
    } catch (error) {
        res.json({ error });
    }
};
/******************************************************************************************************************* */

const getOccurrencInSurah=async(req,res)=>{
    const surah=req.body.surah;
    const word=req.body.word;
    try {
        db.query(`SELECT text_emlaay ,text, text_without_tashkeel , name_arab As Surah ,number_in_surah AS Ayah_Number,surah_id
         FROM ayahs INNER JOIN surah ON ayahs.surah_id = surah.id WHERE surah_id = ? `, [surah], async (err, results) => {
            if (err) {
                res.json({err});
            } else {
                
                function hasWord(verse){
                    
                    return verse.text.includes(word) || verse.text_emlaay.includes(word) || verse.text_without_tashkeel.includes(word);
                }
                const ayahSearch =results.filter(result =>{
                    const regex = new RegExp (word,"gi");
                    return regex.test(result.text) || regex.test(result.text_emlaay) || regex.test(result.text_without_tashkeel);
                });
                const count =ayahSearch.length;
                const dividedResult = count /7 ;
                
                res.json({"عدد النتائج":count,"النتائج":ayahSearch,"ناتج القسمة علي 7":dividedResult});
            }
        });
       
    } catch (error) {
        res.json({ error });
    }
};
/***************************************************************************************************************************** */
const countWordsForSurah=async(req,res)=>{
    const surah=req.body.surah;
    try {
        db.query(`SELECT text_emlaay ,name_arab As Surah FROM ayahs INNER JOIN surah ON ayahs.surah_id = surah.id
                 WHERE surah_id = ? `, [surah], async (err, results) => {
            if (err) {
                console.error("Database error:", err);
                res.status(500).json({ error: "An error occurred while fetching text." });
                return;
            }
            
            let totalWords = 0;
            let wordsWithIndex=[];
            let ayahIndex=1;

            for (const result of results) {
                const wordsArray = result.text_emlaay.split(' ');
                totalWords += wordsArray.length;

                const wordsIndexed = wordsArray.map((word) => `(${ayahIndex++}.${word})`);
                wordsWithIndex.push(wordsIndexed);
            }
            
            const dividedResult =totalWords/7;
            
            res.json({totalWords , wordsWithIndex ,dividedResult });
        });
    } catch (error) {
        res.json('Error counting letters in Surah:', error);
    }
};
/*************************************************************************************************************************8 */

const countWordsForAyah = async (req, res) => {
    const surah = req.body.surah;
    const ayah = req.body.ayah;

    try {
        db.query('SELECT text_emlaay FROM ayahs WHERE surah_id = ? AND number_in_surah = ?', [surah, ayah], async (err, results) => {
            if (err) {
                console.error("Database error:", err);
                res.status(500).json({ error: "An error occurred while fetching text." });
                return;
            }
            
            let totalWords = 0;
            let wordsWithIndex = [];
            let wordIndex = 1;

            for (const result of results) {
                const wordsArray = result.text_emlaay.split(' ');
                totalWords += wordsArray.length;

                const wordsIndexed = wordsArray.map((word) => `( ${wordIndex++}. ${word})`);
                wordsWithIndex.push(wordsIndexed);
            }
            const dividedResult =totalWords /7;
            res.json({ totalWords, wordsWithIndex ,dividedResult});
        });
    } catch (error) {
        res.json('Error counting letters in Ayah:', error);
    }
};

/***************************************************************************************************************************** */

const CountWordsInSentence = async (req, res) => {
    try {
        const text = req.body.text;
        const words = text.split(/\s+/).filter(word => word.length > 0);
        const wordsWithIndex = words.map((word, index) => {
            return { word, index: index + 1 };
        });
        const dividedResult = words.length /7;
        res.json({ words: wordsWithIndex, count: words.length,dividedResult });
    } catch (error) {
        res.json({ error });
    }
};

/************************************************************************************************************************** */

const sumIndexesForWordInSurah = async (req, res) => {
    const surah = req.body.surah;
    const word = req.body.word;

    try {
        db.query('SELECT text_emlaay FROM ayahs WHERE surah_id = ?', [surah], async (err, results) => {
            if (err) {
                console.error("Database error:", err);
                res.status(500).json({ error: "An error occurred while fetching text." });
                return;
            }
            
            let totalIndexes = 0;
            let occurences =[];
            let ayahIndex = 1;

            for (const result of results) {
                const wordsArray = result.text_emlaay.split(' ');
                
                for (const wordToFind of wordsArray) {
                    if (wordToFind === word) {
                        totalIndexes += ayahIndex;
                        occurences.push(ayahIndex);
                    }
                    
                    ayahIndex++;
                }
            }
            const dividedResult = totalIndexes/7;
            
            res.json({ totalIndexes ,occurences,dividedResult});
        });
    } catch (error) {
        res.json('Error summing indexes for word:', error);
    }
};

/**************************************************************************************************************** */

const sumIndexesForWordInAyah = async (req, res) => {
    const surah_id = req.body.surah_id;
    const number_in_surah = req.body.number_in_surah;
    const word = req.body.word;

    try {
        db.query('SELECT text_emlaay FROM ayahs WHERE surah_id = ? AND number_in_surah = ?', [surah_id, number_in_surah], async (err, results) => {
            if (err) {
                console.error("Database error:", err);
                res.status(500).json({ error: "An error occurred while fetching text." });
                return;
            }
            
            let totalIndexes = 0;
            let occurrences = [];
            let wordIndex = 1;

            for (const result of results) {
                const wordsArray = result.text_emlaay.split(' ');
                
                for (let i = 0; i < wordsArray.length; i++) {
                    if (wordsArray[i] === word) {
                        totalIndexes += wordIndex;
                        occurrences.push(wordIndex);
                    }
                    
                    wordIndex++;
                }
            }
            const dividedResult =totalIndexes/7;
            res.json({ totalIndexes, occurrences,dividedResult });
        });
    } catch (error) {
        res.json('Error summing indexes for word in Ayah:', error);
    }
};

/****************************************************************************************************************** */

const sumIndexesForWordInSentence = async (req, res) => {
    const text = req.body.text;
    const word = req.body.word;

    try {
        const wordsArray = text.split(' ');
        let totalIndexes = 0;
        let occurrences = [];
        let wordIndex = 1;

        for (let i = 0; i < wordsArray.length; i++) {
            if (wordsArray[i] === word) {
                totalIndexes += wordIndex;
                occurrences.push(wordIndex);
            }

            wordIndex++;
        }
        const dividedResult =totalIndexes/7;
        res.json({ totalIndexes, occurrences , dividedResult});
    } catch (error) {
        res.json('Error summing indexes for word in sentence:', error);
    }
};

/**************************************************************************************************************************** */
    const getOccurrenceLettersOfWordInQuran = (req, res) => {
        const word = req.body.word;
    
        // Query the database to get all verses of the Quran
        db.query(`SELECT text_without_tashkeel, text, name_arab AS Surah, number_in_surah AS Ayah_Number, surah_id
                    FROM ayahs 
                    INNER JOIN surah ON ayahs.surah_id = surah.id`, (err, results) => {
            try {
                if (err) {
                    throw new Error("Database error");
                } else {
                    // Initialize an object to store letter counts
                    const letterCounts = {};
    
                    // Split the word into letters
                    const letters = word.split('');
    
                    // Loop through each letter of the word and initialize its count to 0
                    letters.forEach(letter => {
                        letterCounts[letter] = 0;
                    });
    
                    // Loop through each verse in the results
                    results.forEach(verse => {
                        const verseText =  verse.text_without_tashkeel; // Combine text and translation
                        // Loop through each letter of the word
                        letters.forEach(letter => {
                            // Check if the letter exists in the verse text
                            const occurrences = (verseText.match(new RegExp(letter, "g")) || []).length; // Match occurrences of letter in verse
                            letterCounts[letter] += occurrences; // Add occurrences to total count for the letter
                        });
                    });
    
                    // Sum up the total occurrences of all letters
                    const totalOccurrences = Object.values(letterCounts).reduce((acc, curr) => acc + curr, 0);
    
                    // Create the output object
                    const output = {
                        letter_counts: letterCounts,
                        total_occurrences: totalOccurrences
                    };
    
                    // Send the output in the response
                    res.json(output);
                }
            } catch (error) {
                res.status(500).json({ error: error.message });
            }
        });
    };
 /*************************************************************************************************************** */   
    const getOccurrenceLettersOfWordInSurah = (req, res) => {
        const surah = req.body.surah;
        const word = req.body.word;
    
        // Query the database to get the verses of the Surah
        db.query(`SELECT text_without_tashkeel, text, name_arab AS Surah, number_in_surah AS Ayah_Number, surah_id
                    FROM ayahs 
                    INNER JOIN surah ON ayahs.surah_id = surah.id 
                    WHERE surah_id = ?`, [surah], (err, results) => {
            try {
                if (err) {
                    throw new Error("Database error");
                } else {
                    // Initialize an object to store letter counts
                    const letterCounts = {};
    
                    // Split the word into letters
                    const letters = word.split('');
    
                    // Loop through each letter of the word and initialize its count to 0
                    letters.forEach(letter => {
                        letterCounts[letter] = 0;
                    });
    
                    // Loop through each verse in the results
                    results.forEach(verse => {
                        const verseText =  verse.text_without_tashkeel; // Combine text and translation
                        // Loop through each letter of the word
                        letters.forEach(letter => {
                            // Check if the letter exists in the verse text
                            const occurrences = (verseText.match(new RegExp(letter, "g")) || []).length; // Match occurrences of letter in verse
                            letterCounts[letter] += occurrences; // Add occurrences to total count for the letter
                        });
                    });
    
                    // Sum up the total occurrences of all letters
                    const totalOccurrences = Object.values(letterCounts).reduce((acc, curr) => acc + curr, 0);
    
                    // Create the output object
                    const output = {
                        surah_name: results[0].Surah, // Assuming the Surah name is in the first result
                        letter_counts: letterCounts,
                        total_occurrences: totalOccurrences
                    };
                    const dividedResult =totalOccurrences/7;
                    // Send the output in the response
                    res.json({output,dividedResult});
                }
            } catch (error) {
                res.status(500).json({ error: error.message });
            }
        });
    };

 /************************************************************************************************************************ */   

 const getOccurrenceLettersOfWordInAyah = (req, res) => {
    const surah = req.body.surah;
    const ayahNumber = req.body.ayah;
    const word = req.body.word;

    // Query the database to get the specific verse
    db.query(`SELECT text_without_tashkeel, text, name_arab AS Surah, number_in_surah AS Ayah_Number, surah_id
                FROM ayahs 
                INNER JOIN surah ON ayahs.surah_id = surah.id 
                WHERE surah_id = ? AND number_in_surah = ?`, [surah, ayahNumber], (err, results) => {
        try {
            if (err) {
                throw new Error("Database error");
            } else if (results.length === 0) {
                throw new Error("Verse not found");
            } else {
                const verseText = results[0].text_without_tashkeel; // Get the verse text

                // Initialize an object to store letter counts
                const letterCounts = {};

                // Loop through each letter of the word and initialize its count to 0
                for (const letter of word) {
                    letterCounts[letter] = 0;
                }

                // Loop through each letter of the verse
                for (const letter of verseText) {
                    // Check if the letter exists in the word
                    if (word.includes(letter)) {
                        letterCounts[letter]++; // Increment occurrences for the letter
                    }
                }

                // Calculate total occurrences
                const totalOccurrences = Object.values(letterCounts).reduce((acc, curr) => acc + curr, 0);
                // Calculate the result of total occurrences divided by 7
                const occurrencesDividedBySeven = totalOccurrences / 7;

                // Create the output object
                const output = {
                    surah_name: results[0].Surah,
                    ayah_number: results[0].Ayah_Number,
                    letter_counts: letterCounts,
                    total_occurrences: totalOccurrences,
                    occurrences_divided_by_seven: occurrencesDividedBySeven
                };

                // Send the output in the response
                res.json(output);
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    });
};
/***************************************************************************************************************************************************************** */

    const getOccurrenceLettersOfWordInSentence = (req, res) => { 
            const sentence = req.body.sentence;
            const word = req.body.word;
        
            try {
                // Initialize an object to store letter counts
                const letterCounts = {};
        
                // Loop through each letter of the word
                for (const letter of word) {
                    // Check if the letter exists in the sentence
                    const occurrences = (sentence.match(new RegExp(letter, "g")) || []).length; // Match occurrences of letter in sentence
                    if (letterCounts[letter]) {
                        letterCounts[letter] += occurrences; // Add occurrences to existing count for the letter
                    } else {
                        letterCounts[letter] = occurrences; // Initialize count for the letter
                    }
                }
        
                // Sum up the total occurrences of all letters
                const totalOccurrences = Object.values(letterCounts).reduce((acc, curr) => acc + curr, 0);
        
                // Create the output object
                const output = {
                    letter_counts: letterCounts,
                    total_occurrences: totalOccurrences
                };
                const dividedResult =totalOccurrences/7;
                // Send the output in the response
                res.json({output,dividedResult});
            } catch (error) {
                res.status(500).json({ error: error.message });
            }
        }

 
    
/********************************************************************************************************************** */
const calculateLettersInSentences = async (req, res) => {   
    try {
       
        const text = req.body.text;
        function splitTextIntoWords(text) {
            return text.split(" ");
        }
        const words = await splitTextIntoWords(text);
        
        
        let cleanedWord = [] ; 
        let wordLength = [] ; 
        let totalLetters = "" ; 

        for(let word of words){
            let t= word.replace(/\s/g,'');
            let wordLengthTest = t.length;
            cleanedWord.push(t);
            wordLength.push(wordLengthTest);
            totalLetters += wordLengthTest ; 
        }

        let te = totalLetters.split('').reverse().join('') ; 
        let tt = parseInt(te);
        res.json({ words: cleanedWord , wordCounts: wordLength, totalLetters:te ,dividedResult : tt / 7});
    } catch (error) {
        res.json({ error });
    }
}
/***************************************************************************************************************** */

const calculateLettersInAyah = async (req, res) => {
    const { surah_id, number_in_surah,text_type } = req.body;
    let columnName = '';
    
    if (text_type === 1) {
        columnName = 'text_without_tashkeel';
    } else if (text_type === 2) {
        columnName = 'text_emlaay';
    } else {
        // Default to 'text_without_tashkeel' if text_type is not provided or invalid
        columnName = 'text_without_tashkeel';
    }

    try {
        db.query('SELECT ?? FROM ayahs WHERE surah_id = ? AND number_in_surah = ? ', [columnName,surah_id, number_in_surah], async (err, results) => {
            if (err) {
                console.error("Database error:", err);
                res.status(500).json({ error: "An error occurred while fetching text." });
                return;
            }
            
            const wordCounts = new Map();
            let totalLetters='';
            //const ayah = results[0].text_without_tashkeel;
            const ayah = results[0][columnName];
            function splitTextIntoWords(text) {
                return text.split(" ");
            }
            const words = await splitTextIntoWords(ayah); // split by one or more spaces

                for (const word of words) {
                    const cleanedWord = word.replace(/\s/g,'');
                    const wordLength=cleanedWord.length;
                //    wordCounts[word]=wordLength;

                   if (wordCounts.has(cleanedWord)){
                    const count = wordCounts.get(cleanedWord);
                    wordCounts.set(cleanedWord,count+wordLength);
                   }else{
                    wordCounts.set(cleanedWord,wordLength)
                   }
                    totalLetters+=wordLength;
                    
                    
                }
                totalLetters=totalLetters.toString().split('').reverse().join('');
                const wordCountsObject = Object.fromEntries(wordCounts.entries());
                const dividedResult =totalLetters/7;
            res.json({wordCounts:wordCountsObject,totalLetters,dividedResult});
        });
    } catch (err) {
        console.error("Error:", err);
        res.status(500).json({ error: "An error occurred while processing the request." });
    }
}

/************************************************************************************************************************************************* */

/*************************************************************************************************************** */

const calculateLettersInSurah = async (req, res) => {
    const { surah_id ,text_type} = req.body;
    let columnName = '';
    
    if (text_type === 1) {
        columnName = 'text_without_tashkeel';
    } else if (text_type === 2) {
        columnName = 'text_emlaay';
    } else {
        // Default to 'text_without_tashkeel' if text_type is not provided or invalid
        columnName = 'text_without_tashkeel';
    }

    try {
        db.query('SELECT ?? FROM ayahs WHERE surah_id = ? ', [columnName,surah_id], async (err, results) => {
            if (err) {
                console.error("Database error:", err);
                res.status(500).json({ error: "An error occurred while fetching text." });
                return;
            }
            
            let cleanedWord = [] ; 
            let wordLength = [] ; 
            let totalLetters = "" ; 
            function splitTextIntoWords(text) {
                return text.split(" ");
            }
            

            for (let ayahData of results) {
                let ayah = ayahData.text_without_tashkeel||ayahData.text_emlaay;
                let words = await splitTextIntoWords(ayah);

                for (let word of words) {
                    let t= word.replace(/\s/g,'');
                    let wordLengthTest = t.length;
                    cleanedWord.push(t);
                    wordLength.push(wordLengthTest);
                    totalLetters += wordLengthTest ; 
             
                }

            }
            let te = totalLetters.split('').reverse().join('') ; 
            let tt = parseInt(te);
            res.json({ words: cleanedWord , wordCounts: wordLength, totalLetters:te ,dividedResult : tt / 7});
        });
    } catch (err) {
        console.error("Error:", err);
        res.status(500).json({ error: "An error occurred while processing the request." });
    }
}

/*************************************************************************************************************** */  
const calculateOccurrencesForSentence = (req, res) => {
    const { word, sentence } = req.body;

    if (!word || !sentence) {
        return res.status(400).json({ error: 'Word and sentence are required' });
    }

    // تحويل الكلمة والجملة إلى حروف صغيرة للتعامل مع الأحرف الكبيرة والصغيرة بشكل متساوٍ
    const normalizedWord = word.toLowerCase();
    const normalizedSentence = sentence.toLowerCase();

    // تقسيم الجملة إلى كلمات
    const words = normalizedSentence.split(' ');

    // كائن لتخزين عدد التكرارات لكل كلمة في الجملة
    const occurrencesArray = [];

    // حساب عدد التكرارات لكل كلمة في الجملة
    for (const singleWord of words) {
        let count = 0;
        for (const char of singleWord) {
            if (normalizedWord.includes(char)) {
                count++;
            }
        }
        occurrencesArray.push({ word: singleWord, count: count });
    }

    // توليد سلسلة من الأرقام بدون فواصل، بدءاً من آخر كلمة في الجملة إلى أول كلمة
    const occurrencesString = occurrencesArray.map(item => item.count).join('');

    // عكس ترتيب الأرقام في السلسلة occurrencesString
    const reversedOccurrencesString = occurrencesString.split('').reverse().join('');

    // قسمة الناتج على الرقم 7
    const dividedResult = parseInt(occurrencesString, 10) / 7;

    res.json({ occurrencesArray, occurrencesString: reversedOccurrencesString, dividedResult });
}
/********************************************************************************************************************* */  
const calculateOccurrencesForSurah = async (req, res) => {
    const { surah , word ,text_type } = req.body;
    
    if (!word) {
        return res.status(400).json({ error: "Word is required" });
    }
    let columnName = '';
    
    if (text_type === 1) {
        columnName = 'text_without_tashkeel';
    } else if (text_type === 2) {
        columnName = 'text_emlaay';
    } else {
        // Default to 'text_without_tashkeel' if text_type is not provided or invalid
        columnName = 'text_without_tashkeel';
    }
    try {
        db.query(
            `SELECT ?? 
             FROM ayahs 
             WHERE surah_id = ?`,
            [columnName,surah],
            (err, results) => {
                if (err) {
                    console.error("Database error:", err);
                    return res.status(500).json({ error: "Database error" });
                }

                if (results.length === 0) {
                    return res.status(404).json({ error: "Surah not found" });
                }

                // Concatenate all ayah texts into a single string
                const surahText = results.map((ayah) => ayah.text_without_tashkeel||ayah.text_emlaay).join(" ")  ;

                const normalizedWord = word.toLowerCase();
                const normalizedSentence = surahText.toLowerCase();
                const words = normalizedSentence.split(' ');
                const occurrencesArray = [];

                // Calculate occurrences for each word in the surah
                for (const singleWord of words) {
                    let count = 0;
                    for (const char of singleWord) {
                        if (normalizedWord.includes(char)) {
                            count++;
                        }
                    }
                    occurrencesArray.push({ word: singleWord, count: count });
                }

                // Generate occurrences string without separators
                const occurrencesString = occurrencesArray.map(item => item.count).join('');

                // Reverse the order of numbers in the occurrencesString
                const reversedOccurrencesString = occurrencesString.split('').reverse().join('');

                // Calculate the division result
                const totalOccurrences = parseInt(occurrencesString, 10);
                const dividedResult = totalOccurrences / 7;

                // Create the output object
                const output = {
                    occurrencesArray,
                    occurrencesString: reversedOccurrencesString,
                   // occurrencesInLine: occurrencesArray.map(item => `${item.count}`).join(''),
                    dividedResult      // result after division by 7
                };

                // Send the output in the response
                res.json(output);

            }
        );
    } catch (err) {
        console.error("Error:", err);
        res.status(500).json({ error: "An error occurred while fetching text." });
    }
};
/*********************************************************************************************************** */  
const calculateOccurrencesForeAyah = (req, res) => {
    const {surah , ayah , word ,text_type} = req.body;
    // const { surah, ayah } = req.params;

    if (!word || !surah || !ayah) {
        return res.status(400).json({ error: 'Word, surah, and ayah are required' });
    }
    let columnName = '';
    
    if (text_type === 1) {
        columnName = 'text_without_tashkeel';
    } else if (text_type === 2) {
        columnName = 'text_emlaay';
    } else {
        // Default to 'text_without_tashkeel' if text_type is not provided or invalid
        columnName = 'text_without_tashkeel';
    }
    try {
        db.query(
            `SELECT ??, name_arab AS Surah, number_in_surah AS Ayah_Number 
             FROM ayahs 
             INNER JOIN surah ON ayahs.surah_id = surah.id 
             WHERE surah_id = ? AND number_in_surah = ? `,
            [columnName,surah, ayah],
            (err, results) => {
                if (err) {
                    return res.status(500).json({ error: 'An error occurred while fetching ayah text.' });
                } else {
                    if (results.length === 0) {
                        return res.status(404).json({ error: 'Ayah not found' });
                    }

                    const ayahText = results[0].text_without_tashkeel ||results[0].text_emlaay ;
                    const normalizedWord = word.toLowerCase();
                    const normalizedSentence = ayahText.toLowerCase();

                    // Split the sentence into words
                    const words = normalizedSentence.split(' ');

                    // Array to store occurrences for each word in the ayah
                    const occurrencesArray = [];

                    // Calculate occurrences for each word in the ayah
                    for (const singleWord of words) {
                        let count = 0;
                        for (const char of singleWord) {
                            if (normalizedWord.includes(char)) {
                                count++;
                            }
                        }
                        occurrencesArray.push({ word: singleWord, count: count });
                    }

                    // Generate occurrences string without separators
                    const occurrencesString = occurrencesArray.map(item => item.count).join('');

                    // Reverse the order of numbers in the occurrencesString
                    const reversedOccurrencesString = occurrencesString.split('').reverse().join('');

                    // Parse reversedOccurrencesString as an integer
                    const totalReversedOccurrences = parseInt(reversedOccurrencesString, 10);

                    // Calculate the division result
                    const dividedResult = totalReversedOccurrences / 7;

                    // Create the output object
                    const output = {
                        occurrencesArray,
                       // occurrencesString,
                        occurrencesInLine: reversedOccurrencesString,
                        dividedResult      // result after division by 7
                    };

                    // Send the output in the response
                    res.json(output);
                }
            }
        );
    } catch (err) {
        console.error('Error:', err);
        res.status(500).json({ error: 'An error occurred while processing the request.' });
    }
};

/************************************************************************************************************* */


  //فانكشن بتعمل غمليه صف الارقام للحروف في جملة
  
  const getOccurrenceLettersOfWordInSentence2 = (req, res) => { 
    const sentence = req.body.sentence;
    const word = req.body.word;
    
    try {
        // Initialize an array to store letter counts
        const letterCounts = [];
        
        // Loop through each letter of the word
        for (const letter of word) {
            // Check if the letter exists in the sentence
            const occurrences = (sentence.match(new RegExp(letter, "g")) || []).length; // Match occurrences of letter in sentence
        
            // Add the letter with its count to the array
            letterCounts.push({ letter, count: occurrences });
        }

        // Create a string of counts in reverse order
        const countsString = letterCounts.map(item => item.count).join('');

        // Reverse the countsString to arrange from left to right
        const reversedCountsString = countsString.split('').reverse().join('');

        // Convert reversedCountsString to number
        const totalCount = parseInt(reversedCountsString, 10);

        // Divide totalCount by 7
        const dividedResult = totalCount / 7;

        // Create the output object
        const output = {
            letter_counts: letterCounts,
            total_count: reversedCountsString,
            divided_result: dividedResult // The result after division by 7
        };

        // Send the output in the response
        res.json(output);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

/******************************************************************************************************************* */

//فانكشن تقوم بعمليه صف الارقام للحروف في اية
const getOccurrenceLettersOfWordInAyah2 = (req, res) => {
    const surah = req.body.surah; // رقم السورة
    const ayahNumber = req.body.ayah; // رقم الآية
    const word = req.body.word; // الكلمة المراد البحث عنها

    // Query the database to get the specific verse
    db.query(`SELECT text_without_tashkeel, text, name_arab AS Surah, number_in_surah AS Ayah_Number, surah_id
                FROM ayahs 
                INNER JOIN surah ON ayahs.surah_id = surah.id 
                WHERE surah_id = ? AND number_in_surah = ?`, [surah, ayahNumber], (err, results) => {
        try {
            if (err) {
                throw new Error("Database error");
            } else if (results.length === 0) {
                throw new Error("Verse not found");
            } else {
                const verseText = results[0].text_without_tashkeel; // Get the verse text

                // Initialize an object to store letter counts
                const letterCounts = {};

                // Split the word into individual letters and reverse them
                const letters = word.split('').reverse();

                // Loop through each letter of the word and initialize its count to 0
                letters.forEach(letter => {
                    letterCounts[letter] = 0;
                });

                // Loop through each letter of the verse
                for (const letter of verseText) {
                    // Check if the letter exists in the word
                    if (letters.includes(letter)) {
                        letterCounts[letter]++; // Increment occurrences for the letter
                    }
                }

                // Create the output string of letter occurrences from right to left
                let outputLetters = '';
                letters.forEach(letter => {
                    outputLetters += `${letter}${letterCounts[letter]} و `;
                });

                // Remove the trailing " و "
                outputLetters = outputLetters.slice(0, -2);

                // Reverse the order of letters and counts for final display
                const reversedOutput = outputLetters.split(' و ').reverse().join(' و ');

                // Create the normal sequence string
                let normalSequence = Object.values(letterCounts).join('');

                // Calculate total occurrences
                const totalOccurrences = parseInt(normalSequence, 10);

                // Divide totalOccurrences by 7
                const dividedResult = totalOccurrences / 7;

                // Create the final output object
                const responseObject = {
                    surah_name: results[0].Surah,
                    ayah_number: results[0].Ayah_Number,
                    letter_counts: reversedOutput,
                    total_occurrences: normalSequence,
                    divided_result: dividedResult
                };

                // Send the output in the response
                res.json(responseObject);
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    });
};
/****************************************************************************************************************** */
//فانكشن تقوم بعمليه صف الارقام للحروف السورة

const getOccurrenceLettersOfWordInSurah2 = (req, res) => {
    const surah = req.body.surah;
    const word = req.body.word;

    // Query the database to get the verses of the Surah
    db.query(`SELECT text_without_tashkeel, text, name_arab AS Surah, number_in_surah AS Ayah_Number, surah_id
                FROM ayahs 
                INNER JOIN surah ON ayahs.surah_id = surah.id 
                WHERE surah_id = ?`, [surah], (err, results) => {
        try {
            if (err) {
                throw new Error("Database error");
            } else if (results.length === 0) {
                throw new Error("Surah not found");
            } else {
                // Initialize an object to store letter counts
                const letterCounts = {};

                // Split the word into letters
                const letters = word.split('');

                // Loop through each letter of the word and initialize its count to 0
                letters.forEach(letter => {
                    letterCounts[letter] = 0;
                });

                // Loop through each verse in the results
                results.forEach(verse => {
                    const verseText = verse.text_without_tashkeel; // Get the verse text
                    // Loop through each letter of the word
                    letters.forEach(letter => {
                        // Check if the letter exists in the verse text
                        const occurrences = (verseText.match(new RegExp(letter, "g")) || []).length; // Match occurrences of letter in verse
                        letterCounts[letter] += occurrences; // Add occurrences to total count for the letter
                    });
                });

                // Create a string of counts in reverse order
                const countsString = letters.map(letter => letterCounts[letter]).reverse().join('');

                // Convert countsString to a number
                const totalOccurrences = countsString;

                // Divide totalOccurrences by 7
                const dividedResult = divideBySeven(totalOccurrences);

                // Create the output object
                const output = {
                    surah_name: results[0].Surah, // Assuming the Surah name is in the first result
                    letter_counts: letterCounts,
                    total_occurrences: totalOccurrences, // Keep the countsString as it is for display purposes
                    divided_result: dividedResult
                };

                // Send the output in the response
                res.json(output);
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    });
};

// Function to divide a string number by 7
function divideBySeven(numString) {
    const num = parseInt(numString, 10); // Convert string to number
    const result = num / 7; // Perform division
    return result.toFixed(2); // Return result as a string with two decimal places
};



module.exports={
    getcountLetter,
    getAyaText,
    getSurahAyas,
    countLetterForAya,
    countLetterForSurah,
    getTextForQuran,
    countLetterForQuran,
    getOccurrenc,
    getOccurrencInQuran,
    getOccurrencesInAya,
    getOccurrencInSurah,
    countWordsForSurah,
    sumIndexesForWordInSurah,
    sumIndexesForWordInAyah,
    countWordsForAyah,
    CountWordsInSentence,
    sumIndexesForWordInSentence,
    getOccurrenceLettersOfWordInQuran,
    getOccurrenceLettersOfWordInSurah,
    getOccurrenceLettersOfWordInAyah,
    getOccurrenceLettersOfWordInSentence,
    calculateLettersInSentences,
    calculateLettersInAyah,
    calculateLettersInSurah,
    calculateOccurrencesForSentence,
    calculateOccurrencesForeAyah,
    calculateOccurrencesForSurah,
    getOccurrenceLettersOfWordInAyah2,
    getOccurrenceLettersOfWordInSentence2,
    getOccurrenceLettersOfWordInSurah2
    
    
    
}