import { Meta, StoryFn } from '@storybook/react';
import { CreateCrewRequestTypes } from '@/src/types/create-crew';
import CreateCrewForm, { CreateCrewFormTypes } from '.';

const initialValue: CreateCrewRequestTypes = {
  title: '',
  mainCategory: '',
  subCategory: '',
  imageUrl: null,
  mainLocation: '',
  subLocation: '',
  totalCount: 0,
};

export default {
  title: 'forms/create-crew-form',
  component: CreateCrewForm,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    nextjs: {
      appDirectory: true,
    },
    docs: {
      description: {
        component: '크루 작성/수정에 사용되는 폼입니다.',
      },
    },
  },
} as Meta<typeof CreateCrewForm>;

const Template: StoryFn<CreateCrewFormTypes> = function CreateCrewPageStory() {
  return <CreateCrewForm data={initialValue} />;
};

export const Default = Template.bind({});
Default.args = {};