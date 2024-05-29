import React, { useState } from 'react';
import { Box, Grid, Heading, Text, VStack } from '@chakra-ui/react';
// import { useParams } from 'react-router-dom';
// import Loader from '../Layout/Loader';
// import { useDispatch, useSelector } from 'react-redux';
// import { getCourseLectures } from '../../redux/actions/course';

const CoursePage = ({ user }) => {

  const [, setLectureNumber] = useState(0);
  // const params = useParams();

  const lectures = [];
//   const { lectures, loading } = useSelector(state => state.course);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getCourseLectures(params.id));
//   }, [dispatch, params.id]);

//   if (
//     user.role !== 'admin' &&
//     (user.subscription === undefined || user.subscription.status !== 'active')
//   ) {
//     return <Navigate to={'/subscribe'} />;
//   }

//   return loading ? (
//     <Loader />
//   ) : (
    <Grid minH={'88vh'} templateColumns={['1fr', '3fr 1fr']}>
      {/* {lectures && lectures.length > 0 ? ( */}
        <>
          <Box>
            {/* <video
              width={'100%'}
              controls
              controlsList="nodownload noremoteplayback"
              disablePictureInPicture
              disableRemotePlayback
              src={lectures[lectureNumber].video.url}
            ></video> */}

            {/* <Heading
              m="4"
              children={`#${lectureNumber + 1} ${
                lectures[lectureNumber].title
              }`}
            /> */}

            {/* <Heading m="4" children="Description" />
            <Text m="4" children={lectures[lectureNumber].description} /> */}
          </Box>

          <VStack>
            {lectures.map((element, index) => (
              <button
                onClick={() => setLectureNumber(index)}
                key={element._id}
                style={{
                  width: '100%',
                  padding: '1rem',
                  textAlign: 'center',
                  margin: 0,
                  borderBottom: '1px solid rgba(0,0,0,0.2)',
                }}
              >
                <Text noOfLines={1}>
                  #{index + 1} {element.title}
                </Text>
              </button>
            ))}
          </VStack>
        </>
      ) : (
        <Heading children="No Lectures" />
      {/* )} */}
    </Grid>
//   );
};

export default CoursePage;
