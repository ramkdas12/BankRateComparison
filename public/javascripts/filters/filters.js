angularApp.filter('customCamelize', function(){
  return function(value){
    return value.toString().replace(value[0], value[0].toUpperCase());
  };
});
angularApp.filter('customAge', function(){
  return function(value){
    return value + " years";
  };
});
angularApp.filter('customPercent', function(){
  return function(value){
    return value + " %";
  };
});
