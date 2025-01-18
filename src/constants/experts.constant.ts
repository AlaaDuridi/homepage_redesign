import {IExpert, IExpertFE} from "../types/models/expert.model.ts";
import {Language} from "../types/common.ts";

export  const EXPERTS :IExpert[] =[
    {
        name_ar:'الدكتورة دينا يغمور',
        name_en:'Dr. Dina Yaghmour',
        specification_ar:'أخصائية نسائية وتوليد',
        specification_en:'Gynecologist',
        functional_description_ar:'أخصائية أمراض النساء والتوليد، حاصلة على البورد الأردني في طب النسائية والتوليد، وهي عضو في الجمعية الأردنية لأمراض النسائية والولادة',
        functional_description_en:'Obstetrician and Gynecologist, holds the Jordanian Board in Obstetrics and Gynecology, and is a member of the Jordanian Society of Obstetrics and Gynecology. ',
        readMoreLink:'https://www.360moms.net/en/authors/115-dr-dina-yaghmour',
        image:'https://www.360moms.net/images/دينا ياغور.webp',
    },
    {
        name_ar:'الدكتور رامي الكيلاني',
        name_en:'Dr. Rami Al-Kilani ',
        specification_ar:'أخصائي نسائية وتوليد',
        specification_en:'Gynecology and Obstetrics',
        functional_description_ar:'طبيب أردني أخصائي نسائية وتوليد أنهى دراسة الطب الأولى من الأردن ثم تابع دراسته في الولايات المتحدة الأمريكية، يحمل شهادة البورد',
        functional_description_en:'A Jordanian doctor, a specialist in obstetrics and gynecology, who completed his medical studies in Jordan, then continued his studies in the United States of America. He holds a board certificate',
        readMoreLink:'https://www.360moms.net/en/authors/1-dr-rami-kilani',
        image:'https://www.360moms.net/images/رامي الكيلاني.jpg',
    },
    {
        name_ar:'سيرسا قورشة',
        name_en:'Sirsa Qursha ',
        specification_ar:'أخصائية طفولة وإرشاد والدي',
        specification_en:'Childhood and parental guidance specialist',
        functional_description_ar:'سيرسا قورشة أخصائية طفولة وإرشاد والدي. لدى سيرسا أكثر من 10-سنوات خبرة في العمل المباشر مع الأسر والأطفال وبالتحديد في ما يتعلق...',
        functional_description_en:'Sirsa Qursha is a Child and Parenting Specialist. Sirsa has over 10 years of experience working directly with families and children, specifically in relation to...',
        readMoreLink:'https://www.360moms.net/en/authors/2-sirsa-qursha',
        image:'https://www.360moms.net/images/سيرسا.webp',
    },
    {
        name_ar:'الدكتورة ليندا أبوجابر',
        name_en:'Dr. Linda Abu Jaber ',
        specification_ar:'طبيبة استشارية في طب الأطفال',
        specification_en:'Consultant Pediatrician ',
        functional_description_ar:'د.ليندا هي طبيبة أطفال متخصصة معتمدة، وهي حاصلة على البورد في الأمراض المعدية لدى الأطفال والطب التكاملي والشامل',
        functional_description_en:'Dr. Linda is a board-certified pediatrician, board-certified in pediatric infectious diseases and integrative and holistic medicine. ',
        readMoreLink:'https://360moms.net/en/authors/78-dr-linda-abu-jaber',
        image:'https://www.360moms.net/images/ليندا.jpg',
    },



]

export const getExperts =(lang:Language):IExpertFE[] =>{
    return EXPERTS.map((expert:IExpert)=>{
        return {
            name:lang==='ar'?expert.name_ar:expert.name_en,
            specification:lang==='ar'?expert.specification_ar:expert.specification_en,
            functional_description:lang==='ar'?expert.functional_description_ar:expert.functional_description_en,
            readMoreLink:expert.readMoreLink,
            image:expert.image
        }
    })
}