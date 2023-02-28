import { Component, OnInit, ViewChild, ElementRef, ViewChildren, QueryList, Input } from '@angular/core';
import { NgModel } from '@angular/forms';
import {BrowserModule, DomSanitizer} from '@angular/platform-browser'
import { LevelService } from '../level.service';

@Component({
  selector: 'app-level-viewpart',
  templateUrl: './level-viewpart.component.html',
  styleUrls: ['./level-viewpart.component.scss']
})
export class LevelViewpartComponent implements OnInit {
  @ViewChildren('jslist') jslist: QueryList<ElementRef>;
  // @Input() viewPage;

  getQustion: any[];
  jsonList: any[];
  answerBox: boolean = false;

  introduction_lesson_1 = {
    title: 'Lesson 1: What\'s going on?',
    description: "You will listen carefully to find out specific information about your immediate environment and understand simple descriptions of objects.",
    objective: [
      "You will listen to and understand words describing actions in progress.",
      "You will identify some actions and talk briefly about them.",
      "You will read words and sentences describing different actions and understand what they mean.",
      "You will write some simple sentences to describe everyday actions."
    ],    
    id: "lesson-1",
    instruction_1: {
      en_text: "You will listen carefully to find out specific information about your immediate environment and understand simple descriptions of objects.",
      ta_text: ""
    }
  } 

  introduction_lesson_2 = {
    title: 'Weather: What\'s in store today?',
    id: "lesson-5",
    description: "In this lesson, we will look at different seasons and weather.",
    objective: [
      "You will understand vocabulary related to weather when used in simple sentences.",
      "You will answer simple questions about what you like to do in different seasons and weathers.",
      "You will read and understand simple texts about weather.",
    ],
    instruction_1: {
      en_text: "In this lesson, we will look at different seasons and weather.",
      ta_text: ""
    }
  } 

  introduction_lesson_3 = {
    title: 'Location: What\'s in store today?',
    id: "lesson-5",
    description: "In this lesson, you will learn to understand and describe locations of things in your immediate surroundings.",
    objective: [
      "You will recognise and understand words describing locations of objects and people based on audio clues.",
      "You will ask and answer questions about the location of objects and people around you.",
      "ou will also read with understanding an illustrated text that describes the location of people and objects around you.",
    ],
    instruction_1: {
      en_text: "In this lesson, you will learn to understand and describe locations of things in your immediate surroundings.",
      ta_text: ""
    }
  } 

  introduction_lesson_4 = {
    title: 'Feelings: What\'s in store today?',
    id: "lesson-5",
    description: "In this lesson, you will learn how to use English words to express your feelings.",
    objective: [
      "You will listen to audios to recognise and understand words expressing feelings about something or someone in a familiar context or in a simple conversation.",
      "You will use simple words and phrases to express how you feel about something or someone in your immediate environment.",
      "You will read simple texts that describe feelings",
      "You will write simple notes expressing feelings."
    ],
    instruction_1: {
      en_text: "In this lesson, you will learn to understand and describe locations of things in your immediate surroundings.",
      ta_text: ""
    }
  } 



  lesson_1 =  {
    title: 'What\'s going on?',
    id: "lesson-1",
    instruction_1: {
      en_text: "Listen and read along.",
      ta_text: "கேட்கவும் மற்றும் படிக்கவும்.",
      audio: "assets/collection/lesson-1/audio/instruction-1.mp3"
    },
    instruction_2: {
      en_text: "Click ► to begin.",
      ta_text: "தொடங்க ► கிளிக் செய்யவும்.",
      video: "assets/collection/lesson-1/video/instruction-2.mp4"
    },
    instruction_3: {
      en_text: "Watch again by clicking ► button.Click 'Picture Play' to go to the next activity.",
      ta_text: "► பொத்தானைக் கிளிக் செய்வதன் மூலம் மீண்டும் பார்க்கவும். அடுத்த செயல்பாட்டிற்குச் செல்ல 'படம் விளையாடு' என்பதைக் கிளிக் செய்யவும்."
    }
  };

