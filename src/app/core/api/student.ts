import { IProfile } from '../models';

const student: IProfile = {
    firstName: 'Ivan',
    lastName: 'Runets',
    firstNameNative: 'Иван',
    lastNameNative: 'Рунец',
    city: 'Minsk',
    englishLevel: 'C2',
    contacts: {
        phone: '111111',
        skype: 'dadada',
        telegram: 'dadadad',
        other: 'd3bd3',
        emails: 'dadada@',
    },
    primaryEducation: {
        university: 'BSU',
        graduationYear: '2121',
        faculty: 'ssssss',
    },
    isInternshipNeeded: true,
    isWorkNeeded: true,
    employmentHistory: 'dadada',
    notes: 'dadad',
    dateOfbirth: '1990',
    gender: 'Male',
    tShirtSize: 'XL',
    epamDetails: {
        isEPAMEmployee: true,
        epamEmail: 'dddd@',
        epamUpsaId: '2332193829489324',
    },
    experience: {
        yearsInFrontEnd: 'neti',
        isStudiedAtRSSchool: false,
        hadMentoringExperience: false,
    },
    githubId: 'i-runets',
};

export const getStudentProfile = Promise.resolve(student);
