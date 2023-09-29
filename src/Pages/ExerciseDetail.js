import React, { useEffect, useState } from 'react'
import { Stack } from '@mui/material'
import { useParams } from 'react-router-dom'

import ExerciseVideos from '../components/ExerciseVideos'
import SimiliarExercises from '../components/SimiliarExercises'
import Details from '../components/Details'
import { fetchData , exerciseOptions, youtubeOptions } from '../utils/fetchData'



const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState();
  const [targetMuscleExercises, setTargetMuscleExercises] = useState();
  const [equipmentExercises, setEquipmentExercises] = useState();
  const { id } = useParams();


  
  useEffect(() => {
    const fetchExercisesData = async () => {
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';
  
      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);
      setExerciseDetail(exerciseDetailData);
  
      const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name} exercise`, youtubeOptions);
      setExerciseVideos(exerciseVideosData.contents);
  
      const targetMuscleExercisesData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions);
      setTargetMuscleExercises(targetMuscleExercisesData);
  
      const equipmentExercisesData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions);
      setEquipmentExercises(equipmentExercisesData);
    };
  
    fetchExercisesData();
  }, [id]);

  // console.log('exerciseVideos: ', exerciseVideos)
  console.log('targetMuscleExercises: ', targetMuscleExercises)

  return (
    <Stack>
      <Details exerciseDetail={exerciseDetail} />

      <ExerciseVideos
        exerciseVideos={exerciseVideos}
        name={exerciseDetail.name}
      />

      <SimiliarExercises
        targetMuscleExercises={targetMuscleExercises}
        equipmentExercises={equipmentExercises}
      />
    </Stack>
  );
}

export default ExerciseDetail
