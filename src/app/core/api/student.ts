import { ICourseStudent, Gender, YearsInFrontEnd } from '../models';

const student: ICourseStudent = {
    _id: 'dadajndjksandjk3n4324',
    city: 'minsk',
    courseId: 'rs-course-2018-1',
    englishLevel: 'B1',
    isActive: true,
    mentors: [
        {
            _id: 'dadajndjkdsdsdsds4324',
            role: 'mentor',
            isAdmin: false,
            participations: [
                {
                    _id: 'dadajndjkdsdsdsds4324',
                    isActive: true,
                    courseId: 'rs-course-2018-1',
                    role: 'mentor',
                },
            ],
            profile: {
                firstName: 'Ivan',
                lastName: 'Stepanov',
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
                githubId: 'KatieVo',
            },
        },
    ],
    user: {
        isAdmin: false,
        role: 'student',
        _id: 'dadajndjksandjk3n4324',
        profile: {
            firstName: 'Ekaterina',
            lastName: 'Volkova',
            firstNameNative: 'Екатерина',
            lastNameNative: 'Волкова',
            city: 'Minsk',
            englishLevel: 'B1',
            phone: '8-345-343-22-78',
            contacts: {
                skype: 'Ekaterina.Volkova',
                telegram: '@Ekaterina.Volkova',
                other: '@Ekaterina.Volkova',
                emails: 'Ekaterina.Volkova@gmail.com',
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
            mentoring: {},
            githubId: 'KatieVo',
        },
        participations: [
            {
                _id: 'dadajndjksandjk3n4324',
                isActive: true,
                courseId: 'rs-course-2018-1',
                role: 'student',
            },
        ],
    },
    userId: 'KatieVo',
    excludeReason: '',
};

export const getStudentProfile = Promise.resolve(student);
