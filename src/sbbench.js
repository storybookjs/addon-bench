export const HOST = 'localhost'; //
export const PORT = 9898;
export const MANAGER_RENDER = 'managerRender';
export const PREVIEW_RENDER = 'previewRender';
export const STORY_RENDER = 'storyRender';

export const logEvent = event => {
  console.log('Logging', event);
  fetch(`http://${HOST}:${PORT}/${event}`);
};
