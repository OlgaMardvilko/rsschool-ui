import { IUser, Gender, YearsInFrontEnd } from '../models';

const mentor: IUser = {
    isAdmin: false,
    role: 'mentor',
    _id: 'dadajndjksandjk3n4324',
    profile: {
        firstName: 'Ivan',
        lastName: 'Stepanov',
        firstNameNative: 'Иван',
        lastNameNative: 'Степанов',
        city: 'Minsk',
        englishLevel: '',
        contacts: {
            phone: '8-345-343-22-78',
            skype: 'Ivan.Stepanov',
            telegram: '@Ivan.Stepanov',
            other: '@Ivan.Stepanov',
            emails: 'Ivan.Stepanov@gmail.com',
        },
        primaryEducation: {
            university: 'Belarusian State University of Informatics And Radioelectronics',
            faculty: 'Faculty of Civil Engineering',
            graduationYear: 2015,
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
        dateOfBirth: '12-08-1987',
        gender: Gender.male,
        tShirtSize: 'L',
        epamDetails: {
            isEPAMEmployee: true,
            epamEmail: '',
            epamUpsaId: '',
        },
        experience: {
            yearsInFrontEnd: YearsInFrontEnd.moreFive,
            isStudiedAtRSSchool: false,
            hadMentoringExperience: false,
        },
        mentoring: {
            amountStages: '',
            amountStudents: '',
            colleague: '',
        },
        githubId: 'dzmitry-varabei',
    },
    participations: [
        {
            _id: 'dadajndjksandjk3n4324',
            isActive: true,
            courseId: 'rs-course-2018-1',
            role: 'mentor',
        },
    ],
};

export const getMentorProfile = Promise.resolve(mentor);
