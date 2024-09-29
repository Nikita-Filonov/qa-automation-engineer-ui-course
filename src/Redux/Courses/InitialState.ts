import { Course } from '../../Models/Courses/Course';

export type CoursesInitialState = {
  course: Course;
  courses: Course[];
};

export const INITIAL_COURSES: CoursesInitialState = {
  course: {
    title: '',
    userId: '',
    maxScore: 0,
    minScore: 0,
    exercises: [],
    description: '',
    estimatedTime: ''
  },
  courses: []
};
