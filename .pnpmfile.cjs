module.exports = {
  hooks: {
    readPackage: (pkg) => {
      if(pkg.name === 'react-aria') {
        pkg.peerDependencies['react'] = "^18.0.0";
      }
      return pkg
    }
  }
}
