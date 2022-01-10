class Module {
  async init(): Promise<void> {
    await this.load().catch((err) => {
      throw err;
    });
  }

  async load(): Promise<void> {
    throw new TypeError(`Module ${this.constructor.name} should have a load method`);
    // method should be implemented by sub-class
  }
}

export default Module;
