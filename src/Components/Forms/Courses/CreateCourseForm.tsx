import Box from '@mui/material/Box';
import { BaseTextField } from '../../TextFields/BaseTextField';
import { Course } from '../../../Models/Courses/Course';
import { FC } from 'react';
import { BaseNumberTextField } from '../../TextFields/BaseNumberTextField';

type CreateCourseFormProps = {
  course: Course;
  setCourse: (course: Course) => void;
};

export const CreateCourseForm: FC<CreateCourseFormProps> = (props) => {
  const { course, setCourse } = props;

  const onTitle = (title: string) => setCourse({ ...course, title });

  const onMinScore = (minScore: number) => setCourse({ ...course, minScore });

  const onMaxScore = (maxScore: number) => setCourse({ ...course, maxScore });

  const onDescription = (description: string) => setCourse({ ...course, description });

  const onEstimatedTime = (estimatedTime: string) => setCourse({ ...course, estimatedTime });

  return (
    <Box>
      <BaseTextField
        testId={'create-course-form-title'}
        value={course.title}
        onChange={onTitle}
        label={'Title'}
        placeholder={'New course'}
      />
      <BaseTextField
        testId={'create-course-form-estimated-time'}
        value={course.estimatedTime}
        onChange={onEstimatedTime}
        label={'Estimated time'}
        placeholder={'1h 20m'}
      />
      <BaseTextField
        testId={'create-course-form-description'}
        value={course.description}
        onChange={onDescription}
        label={'Description'}
        multiline
        rows={5}
        placeholder={'Add description for course'}
      />
      <BaseNumberTextField
        testId={'create-course-form-max-score'}
        value={course.maxScore}
        onChange={onMaxScore}
        label={'Max score'}
      />
      <BaseNumberTextField
        testId={'create-course-form-min-score'}
        value={course.minScore}
        onChange={onMinScore}
        label={'Min score'}
      />
    </Box>
  );
};