  lesson_2 = {
    "title": "Seasons and Weather",
    "id": "lesson-5",
    "instruction_1": {
      "en_text": "Today we will talk about seasons and weather.\n    How many seasons do you know? What are their names in your mother tongue?\n    Now look at these pictures.  You may have seen them in the newspaper. \n    What do they mean?",
      "ta_text": "இன்று நாம் பருவங்கள் மற்றும் வானிலை பற்றி பேசுவோம்.\n    உங்களுக்கு எத்தனை பருவங்கள் தெரியும்? உங்கள் தாய்மொழியில் பருவங்களின் பெயர்கள் என்ன?\n    இப்போது இந்தப் படங்களைப் பாருங்கள். அவற்றை நீங்கள் செய்தித்தாளில் பார்த்திருக்கலாம்.\n    இதை பற்றிஉங்கள் கருத்து என்ன?",
      "audio": "assets/collection/lesson-5/audio/instruction-1.mp3"
    },
    "instruction_2": {
      "en_text": "Click on ► to listen to the audio.\n    Read the lines aloud.\n    ",
      "ta_text": "ஆடியோவைக் கேட்க ► ஐ கிளிக் செய்யவும்.\n    வரிகளை உரக்கப் படியுங்கள்.",
      "video": "assets/collection/lesson-5/video/instruction-2.mp4"
    },
    "instruction_3": {
      "en_text": "Click 'next' to go to the next activity.",
      "ta_text": "அடுத்த செயல்பாட்டிற்குச் செல்ல 'அடுத்து' என்பதைக் கிளிக் செய்யவும்."
    }
  };
  lesson_3 =  {
    "title": "Find the Things",
    "id": "lesson-6",
    "instruction_1": {
      "en_text": "Today we will talk about seasons and weather.\n How many seasons do you know? What are their names in your mother tongue? \n Now look at these pictures.  You may have seen them in the newspaper. \n What do they mean?",
      "ta_text": "இன்று நாம் பருவங்கள் மற்றும் வானிலை பற்றி பேசுவோம்.\n உங்களுக்கு எத்தனை பருவங்கள் தெரியும்? உங்கள் தாய்மொழியில் பருவங்களின் பெயர்கள் என்ன? \n இப்போது இந்தப் படங்களைப் பாருங்கள். அவற்றை நீங்கள் செய்தித்தாளில் பார்த்திருக்கலாம். \n இதை பற்றிஉங்கள் கருத்து என்ன?",
      "audio": "assets/collection/lesson-6/audio/instruction-1.mp3"
    },
    "instruction_2": {
      "en_text": "Look at the video.\n Click ► and listen to the audio. \n Repeat the lines with your partner. ",
      "ta_text": "வீடியோவைப் பாருங்கள்.► என்பதைக் கிளிக் செய்து ஆடியோவைக் கேளுங்கள்.உங்கள் சக மாணவருடன் வரிகளை மீண்டும் கூறவும்.",
      "video": "assets/collection/lesson-6/video/instruction-2.mp4"
    },
    // "instruction_3": {
    //   "en_text": "Click 'next' to go to the next activity.",
    //   "ta_text": "அடுத்த செயல்பாட்டிற்குச் செல்ல 'அடுத்து' என்பதைக் கிளிக் செய்யவும்."
    // }
  }
  lesson_4 =  {
    "title": "Warm Up: How do you feel today?",
    "id": "lesson-8",
    "instruction_1": {
      "en_text": "Listen and read along. ",
      "ta_text": "கேட்டுப்படிக்கவும்._x000D_",
      "audio": "assets/collection/lesson-8/audio/instruction-1.mp3"
    },
    "instruction_2": {
      "en_text": "Click  ► to begin.",
      "ta_text": "தொடங்க ► கிளிக் செய்யவும்.",
      "video": "assets/collection/lesson-8/video/instruction-2.mp4"
    },
    "instruction_3": {
      "en_text": "Press  ►  to read and listen again.",
      "ta_text": "மீண்டும் படிக்கவும் கேட்கவும் ► ஐ அழுத்தவும்."
    }
  }
    
