import React, { useEffect, useState } from 'react'
import { Box, Pagination, Stack, Typography } from '@mui/material'
import ExerciseCard from './ExerciseCard';
import { exerciseOptions, fetchData } from '../utils/fetchData';

const Exercises = ({ exercises , setExercises , bodyPart }) => {
  console.log('Exercises: ', exercises)

  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 6;

  const indexOfLastExercise = currentPage * exercisesPerPage;//6
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;//0
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);//0 : 6

  const paginate = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({top: 1800, behavior: 'smooth'})
  }
  
  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = []

      if(bodyPart === 'all'){
        exercisesData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises?limit=100`,
          exerciseOptions
        )
      }
      
      else {
        exercisesData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}?limit=100`,
          exerciseOptions
        )
      }

      setExercises(exercisesData);
      
    }

    fetchExercisesData();
  }, [bodyPart])


  return (
    <Box id="exercises" sx={{ mt: { lg: "110px" } }} mt="50px" p="20px">
      <Typography variant="h4" mb="46px">
        Showing Results
      </Typography>
      <Stack direction="row" sx={{ gap: { lg: "110px", xs: "50px" } }} flexWrap='wrap' justifyContent='cneter'>
        {
          currentExercises.map((exercise, index) => (
            <ExerciseCard key={index} exercise={exercise}/>
          ))
        }
      </Stack>
      <Stack mt='100px' alignItems='center'>
        {
          exercises.length > 6 && (
            <Pagination
              color='standard'
              shape='rounded'
              defaultPage={1}
              count={Math.ceil(exercises.length / exercisesPerPage)}
              page={currentPage}
              onChange={paginate}
              size='large'
            />
          )
        }
      </Stack>
    </Box>
  );
}

export default Exercises
