export class Application {
  private _appName = "";

  public constructor(appName: string) {
    this._appName = appName;
  }

  public run() {
    console.log("Starte ", this._appName);
  }
}