  wordplayData_2 = {
    title: 'Word Play: Matching Game',
    id: "lesson-2",
    instruction_1: {
      en_text: "Look at the images.\n Each picture shows a season.",
      ta_text: "படங்களைப் பாருங்கள். ஒவ்வொரு படமும் ஒரு பருவத்தைக் காட்டுகிறது.",
    },
    instruction_2: {
      en_text: "Read the sentences.\nMatch the names of the seasons with the sentences.",
      ta_text: "வாக்கியங்களைப் படியுங்கள். பருவங்களின் பெயர்களை வாக்கியங்களுடன் பொருத்தவும்.",
      audio: "assets/collection/lesson-5/wordplay/wordplay.mp3"
    },
    instruction_3: {
      en_text: "Drag and drop the correct word in the blank. Click 'Check Answer' when you finish.",
      ta_text: "சரியான வார்த்தையை வெற்றிடங்களில் நிரப்பவும்.  நீங்கள் முடித்ததும் 'பதிலைச் சரிபார்க்க'  கிளிக் செய்யவும்.",
    }
  }

  picturePlayData_lesson_1 = {
    title: 'Picture Play: What are they doing?',
    id: "lesson-1",
    instruction_1: {
      en_text: "We just saw a video of people doing different actions. Can you match the images below with the actions described?",
      ta_text: "வெவ்வேறு செயல்களைச் செய்யும் நபர்களின் காணொளி பார்த்தோம். விவரிக்கப்பட்டுள்ள செயல்களுடன் கீழே உள்ள படங்களை உங்களால் பொருத்த முடியுமா?",
      audio: "assets/collection/lesson-1/picture-play/instruction-1.mp3"
    },
    iframe: {
      instruction_1:{
        en_text: "Listen to the audio carefully.Drag and drop the image in the box with the audio number that describes the action.",
        ta_text: "ஆடியோவைக் கவனமாகக் கேளுங்கள். செயலை விவரிக்கும் ஆடியோ எண் கொண்ட பெட்டியில் படத்தை இழுத்து விடவும்.",
        audio: "assets/collection/lesson-1/picture-play/instruction-1.mp3"
      },
      src: "https://h5p.org/h5p/embed/1355913"
    }
  }

  picturePlayData_lesson_5 = {
    "title": "Picture Play: Seasons",
    "id": "lesson-5",
    "instruction_1": {
      "en_text": "Listen to the audio carefully.\n      Drag and drop the objects into the correct boxes.\n      Click on 'Check Answer' when you finish.\n      ",
      "ta_text": "ఆడియోను జాగ్రత్తగా వినండి.\n      వస్తువులను సరైన పెట్టెల్లో లాగి, డ్రాప్ చేయండి.\n      మీరు పూర్తి చేసినప్పుడు 'Check Answer' పై క్లిక్ చేయండి.",
      "audio": "assets/collection/lesson-1/picture-play/instruction-1.mp3"
    },
    "iframe": {
      "instruction_1": {
        "en_text": "Listen to the audio carefully.Drag and drop the image in the box with the audio number that describes the action.",
        "ta_text": "ஆடியோவைக் கவனமாகக் கேளுங்கள். செயலை விவரிக்கும் ஆடியோ எண் கொண்ட பெட்டியில் படத்தை இழுத்து விடவும்.",
        "audio": "assets/collection/lesson-5/picture-play/instruction-1.mp3"
      },
      "src": "https://h5p.org/h5p/embed/1355993\n"
    }
  }
  picturePlayData_lesson_6 = {
    "title": "Picture Play: Find the Things",
    "id": "lesson-6",
    "instruction_1": {
      "en_text": "Look at the picture.Some things are missing here. \n Can you put the things back in their correct places?",
      "ta_text": "படத்தைப் பாருங்கள். சில விஷயங்கள் இங்கே இல்லை. \n பொருட்களை அவற்றின் உரித்தான இடங்களில் மீண்டும் வைக்க முடியுமா?",
      "audio": "assets/collection/lesson-6/picture-play/instruction-1.mp3"
    },
    "iframe": {
      "instruction_1": {
        "en_text": "Listen to the audio.Drag and drop the objects into the correct places to finish the picture.You can work with your partner.",
        "ta_text": "ஆடியோவைக் கேளுங்கள்.படத்தை முடிக்க சரியான இடங்களில்பொருட்களை இழுத்து விடுங்கள்.உங்கள் சக மாணவருடன்  நீங்கள் செயல்பாடுகளைச் செய்யலாம்.",
        "audio": "assets/collection/lesson-6/picture-play/instruction-1.mp3"
      },
      "src": "https://h5p.org/h5p/embed/1356284"
    }
  }

