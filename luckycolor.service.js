export const getLuckycolor = async (query) => {
    try {
      const luckycolor = 
      ["白：ホワイト☆光とピュアさが人気",
       "黒：ブラック☆全てを包み込む", 
       "灰：グレー☆誰とでも仲良し", 
       "赤：レッド☆燃える紅", 
       "青：ブルー☆空色から紺碧",
       "緑：グリーン☆植物の色癒し"];
      const min = 0;
      const max = luckycolor.length - 1;
      const index = Math.floor(Math.random() * (max - min + 1)) + min;
      return { result: luckycolor[index] };
    } catch (e) {
      throw Error("Error while getting Lucky color.");
    }
  };