import { IProfile, Gender, YearsInFrontEnd } from '../models';

const student: IProfile = {
    firstName: 'Ekaterina',
    lastName: 'Volkova',
    firstNameNative: 'Екатерина',
    lastNameNative: 'Волкова',
    city: 'Minsk',
    englishLevel: 'B1',
    contacts: {
        phone: '8-345-343-22-78',
        skype: 'Ekaterina.Volkova',
        telegram: '@Ekaterina.Volkova',
        other: '@Ekaterina.Volkova',
        emails: 'Ekaterina.Volkova@gmail.com',
    },
    primaryEducation: {
        university: 'Belarusian State University of Informatics And Radioelectronics',
        graduationYear: 2015,
        faculty: 'Faculty of Civil Engineering',
    },
    isInternshipNeeded: false,
    isWorkNeeded: true,
    employmentHistory:
        'Lorem ipsum dolor sit amet, \
    consectetur adipiscing elit. Mauris ac elit lacus. \
    In a lorem eu nulla luctus ullamcorper. \
    Mauris id efficitur velit. Nullam efficitur hendrerit \
    lorem sit amet ullamcorper. \
    Vivamus sit amet velit ut ligula venenatis tincidunt ut non risus. \
    Nulla a feugiat augue. Pellentesque ullamcorper, \
    lorem egestas tristique volutpat, tortor est laoreet sapien, \
    id tristique risus quam non ex.',
    notes:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. \
    Mauris ac elit lacus. In a lorem eu nulla luctus ullamcorper.',
    dateOfBirth: '12-08-1997',
    gender: Gender.female,
    tShirtSize: 'M',
    epamDetails: {
        isEPAMEmployee: true,
        epamEmail: 'Ekaterina_Volkova@epam.com',
        epamUpsaId: '1728374657365368892',
    },
    experience: {
        yearsInFrontEnd: YearsInFrontEnd.no,
        isStudiedAtRSSchool: false,
        hadMentoringExperience: false,
    },
    githubId: 'KatieVo',
};

export const getStudentProfile = Promise.resolve(student);
