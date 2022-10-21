export const HOST = '127.0.0.1';
export const PORT = 9898;
export const MANAGER_RENDER = 'managerRender';
export const PREVIEW_RENDER = 'previewRender';
export const STORY_RENDER = 'storyRender';

export const logEvent = event => {
  function sendPing() {
    console.log('Logging', event);
    fetch(
      'http://'
        .concat(HOST, ':')
        .concat(PORT, '/')
        .concat(event)
    );
  }

  if ('performance' in window) {
    const paintMetrics = performance.getEntriesByType('paint');
    const FCPs =
      paintMetrics !== undefined
        ? paintMetrics.filter(m => m.name === 'first-contentful-paint')
        : [];
    // Check if first-contentful-paint has already happened
    if (FCPs.length > 0) {
      console.log(
        'first-contentful-paint already happened, time may be inflated'
      );
      sendPing();
    } else {
      const observer = new PerformanceObserver(function(list, obs) {
        var entries = list
          .getEntries()
          .filter(e => e.name === 'first-contentful-paint');
        for (const entry of entries) {
          if (entry.name === 'first-contentful-paint') {
            sendPing();
            obs.disconnect();
          }
        }
      });
      observer.observe({ type: 'paint' });
    }
  } else {
    // Not able to use paint timing, just send the fetch now.
    console.log('skipping first-contentful-paint');
    sendPing();
  }
};