  picturePlayData_lesson_8 = {
    title: 'Picture Play: How do they feel?',
    id: "lesson-8",
    instruction_1: {
      en_text: "Look at the people in the images. Listen to the situation. How do they feel? Move the correct 'feelings' to the right image.",
      ta_text: "చిత్రాలలోని వ్యక్తులను చూడండి. పరిస్థితిని వినండి. వారు ఎలా భావిస్తున్నారు? సరియైన చిత్రం పైన 'భావనలు' కదపండి.",
      audio: "assets/collection/lesson-8/picture-play/instruction-1.mp3"
    },
    instruction_2: {
        en_text: "Click  ► to listen to a situation. Then, click on the appropriate 'feeling' in the box. Drag and drop it to the correct image/audio. Click on 'Check Answer' when you finish.",
        ta_text: "పరిస్థితిని వినడానికి ► క్లిక్ చేయండి. తరువాత, బాక్సులో సముచిత  'భావన' పైన క్లిక్ చేయండి. సరియైన చిత్రం/ఆడియోకి దానిని డ్రాగ్ చేసి మరియు డ్రాప్ చేయండి. మీరు పూర్తి చేసిన తరువాత 'జవాబు సరైందో కాదో చూడండి'."
       
      },
    
    iframe: {
      instruction_1:{
        en_text: "Drag and drop the right person to complete the pair. Then, click on the record button to say the name of the relationship. e.g. husband and wife.",
        ta_text: "జతను పూర్తి చేయడానికి సరియైన వ్యక్తిని డ్రాగ్ చేసి మరియు డ్రాప్ చేయండి. తరువాత, సంబంధం పేరుని చెప్పడానికి రికార్డ్ బటన్ పైన క్లిక్ చేయండి. ఉదా. భర్త మరియు భార్య",
        audio: "assets/collection/lesson-8/picture-play/instruction-1.mp3"
      },
      src: "https://h5p.org/h5p/embed/1356282"
    }
  }

  openStory_lesson_1 = {
    title: 'Open Story: Describe the Action',
    id: "lesson-1",
    instruction_1: {
      en_text: "We just saw a video of people doing different actions. Can you match the images below with the actions described?",
      ta_text: "வெவ்வேறு செயல்களைச் செய்யும் நபர்களின் காணொளி பார்த்தோம். விவரிக்கப்பட்டுள்ள செயல்களுடன் கீழே உள்ள படங்களை உங்களால் பொருத்த முடியுமா?",
      audio: "assets/collection/lesson-1/picture-play/instruction-1.mp3"
    },
    instruction_2: {
      en_text: "Click ► to begin.",
      ta_text: "தொடங்க ► கிளிக் செய்யவும்.",
      video: "assets/collection/lesson-1/video/instruction-2.mp4"
    },
    instruction_3: {
      en_text: "Watch again by clicking ► button.Click 'Picture Play' to go to the next activity.",
      ta_text: "► பொத்தானைக் கிளிக் செய்வதன் மூலம் மீண்டும் பார்க்கவும். அடுத்த செயல்பாட்டிற்குச் செல்ல 'படம் விளையாடு' என்பதைக் கிளிக் செய்யவும்."
    }
  }

