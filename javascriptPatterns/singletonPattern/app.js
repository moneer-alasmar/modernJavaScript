const singleton = (function() {
  let instance;

  function createInstance() {
    const object = new Object({name:'Moneer'});
    return object;
  }

  return {
    getInstance: function() {
      if(!instance) {
        instance = createInstance();
      }
      return instance;
    }
  }
})();

const instanceA = singleton.getInstance();

console.log(instanceA);