import { app } from "electron";

import Module from "./module";

class AppModule extends Module {
  async load(): Promise<void> {
    // Quit the app once all windows are closed
    app.on("window-all-closed", app.quit);
  }
}

export default AppModule;