  thinkAndWrite_lesson_1 = {
    title: 'Think and Write',
    id: "lesson-1",
    iframe: "https://h5p.org/h5p/embed/1356291",
    instruction_1: {
      en_text: "We just saw a video of people doing different actions. Can you match the images below with the actions described?",
      ta_text: "வெவ்வேறு செயல்களைச் செய்யும் நபர்களின் காணொளி பார்த்தோம். விவரிக்கப்பட்டுள்ள செயல்களுடன் கீழே உள்ள படங்களை உங்களால் பொருத்த முடியுமா?",
      audio: "assets/collection/lesson-1/picture-play/instruction-1.mp3"
    },
    instruction_2: {
      en_text: "Click ► to begin.",
      ta_text: "தொடங்க ► கிளிக் செய்யவும்.",
      video: "assets/collection/lesson-1/video/instruction-2.mp4"
    },
    instruction_3: {
      en_text: "Watch again by clicking ► button.Click 'Picture Play' to go to the next activity.",
      ta_text: "► பொத்தானைக் கிளிக் செய்வதன் மூலம் மீண்டும் பார்க்கவும். அடுத்த செயல்பாட்டிற்குச் செல்ல 'படம் விளையாடு' என்பதைக் கிளிக் செய்யவும்."
    }
  }

  thinkAndWrite_lesson_2 = {
    title: 'Think and Write',
    id: "lesson-1",
    iframe: "https://h5p.org/h5p/embed/1356291",
    instruction_1: {
      en_text: "Think and write your responses into the box given below. You may write in any language.",
      ta_text: "கீழே கொடுக்கப்பட்டுள்ள பெட்டியில் உங்கள் பதில்களை யோசித்து எழுதுங்கள். பதில்களை எந்த மொழியிலும் எழுதலாம்.",
      audio: "assets/collection/lesson-1/picture-play/instruction-1.mp3"
    },
    instruction_2: {
      en_text: "Click ► to begin.",
      ta_text: "தொடங்க ► கிளிக் செய்யவும்.",
      video: "assets/collection/lesson-1/video/instruction-2.mp4"
    },
    instruction_3: {
      en_text: "Watch again by clicking ► button.Click 'Picture Play' to go to the next activity.",
      ta_text: "► பொத்தானைக் கிளிக் செய்வதன் மூலம் மீண்டும் பார்க்கவும். அடுத்த செயல்பாட்டிற்குச் செல்ல 'படம் விளையாடு' என்பதைக் கிளிக் செய்யவும்."
    }
  }

  thinkAndWrite_lesson_3 = {
    title: 'Think and Write',
    id: "lesson-1",
    iframe: "https://h5p.org/h5p/embed/1356291",
    instruction_1: {
      en_text: "Think and write your responses into the box given below. You may write in any language.",
      ta_text: "கீழே கொடுக்கப்பட்டுள்ள பெட்டியில் உங்கள் பதில்களை யோசித்து எழுதுங்கள். பதில்களை எந்த மொழியிலும் எழுதலாம்.",
      audio: "assets/collection/lesson-1/picture-play/instruction-1.mp3"
    },
    instruction_2: {
      en_text: "Click ► to begin.",
      ta_text: "தொடங்க ► கிளிக் செய்யவும்.",
      video: "assets/collection/lesson-1/video/instruction-2.mp4"
    },
    instruction_3: {
      en_text: "Watch again by clicking ► button.Click 'Picture Play' to go to the next activity.",
      ta_text: "► பொத்தானைக் கிளிக் செய்வதன் மூலம் மீண்டும் பார்க்கவும். அடுத்த செயல்பாட்டிற்குச் செல்ல 'படம் விளையாடு' என்பதைக் கிளிக் செய்யவும்."
    }
  }

