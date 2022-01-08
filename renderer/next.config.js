module.exports = {
  async redirects() {
    return [{ source: "/", destination: "/muse", permanent: false }];
  },
};
