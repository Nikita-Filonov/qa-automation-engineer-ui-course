import Box from '@mui/material/Box';
import { CourseExercise } from '../../../Models/Courses/CourseExercise';
import { FC } from 'react';
import { BaseTextField } from '../../TextFields/BaseTextField';

type CreateCourseExerciseFormProps = {
  exercise: CourseExercise;
  setExercise: (exercise: CourseExercise) => void;
};

export const CreateCourseExerciseForm: FC<CreateCourseExerciseFormProps> = (props) => {
  const { exercise, setExercise } = props;

  const onTitle = (title: string) => setExercise({ ...exercise, title });

  const onDescription = (description: string) => setExercise({ ...exercise, description });

  return (
    <Box>
      <BaseTextField
        testId={'create-course-exercise-form-title'}
        value={exercise.title}
        onChange={onTitle}
        label={'Title'}
      />
      <BaseTextField
        testId={'create-course-exercise-form-description'}
        value={exercise.description}
        onChange={onDescription}
        label={'Description'}
      />
    </Box>
  );
};
