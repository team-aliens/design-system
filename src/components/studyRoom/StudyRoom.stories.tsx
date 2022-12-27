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
    total_height_size={10}
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
        height_location: 0,
        id: '1d95a272-85f9-11ed-b0ca-a9679b15f2c9',
        number: 1,
        status: 'UNAVAILABLE',
        student: null,
        type: {
          id: '1f44cc7b-812c-11ed-84ab-fbdf257b34dd',
          name: '충전기',
          color: '#38F098',
        },
        width_location: 0,
      },
    ]}
  />
);

export const studyRoom = Template.bind({});

studyRoom.args = {};
