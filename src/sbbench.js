export const HOST = '127.0.0.1';
export const PORT = 9898;
export const MANAGER_RENDER = 'managerRender';
export const PREVIEW_RENDER = 'previewRender';
export const STORY_RENDER = 'storyRender';

export const logEvent = event => {
  console.log('Logging', event);
  fetch(`http://${HOST}:${PORT}/${event}`);
};
