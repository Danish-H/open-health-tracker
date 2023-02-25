export class Summary {
    recent: Entry[];
    activities: Activity[]; 
    emotionCategories: EmotionCategory[] = [];
    get emotions(): Emotion[] {
        return this.emotionCategories.flatMap(x => x.emotions)
    }
}

export class Entry {
    id: number;
    createdAt: Date;
    emotions: Emotion[];
    activities: Activity[];
}

export class EmotionCategory {
    id: number;
    name: string;
    allowMultiple: boolean;
    emotions: Emotion[];
    default: boolean;
}

export class Emotion {
    id: number;
    name: string;
    category: EmotionCategory;
    icon: string;
    isCustom: boolean;
}

export class Activity {
    id: number;
    name: string;
}