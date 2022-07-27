import { getApplication } from './app';
import { environment } from './environment';

(() => {
  const serverPort = environment.server.port;
  getApplication().listen(
    serverPort,
    () => {
      console.log(`Server is running on ${serverPort}`);
    },
  );
})();
