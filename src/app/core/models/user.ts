export enum Gender {
    male = 'male',
    female = 'female',
}

export enum YearsInFrontEnd {
    lessOne = 'less than 1 year',
    lesTwo = 'less than 2 years',
    twoFive = '2-5 years',
    moreFive = 'more than 5 years',
}

export interface IProfile {
    city: string;
    employmentHistory: string;
    englishLevel: string;
    firstName: string;
    firstNameNative: string;
    isInternshipNeeded: boolean;
    isWorkNeeded: boolean;
    lastName: string;
    lastNameNative: string;
    notes: string;
    contacts: {
        phone: string;
        emails: string;
        skype: string;
        telegram: string;
        other: string;
    };
    primaryEducation: {
        university: string;
        graduationYear: number;
        faculty: string;
    };
    dateOfBirth: string;
    gender: Gender;
    tShirtSize: string;
    epamDetails: {
        isEPAMEmployee: boolean;
        epamEmail?: string;
        epamUpsaId?: string;
    };
    experience: {
        yearsInFrontEnd?: YearsInFrontEnd;
        isStudiedAtRSSchool: boolean;
        hadMentoringExperience: boolean;
    };
    githubId: string;
}

export interface IUserBase {
    _id: string;
}

export interface IUserSession extends IUserBase {
    role: 'mentor' | 'student';
    isAdmin: boolean;
}

export interface IUserParticipation {
    _id: string;
    isActive: boolean;
    courseId: string;
    role: 'mentor' | 'student';
}

export interface IUser extends IUserSession {
    profile: Partial<IProfile>;
    participations: IUserParticipation[];
}

export enum FeedPriority {
    Critical = 0,
    High = 5,
    Medium = 10,
    Low = 15,
}

export interface IFeedRecord {
    priority?: FeedPriority;
    dateTime: number;
    actionType: Actions;
    data: any;
    courseId?: string;
    userId: string;
    entityType: FeedEntities;
}

export enum FeedEntities {
    Course = 'Course',
    Task = 'Task',
    User = 'User',
    Event = 'Event',
    Participation = 'Participation',
}

export enum FeedActions {
    'ENROLL' = 'ENROLL',
    'SIGNUP' = 'SIGNUP',
}

type CourseActions = FeedActions.ENROLL;
type UserActions = FeedActions.SIGNUP;

type Actions = CourseActions | UserActions;