  wordHelp_lesson_1 = [
    {
        "word": "appropriate",
        "audio": "assets/collection/lesson-1/word-help/audio/word-1.mp3",
        "telugu": "பொருத்தமானது"
    },
    {
        "word": "busy",
        "audio": "assets/collection/lesson-1/word-help/audio/word-2.mp3",
        "telugu": "பரபரப்பு"
    },
    {
        "word": "carpet",
        "audio": "assets/collection/lesson-1/word-help/audio/word-3.mp3",
        "telugu": "கம்பளம்"
    },
    {
        "word": "clock",
        "audio": "assets/collection/lesson-1/word-help/audio/word-4.mp3",
        "telugu": "கடிகாரம்"
    },
    {
        "word": "cloudy",
        "audio": "assets/collection/lesson-1/word-help/audio/word-5.mp3",
        "telugu": "மேகமூட்டம்"
    },
    {
        "word": "cricketer",
        "audio": "assets/collection/lesson-1/word-help/audio/word-6.mp3",
        "telugu": "கிரிக்கெட் வீரர்"
    },
    {
        "word": "dustbin",
        "audio": "assets/collection/lesson-1/word-help/audio/word-7.mp3",
        "telugu": "குப்பை தொட்டி"
    },
    {
        "word": "expressions",
        "audio": "assets/collection/lesson-1/word-help/audio/word-8.mp3",
        "telugu": "வெளிப்பாடுகள்"
    },
    {
        "word": "familiar",
        "audio": "assets/collection/lesson-1/word-help/audio/word-9.mp3",
        "telugu": "பரிச்சயமான"
    },
    {
        "word": "guests",
        "audio": "assets/collection/lesson-1/word-help/audio/word-10.mp3",
        "telugu": "விருந்தினர்கள்"
    },
    {
        "word": "huge",
        "audio": "assets/collection/lesson-1/word-help/audio/word-11.mp3",
        "telugu": "மிகப்பெரிய"
    },
    {
        "word": "kite",
        "audio": "assets/collection/lesson-1/word-help/audio/word-12.mp3",
        "telugu": "காத்தாடி"
    },
    {
        "word": "locations",
        "audio": "assets/collection/lesson-1/word-help/audio/word-13.mp3",
        "telugu": "இடங்கள்"
    },
    {
        "word": "map",
        "audio": "assets/collection/lesson-1/word-help/audio/word-14.mp3",
        "telugu": "வரைபடம்"
    },
    {
        "word": "marbles",
        "audio": "assets/collection/lesson-1/word-help/audio/word-15.mp3",
        "telugu": "பளிங்கு கற்கள்"
    },
    {
        "word": "miss",
        "audio": "assets/collection/lesson-1/word-help/audio/word-16.mp3",
        "telugu": "செல்வி"
    },
    {
        "word": "moods",
        "audio": "assets/collection/lesson-1/word-help/audio/word-17.mp3",
        "telugu": "மனநிலைகள்"
    },
    {
        "word": "mufflers",
        "audio": "assets/collection/lesson-1/word-help/audio/word-18.mp3",
        "telugu": "மஃப்லர்கள்"
    },
    {
        "word": "nephews",
        "audio": "assets/collection/lesson-1/word-help/audio/word-19.mp3",
        "telugu": "மருமகன்கள்"
    },
    {
        "word": "nieces",
        "audio": "assets/collection/lesson-1/word-help/audio/word-20.mp3",
        "telugu": "மருமகள்"
    },
    {
        "word": "noisy",
        "audio": "assets/collection/lesson-1/word-help/audio/word-21.mp3",
        "telugu": "சத்தம்"
    },
    {
        "word": "painting",
        "audio": "assets/collection/lesson-1/word-help/audio/word-22.mp3",
        "telugu": "ஓவியம்"
    },
    {
        "word": "phrases",
        "audio": "assets/collection/lesson-1/word-help/audio/word-23.mp3",
        "telugu": "சொற்றொடர்கள்"
    },
    {
        "word": "raincoats",
        "audio": "assets/collection/lesson-1/word-help/audio/word-24.mp3",
        "telugu": "ரெயின்கோட்டுகள்"
    },
    {
        "word": "relatives",
        "audio": "assets/collection/lesson-1/word-help/audio/word-25.mp3",
        "telugu": "உறவினர்கள்"
    },
    {
        "word": "repeat",
        "audio": "assets/collection/lesson-1/word-help/audio/word-26.mp3",
        "telugu": "மீண்டும்"
    },
    {
        "word": "scarves",
        "audio": "assets/collection/lesson-1/word-help/audio/word-27.mp3",
        "telugu": "தாவணி"
    },
    {
        "word": "slipper",
        "audio": "assets/collection/lesson-1/word-help/audio/word-28.mp3",
        "telugu": "செருப்பு"
    },
    {
        "word": "sunny",
        "audio": "assets/collection/lesson-1/word-help/audio/word-29.mp3",
        "telugu": "சூரியன் தீண்டும்"
    },
    {
        "word": "take turns",
        "audio": "assets/collection/lesson-1/word-help/audio/word-30.mp3",
        "telugu": "மாறி மாறி எடுக்கவும்"
    },
    {
        "word": "tired",
        "audio": "assets/collection/lesson-1/word-help/audio/word-31.mp3",
        "telugu": "சோர்வாக"
    },
    {
        "word": "too",
        "audio": "assets/collection/lesson-1/word-help/audio/word-32.mp3",
        "telugu": "கூட"
    },
    {
        "word": "various",
        "audio": "assets/collection/lesson-1/word-help/audio/word-33.mp3",
        "telugu": "பல்வேறு"
    }
  ]

