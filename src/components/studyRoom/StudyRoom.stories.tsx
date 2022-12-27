import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StudyRoom } from './';

export default {
  title: 'component/studyRoom',
  component: StudyRoom,
} as ComponentMeta<typeof StudyRoom>;

const Template: ComponentStory<typeof StudyRoom> = () => (
  <StudyRoom
    east_description={'동쪽'}
    west_description={'서쪽'}
    south_description={'남쪽'}
    north_description={'북쪽'}
    total_height_size={15}
    total_width_size={10}
    isEdit={true}
    onClickSeat={(x, y) => {
      console.log(x, y);
    }}
    selectedPosition={{
      x: 1,
      y: 3,
    }}
    seats={[
      {
        id: 'b77eafed-69ab-422d-8448-1ec1f0a2eb8c',
        width_location: 1,
        height_location: 1,
        number: 1, // optional
        type: {
          // optional
          id: 'b77eafed-69ab-422d-8448-1ec1f0a2eb8c',
          name: '일반 자리',
          color: '#FF4646',
        },
        status: 'IN_USE', // AVAILABLE, UNAVAILABLE, IN_USE, EMPTY
        is_mine: true, // optional
        student: {
          id: 'b77eafed-69ab-422d-8448-1ec1f0a2eb8a',
          name: '김범진',
        },
      },
      {
        id: 'b77eafed-69ab-422d-8448-1ec1f0a2eb8d',
        width_location: 1,
        height_location: 2,
        number: 3,
        type: {
          id: 'b77eafed-69ab-422d-8448-1ec1f0a2eb8c',
          name: '컴퓨터 자리',
          color: '#FF4646',
        },
        status: 'AVAILABLE',
        is_mine: false,
        student: null,
      },
      {
        id: 'b77eafed-69ab-422d-8448-1ec1f0a2eb8d',
        width_location: 1,
        height_location: 3,
        number: null,
        type: null,
        status: 'EMPTY',
        is_mine: null,
        student: null,
      },
    ]}
  />
);

export const studyRoom = Template.bind({});

studyRoom.args = {};
