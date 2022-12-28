import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StudyRoom } from './';

export default {
  title: 'component/studyRoom',
  component: StudyRoom,
} as ComponentMeta<typeof StudyRoom>;

const Template: ComponentStory<typeof StudyRoom> = () => (
  <StudyRoom
    floor={1}
    name={'가온실'}
    available_sex={'ALL'}
    available_grade={0}
    east_description={'복도'}
    west_description={'창문'}
    south_description={'벽'}
    north_description={'칠판'}
    total_width_size={5}
    total_height_size={5}
    seats={[
      {
        id: '8df14464-8678-11ed-812f-776207dd8cbd',
        width_location: 1,
        height_location: 1,
        number: 1,
        type: {
          id: '97eea02a-8076-11ed-a1eb-0242ac120002',
          name: '일반',
          color: '#3D8AFF',
        },
        status: 'AVAILABLE',
        student: null,
      },
      {
        id: '8df514f5-8678-11ed-812f-5d31baa0ed5b',
        width_location: 1,
        height_location: 2,
        number: 2,
        type: {
          id: '97eea02a-8076-11ed-a1eb-0242ac120002',
          name: '일반',
          color: '#3D8AFF',
        },
        status: 'AVAILABLE',
        student: null,
      },
      {
        id: '8df8be76-8678-11ed-812f-efab770b53a1',
        width_location: 1,
        height_location: 3,
        number: null,
        type: null,
        status: 'UNAVAILABLE',
        student: null,
      },
      {
        id: '8dfd2b47-8678-11ed-812f-37123efdc2e3',
        width_location: 1,
        height_location: 4,
        number: 3,
        type: {
          id: '1f44cc7b-812c-11ed-84ab-fbdf257b34dd',
          name: '충전기',
          color: '#38F098',
        },
        status: 'AVAILABLE',
        student: null,
      },
      {
        id: '8e028278-8678-11ed-812f-0dccf63cd105',
        width_location: 1,
        height_location: 5,
        number: 4,
        type: {
          id: '1f44cc7b-812c-11ed-84ab-fbdf257b34dd',
          name: '충전기',
          color: '#38F098',
        },
        status: 'AVAILABLE',
        student: null,
      },
      {
        id: '8e078b89-8678-11ed-812f-a5583e96c1f7',
        width_location: 2,
        height_location: 1,
        number: 5,
        type: {
          id: '97eea02a-8076-11ed-a1eb-0242ac120002',
          name: '일반',
          color: '#3D8AFF',
        },
        status: 'AVAILABLE',
        student: null,
      },
      {
        id: '8e0b350a-8678-11ed-812f-39abe1b9fd23',
        width_location: 2,
        height_location: 2,
        number: 6,
        type: {
          id: '97eea02a-8076-11ed-a1eb-0242ac120002',
          name: '일반',
          color: '#3D8AFF',
        },
        status: 'AVAILABLE',
        student: null,
      },
      {
        id: '8e0f059b-8678-11ed-812f-3dd02e2d9bce',
        width_location: 2,
        height_location: 3,
        number: null,
        type: null,
        status: 'UNAVAILABLE',
        student: null,
      },
      {
        id: '8e16318c-8678-11ed-812f-49867f02df74',
        width_location: 2,
        height_location: 4,
        number: 7,
        type: {
          id: '1f44cc7b-812c-11ed-84ab-fbdf257b34dd',
          name: '충전기',
          color: '#38F098',
        },
        status: 'AVAILABLE',
        student: null,
      },
      {
        id: '8e1b138d-8678-11ed-812f-1997084e3011',
        width_location: 2,
        height_location: 5,
        number: 8,
        type: {
          id: '1f44cc7b-812c-11ed-84ab-fbdf257b34dd',
          name: '충전기',
          color: '#38F098',
        },
        status: 'AVAILABLE',
        student: null,
      },
      {
        id: '8e1f594e-8678-11ed-812f-e9b280516c25',
        width_location: 3,
        height_location: 1,
        number: null,
        type: null,
        status: 'UNAVAILABLE',
        student: null,
      },
      {
        id: '8e23c61f-8678-11ed-812f-89d09be8e4eb',
        width_location: 3,
        height_location: 2,
        number: null,
        type: null,
        status: 'UNAVAILABLE',
        student: null,
      },
      {
        id: '8e296b70-8678-11ed-812f-43aaa5b47459',
        width_location: 3,
        height_location: 3,
        number: null,
        type: null,
        status: 'EMPTY',
        student: null,
      },
      {
        id: '8e2e9b91-8678-11ed-812f-3bf6581a3aed',
        width_location: 3,
        height_location: 4,
        number: null,
        type: null,
        status: 'UNAVAILABLE',
        student: null,
      },
      {
        id: '8e35a072-8678-11ed-812f-5d531615d0de',
        width_location: 3,
        height_location: 5,
        number: null,
        type: null,
        status: 'UNAVAILABLE',
        student: null,
      },
      {
        id: '8e3b93e3-8678-11ed-812f-39f11790047e',
        width_location: 4,
        height_location: 1,
        number: 9,
        type: {
          id: '6a75088a-80fa-11ed-a1eb-0242ac120002',
          name: '컴퓨터',
          color: '#8BE5EE',
        },
        status: 'AVAILABLE',
        student: null,
      },
      {
        id: '8e3fd9a4-8678-11ed-812f-33b859b43a3a',
        width_location: 4,
        height_location: 2,
        number: 10,
        type: {
          id: '6a75088a-80fa-11ed-a1eb-0242ac120002',
          name: '컴퓨터',
          color: '#8BE5EE',
        },
        status: 'AVAILABLE',
        student: null,
      },
      {
        id: '8e45cd15-8678-11ed-812f-d3bf32e75807',
        width_location: 4,
        height_location: 3,
        number: null,
        type: null,
        status: 'EMPTY',
        student: null,
      },
      {
        id: '8e4afd36-8678-11ed-812f-1b572846544d',
        width_location: 4,
        height_location: 4,
        number: 11,
        type: {
          id: '6a75088a-80fa-11ed-a1eb-0242ac120002',
          name: '컴퓨터',
          color: '#8BE5EE',
        },
        status: 'AVAILABLE',
        student: null,
      },
      {
        id: '8e527747-8678-11ed-812f-57f80cabf59c',
        width_location: 4,
        height_location: 5,
        number: 12,
        type: {
          id: '6a75088a-80fa-11ed-a1eb-0242ac120002',
          name: '컴퓨터',
          color: '#8BE5EE',
        },
        status: 'AVAILABLE',
        student: null,
      },
    ]}
  />
);

export const studyRoom = Template.bind({});

studyRoom.args = {};