  wordHelp_lesson_2 = [
    {
        "word": "appropriate",
        "audio": "assets/collection/lession3/wordHelp/audio/appropriate.mp3",
        "telugu": "பொருத்தமானது"
    },
    {
        "word": "busy",
        "audio": "assets/collection/lession3/wordHelp/audio/busy.mp3",
        "telugu": "பரபரப்பு"
    },
    {
        "word": "carpet",
        "audio": "assets/collection/lession3/wordHelp/audio/carpet.mp3",
        "telugu": "கம்பளம்"
    },
    {
        "word": "clock",
        "audio": "assets/collection/lession3/wordHelp/audio/clock.mp3",
        "telugu": "கடிகாரம்"
    },
    {
        "word": "cloudy",
        "audio": "assets/collection/lession3/wordHelp/audio/cloudy.mp3",
        "telugu": "மேகமூட்டம்"
    },
    {
        "word": "cricketer",
        "audio": "assets/collection/lession3/wordHelp/audio/cricketer.mp3",
        "telugu": "கிரிக்கெட் வீரர்"
    },
    {
        "word": "dustbin",
        "audio": "assets/collection/lession3/wordHelp/audio/dustbin.mp3",
        "telugu": "குப்பை தொட்டி"
    },
    {
        "word": "expressions",
        "audio": "assets/collection/lession3/wordHelp/audio/expressions.mp3",
        "telugu": "வெளிப்பாடுகள்"
    },
    {
        "word": "familiar",
        "audio": "assets/collection/lession3/wordHelp/audio/familiar.mp3",
        "telugu": "பரிச்சயமான"
    },
    {
        "word": "guests",
        "audio": "assets/collection/lession3/wordHelp/audio/guests.mp3",
        "telugu": "விருந்தினர்கள்"
    },
    {
        "word": "huge",
        "audio": "assets/collection/lession3/wordHelp/audio/huge.mp3",
        "telugu": "மிகப்பெரிய"
    },
    {
        "word": "kite",
        "audio": "assets/collection/lession3/wordHelp/audio/kite.mp3",
        "telugu": "காத்தாடி"
    },
    {
        "word": "locations",
        "audio": "assets/collection/lession3/wordHelp/audio/locations.mp3",
        "telugu": "இடங்கள்"
    },
    {
        "word": "map",
        "audio": "assets/collection/lession3/wordHelp/audio/map.mp3",
        "telugu": "வரைபடம்"
    },
    {
        "word": "marbles",
        "audio": "assets/collection/lession3/wordHelp/audio/marbles.mp3",
        "telugu": "பளிங்கு கற்கள்"
    },
    {
        "word": "miss",
        "audio": "assets/collection/lession3/wordHelp/audio/miss.mp3",
        "telugu": "செல்வி"
    },
    {
        "word": "moods",
        "audio": "assets/collection/lession3/wordHelp/audio/moods.mp3",
        "telugu": "மனநிலைகள்"
    },
    {
        "word": "mufflers",
        "audio": "assets/collection/lession3/wordHelp/audio/mufflers.mp3",
        "telugu": "மஃப்லர்கள்"
    },
    {
        "word": "nephews",
        "audio": "assets/collection/lession3/wordHelp/audio/nephews.mp3",
        "telugu": "மருமகன்கள்"
    },
    {
        "word": "nieces",
        "audio": "assets/collection/lession3/wordHelp/audio/nieces.mp3",
        "telugu": "மருமகள்"
    },
    {
        "word": "noisy",
        "audio": "assets/collection/lession3/wordHelp/audio/noisy.mp3",
        "telugu": "சத்தம்"
    },
    {
        "word": "painting",
        "audio": "assets/collection/lession3/wordHelp/audio/painting.mp3",
        "telugu": "ஓவியம்"
    },
    {
        "word": "phrases",
        "audio": "assets/collection/lession3/wordHelp/audio/phrases.mp3",
        "telugu": "ரெயின்கோட்டுகள்"
    },
    {
        "word": "relatives",
        "audio": "assets/collection/lession3/wordHelp/audio/relatives.mp3",
        "telugu": "உறவினர்கள்"
    },
    {
        "word": "repeat",
        "audio": "assets/collection/lession3/wordHelp/audio/repeat.mp3",
        "telugu": "மீண்டும்"
    },
    {
        "word": "scarves",
        "audio": "assets/collection/lession3/wordHelp/audio/scarves.mp3",
        "telugu": "தாவணி"
    },
    {
        "word": "slipper",
        "audio": "assets/collection/lession3/wordHelp/audio/slipper.mp3",
        "telugu": "செருப்பு"
    },
    {
        "word": "sunny",
        "audio": "assets/collection/lession3/wordHelp/audio/sunny.mp3",
        "telugu": "சூரியன் தீண்டும்"
    },
    {
        "word": "take turns",
        "audio": "assets/collection/lession3/wordHelp/audio/taketurns.mp3",
        "telugu": "மாறி மாறி எடுக்கவும்"
    },
    {
        "word": "tired",
        "audio": "assets/collection/lession3/wordHelp/audio/tired.mp3",
        "telugu": "சோர்வாக"
    },
    {
        "word": "too",
        "audio": "assets/collection/lession3/wordHelp/audio/too.mp3",
        "telugu": "கூட"
    },
    {
        "word": "various",
        "audio": "assets/collection/lession3/wordHelp/audio/various.mp3",
        "telugu": "பல்வேறு"
    }
]

