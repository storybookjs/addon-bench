import { logEvent, PREVIEW_RENDER, STORY_RENDER } from './sbbench';

logEvent(PREVIEW_RENDER);

export const decorators = [
  storyFn => {
    logEvent(STORY_RENDER);
    return storyFn();
  }
];
