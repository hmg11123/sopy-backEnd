const ads = ["졸린", "귀여운", "예쁜", "섹시한", "잘생긴", "젊은", "빠른"];

const non = ["민기", "경민", "효진", "태섭", "은하", "은진", "예림"];

export const generateSecretCode = () => {
 const len = ads.length;

 const ranNun1 = Math.floor(Math.random() * len);
 const ranNun2 = Math.floor(Math.random() * len);

 const result = ads[ranNun1] + " " + non[ranNun2];

 return result;
};