  constructor(
    public sanitizer: DomSanitizer,
    public levelService: LevelService
  ) { }

  ngOnInit(): void {
    this.initJsonList();
    
  }

  initJsonList(){
    this.jsonList = [
      {
        "id":'1',
        "question":'It is a long established fact <span class="input-bx" (drop)="drop($event)" pDroppable></span> a reader will be distracted by <span class="input-bx" (drop)="drop($event)" pDroppable></span> readable content of a page <span class="input-bx" (drop)="drop($event)" pDroppable></span> looking at its layout.',
        "crctques":'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        "ops_list":['that','the','when'],
        "getques":'',
      },
      {
        "id":'2',
        "question":'It is a long established fact <span class="input-bx" (drop)="drop($event)" pDroppable></span> a reader will be distracted by <span class="input-bx" (drop)="drop($event)" pDroppable></span> readable content of a page <span class="input-bx" (drop)="drop($event)" pDroppable></span> looking at its layout.',
        "crctques":'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        "ops_list":['that','the','when'],
        "getques":'',
      }
    ]
  }  

  allowDrop(ev){
    ev.preventDefault();
  }

  drag(ev){
    ev.dataTransfer.setData("Text",ev.target.id);
  }

  drop(ev){
    ev.preventDefault();
    var data=ev.dataTransfer.getData("Text");
    ev.target.parentNode.replaceChild(document.getElementById(data), ev.target);
    document.getElementById(data).className = "droped_cls";
  }

  getValue(){
    // this.getQustion = [];
    // console.log('"Get Value is" -> ',this.myNameElem.nativeElement.innerText);
    // this.getQustion = this.jslist.nativeElement.innerText
    this.answerBox = true;
    this.jslist.forEach(i => {
      // this.getQustion.push(i.nativeElement.innerText);
      var splite_id = i.nativeElement.id.split('_')[1]
      this.jsonList.forEach(j => {
        if(splite_id == j.id){
          j.getques = i.nativeElement.innerText;
        }
      })
    });
    console.log(this.jsonList,'this.jsonList')
  }

   gotoNextpage(){
    this.levelService.viewPage = this.levelService.viewPage + 1;
  }

}
