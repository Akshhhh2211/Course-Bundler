import React from 'react';
import cursor from '../../../assets/images/cursor.png';
import Sidebar from '../Sidebar';
import CourseModal from './CourseModal'
import {
  Box,
  Button,
  Grid,
  Heading,
  HStack,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Image,
  useDisclosure,
} from '@chakra-ui/react';
import { RiDeleteBin7Fill } from 'react-icons/ri';
// import { useDispatch, useSelector } from 'react-redux';
// import {
//   deleteUser,
//   getAllUsers,
//   updateUserRole,
// } from '../../../redux/actions/admin';
// import toast from 'react-hot-toast';

const AdminCourses = () => {
  const courses = [
    {
      _id: 'eihberuigbeibg',
      title: 'Pranav',
      category: 'Admin',
      poster: {
        url: 'https://i.ytimg.com/an_webp/MpOoef_oxes/mqdefault_6s.webp?du=3000&sqp=CJCUzaUG&rs=AOn4CLAymiusX2rRkZUdM-vOYv9uaTCtTg',
      },
      createdBy: 'abc@gmail.com',
      views: 874874,
      numOfVideos: 12,
    },
    {
      _id: 'eihfweifjbwfff',
      title: 'Eduardo',
      category: 'User',
      poster: {
        url: 'https://i.ytimg.com/an_webp/x_OmDevWn6A/mqdefault_6s.webp?du=3000&sqp=COD7zKUG&rs=AOn4CLDtiHQ6yk4Qapfr4FNLEpw0Call5w',
      },
      createdBy: 'xyz@gmail.com',
      views: 892374529,
      numOfVideos: 16,
    },
  ];
  // const { users, loading, error, message } = useSelector(state => state.admin);

  // const dispatch = useDispatch();

  const { isOpen, onClose, onOpen } = useDisclosure();

  const courseDetailsHandler = userId => {
    onOpen();
    // dispatch(updateUserRole(userId));
  };
  const deleteButtonHandler = userId => {
    console.log('ok');
    // dispatch(deleteUser(userId));
  };

  const deleteLectureButtonHandler = (courseId, lectureId) => {
    console.log('ok');
  }
  const addLectureHandler = (e, title, courseId, description, video) => {
    e.preventDefault();
    console.log('ok');
  }

  // useEffect(() => {
  //   if (error) {
  //     toast.error(error);
  //     dispatch({ type: 'clearError' });
  //   }

  //   if (message) {
  //     toast.success(message);
  //     dispatch({ type: 'clearMessage' });
  //   }

  //   dispatch(getAllUsers());
  // }, [dispatch, error, message]);

  return (
    <Grid
      css={{
        cursor: `url(${cursor}), default`,
      }}
      minH={'100vh'}
      templateColumns={['1fr', '5fr 1fr']}
    >
      <Box p={['0', '8']} overflowX="auto">
        <Heading
          textTransform={'uppercase'}
          children="All Users"
          my="16"
          textAlign={['center', 'left']}
        />

        <TableContainer w={['100vw', 'full']}>
          <Table variant={'simple'} size="lg">
            <TableCaption>All available courses in the database</TableCaption>

            <Thead>
              <Tr>
                <Th>Id</Th>
                <Th>Poster</Th>
                <Th>Title</Th>
                <Th>Category</Th>
                <Th>Creator</Th>
                <Th isNumeric>Views</Th>
                <Th isNumeric>Lectures</Th>
                <Th isNumeric>Actions</Th>
              </Tr>
            </Thead>

            <Tbody>
              {courses &&
                courses.map(item => (
                  <Row
                    courseDetailsHandler={courseDetailsHandler}
                    deleteButtonHandler={deleteButtonHandler}
                    key={item._id}
                    item={item}
                    // loading={loading}
                  />
                ))}
            </Tbody>
          </Table>
        </TableContainer>
        <CourseModal
          isOpen={isOpen}
          onClose={onClose}
          id={'courseId'}
          courseTitle={'React Course'}
          deleteButtonHandler={deleteLectureButtonHandler}
          addLectureHandler={addLectureHandler}
          // lectures={lectures}
          // loading={loading}
        />
      </Box>

      <Sidebar />
    </Grid>
  );
};

export default AdminCourses;

function Row({ item, courseDetailsHandler, deleteButtonHandler }) {
  return (
    <Tr>
      <Td>#{item._id}</Td>
      <Td>
        <Image src={item.poster.url} />
      </Td>
      <Td>{item.title}</Td>
      <Td textTransform={'uppercase'}>{item.category}</Td>
      <Td>{item.createdBy}</Td>
      <Td isNumeric>{item.views}</Td>
      <Td isNumeric>{item.numOfVideos}</Td>

      <Td isNumeric>
        <HStack justifyContent={'flex-end'}>
          <Button
            onClick={() => courseDetailsHandler(item._id)}
            variant={'outline'}
            color="purple.500"
            // isLoading={loading}
          >
            View Lectures
          </Button>

          <Button
            onClick={() => deleteButtonHandler(item._id)}
            color={'purple.600'}
            // isLoading={loading}
          >
            <RiDeleteBin7Fill />
          </Button>
        </HStack>
      </Td>
    </Tr>
  );
}
