export type MenuType = {
  text: string;
  subItems: MenuType[];
};

export const menu: MenuType[] = [
  {
    text: 'smart_advisor',
    subItems: [],
  },
  {
    text: 'articles_and_videos',
    subItems: [
      {
        text: 'occasions_and_holidays',
        subItems: [
          {
            text: 'occasions',
            subItems: [],
          },
          {
            text: 'ramadan',
            subItems: [],
          },
          {
            text: 'eid',
            subItems: [],
          },
          {
            text: 'christmas',
            subItems: [],
          },
          {
            text: 'seasonal_occasions',
            subItems: [],
          },
        ],
      },
      {
        text: 'pregnancy',
        subItems: [
          {
            text: 'preconception',
            subItems: [],
          },
          {
            text: 'first_trimester',
            subItems: [],
          },
          {
            text: 'second_trimester',
            subItems: [],
          },
          {
            text: 'third_trimester',
            subItems: [],
          },
          {
            text: 'delivery',
            subItems: [],
          },
          {
            text: 'after_delivery',
            subItems: [],
          },
          {
            text: 'baby_development',
            subItems: [],
          },
        ],
      },
      {
        text: 'breast_feeding',
        subItems: [
          {
            text: 'breast_feeding_item',
            subItems: [],
          },
        ],
      },
      {
        text: 'health',
        subItems: [
          {
            text: 'infants_health',
            subItems: [],
          },
          {
            text: 'women_health',
            subItems: [],
          },
          {
            text: 'children_health',
            subItems: [],
          },
          {
            text: 'dental_health',
            subItems: [],
          },
          {
            text: 'tips_about_health',
            subItems: [],
          },
        ],
      },
      {
        text: 'sleep',
        subItems: [
          {
            text: 'sleep_basics',
            subItems: [],
          },
          {
            text: 'sleep_tips',
            subItems: [],
          },
          {
            text: 'sleep_training',
            subItems: [],
          },
          {
            text: 'naps',
            subItems: [],
          },
        ],
      },
      {
        text: 'parenting',
        subItems: [
          {
            text: 'newborns_0_3_months',
            subItems: [],
          },
          {
            text: 'infants_3_6_months',
            subItems: [],
          },
          {
            text: 'infants_6_9_months',
            subItems: [],
          },
          {
            text: 'infants_9_12_months',
            subItems: [],
          },
          {
            text: 'toddlers_12_15_months',
            subItems: [],
          },
          {
            text: 'toddlers_15_18_months',
            subItems: [],
          },
          {
            text: 'toddlers_18_24_months',
            subItems: [],
          },
          {
            text: 'toddlers_24_36_months',
            subItems: [],
          },
          {
            text: 'preschoolers_3_4_years',
            subItems: [],
          },
          {
            text: 'preschoolers_4_5_years',
            subItems: [],
          },
          {
            text: 'children_6_11_years',
            subItems: [],
          },
          {
            text: 'early_adolescence_12_15_years',
            subItems: [],
          },
          {
            text: 'adolescence_15_18_years',
            subItems: [],
          },
        ],
      },
      {
        text: 'eat',
        subItems: [
          {
            text: 'nutrition_tips',
            subItems: [],
          },
          {
            text: 'infants_4_6_months',
            subItems: [],
          },
          {
            text: 'infants_7_12_months',
            subItems: [],
          },
          {
            text: 'toddlers_1_3_years',
            subItems: [],
          },
          {
            text: 'preschoolers_3_5_years',
            subItems: [],
          },
          {
            text: 'recipes',
            subItems: [],
          },
        ],
      },
      {
        text: 'special_children',
        subItems: [
          {
            text: 'evaluation_and_diagnosis',
            subItems: [],
          },
          {
            text: 'intervention_and_treatment',
            subItems: [],
          },
          {
            text: 'parenting_and_education',
            subItems: [],
          },
          {
            text: 'community_living',
            subItems: [],
          },
          {
            text: 'daily_living',
            subItems: [],
          },
        ],
      },
      {
        text: 'family_time',
        subItems: [
          {
            text: 'relationships',
            subItems: [],
          },
          {
            text: 'reading',
            subItems: [],
          },
        ],
      },
      {
        text: 'my_story',
        subItems: [
          {
            text: 'interviews',
            subItems: [],
          },
          {
            text: 'diaries',
            subItems: [],
          },
          {
            text: 'mothers_stories',
            subItems: [],
          },
        ],
      },
      {
        text: 'lifestyle',
        subItems: [
          {
            text: 'worldwide_news',
            subItems: [],
          },
          {
            text: 'beauty',
            subItems: [],
          },
          {
            text: 'fitness',
            subItems: [],
          },
          {
            text: 'fashion',
            subItems: [],
          },
          {
            text: 'travelling',
            subItems: [],
          },
          {
            text: 'wellness',
            subItems: [],
          },
          {
            text: 'decor',
            subItems: [],
          },
          {
            text: 'home',
            subItems: [],
          },
        ],
      },
      {
        text: 'moms360_news',
        subItems: [],
      },
    ],
  },
  {
    text: 'workshops',
    subItems: [],
  },
  {
    text: 'rewards',
    subItems: [],
  },
  {
    text: 'subscription',
    subItems: [],
  },
];

//IMAGES FILE NAMES

export enum FAV_ICON {
  size_192 = '/favicon/android-icon-192x192.png',
  size_16 = '/favicon/favicon-16x16.png',
}
export enum LOGO {
  ar = '/images/logo_ar.svg?',
  en = '/images/logo_en.svg?',
}
export const WHATSAPP_SVG = '/images/whatsapp.svg';

export enum MOBILE_SCREEN {
  ar = '/images/ar/mobilescreen.png',
  en = '/images/en/mobilescreen.png',
}
export const APP_STORE_IMAGE = '/images/AppStore.png';

export const GOOGLE_PLAY_IMAGE = '/images/GooglePlay.png';

export enum ICONS {
  AI = '/images/icons/icon1.svg',
  AI_Mobile = '/images/AIMobile.svg',
  TIMER = '/images/icons/icon3.svg',
  TIMER_MOBILE = '/images/icons/4mobile.svg',
  CHECKED_PERSON = '/images/icons/icon2.svg',
  CHECKED_PERSON_MOBILE = '/images/icons/secand.svg',
  PERSON = '/images/icons/icon5.svg',
  PERSON_MOBILE = '/images/icons/mobilefive.svg',
  LIST = '/images/icons/icon4.svg',
  LIST_MOBILE = '/images/icons/3mobile.svg',
  TWITTER = '/images/twitter-circled.svg',
  FACEBOOK = '/images/facebook.svg',
  INSTAGRAM = '/images/icons8-instagram.svg',
  YOUTUBE = '/images/youtube copy.svg',
}

export const WHATSAPP_BACKGROUND = '/images/whatsappBackground.png';

export enum FOOTER_LOGO {
  ar = '/images/360MOMSIMG.svg',
  en = '/images/360MOMSIMGEN2.svg',
}
