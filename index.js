module.exports = {
  name: "Artsy",
  email: "it@artsymail.com",
  labels: {
    major: "Version: Major",
    minor: "Version: Minor",
    patch: "Version: Patch",
    internal: "Version: Trivial"
  },
  plugins: ["npm", "released"],
  skipReleaseLabels: ["Version: Trivial", "Skip Release"]
}

