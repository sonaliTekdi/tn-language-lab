import { Component, Input, OnInit } from '@angular/core';
import { LevelService } from '../../level.service';

@Component({
  selector: 'app-warm-up',
  templateUrl: './warm-up.component.html',
  styleUrls: ['./warm-up.component.scss']
})
export class WarmUpComponent implements OnInit {
  @Input() lesson;


  constructor(public levelService: LevelService) { }

  // lesson = {
  //   "title": "Seasons and Weather",
  //   "id": "lesson-5",
  //   "instruction_1": {
  //     "en_text": "Today we will talk about seasons and weather.\n    How many seasons do you know? What are their names in your mother tongue?\n    Now look at these pictures.  You may have seen them in the newspaper. \n    What do they mean?",
  //     "ta_text": "இன்று நாம் பருவங்கள் மற்றும் வானிலை பற்றி பேசுவோம்.\n    உங்களுக்கு எத்தனை பருவங்கள் தெரியும்? உங்கள் தாய்மொழியில் பருவங்களின் பெயர்கள் என்ன?\n    இப்போது இந்தப் படங்களைப் பாருங்கள். அவற்றை நீங்கள் செய்தித்தாளில் பார்த்திருக்கலாம்.\n    இதை பற்றிஉங்கள் கருத்து என்ன?",
  //     "audio": "assets/collection/lesson-5/audio/instruction-1.mp3"
  //   },
  //   "instruction_2": {
  //     "en_text": "Click on ► to listen to the audio.\n    Read the lines aloud.\n    ",
  //     "ta_text": "ஆடியோவைக் கேட்க ► ஐ கிளிக் செய்யவும்.\n    வரிகளை உரக்கப் படியுங்கள்.",
  //     "video": "assets/collection/lesson-5/video/instruction-2.mp4"
  //   },
  //   "instruction_3": {
  //     "en_text": "Click 'next' to go to the next activity.",
  //     "ta_text": "அடுத்த செயல்பாட்டிற்குச் செல்ல 'அடுத்து' என்பதைக் கிளிக் செய்யவும்."
  //   }
  // };
  // lesson = {
  //   title: 'What\'s going on?',
  //   id: "lesson-1",
  //   instruction_1: {
  //     en_text: "Listen and read along.",
  //     ta_text: "கேட்கவும் மற்றும் படிக்கவும்.",
  //     audio: "assets/collection/lesson-1/audio/instruction-1.mp3"
  //   },
  //   instruction_2: {
  //     en_text: "Click ► to begin.",
  //     ta_text: "தொடங்க ► கிளிக் செய்யவும்.",
  //     video: "assets/collection/lesson-1/video/instruction-2.mp4"
  //   },
  //   instruction_3: {
  //     en_text: "Watch again by clicking ► button.Click 'Picture Play' to go to the next activity.",
  //     ta_text: "► பொத்தானைக் கிளிக் செய்வதன் மூலம் மீண்டும் பார்க்கவும். அடுத்த செயல்பாட்டிற்குச் செல்ல 'படம் விளையாடு' என்பதைக் கிளிக் செய்யவும்."
  //   }
  // }

  ngOnInit(): void {

  }

  gotoNextpage(){
    this.levelService.viewPage = this.levelService.viewPage + 1;
  }
}
