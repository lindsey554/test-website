app.controller("videoCtrl", function ($scope, $http) {
       //contentDetails - snippet

       $http.get('https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=PLlMsyZB0poTDYImmOliKyiC-jpAFUsr6X&key=AIzaSyDGm1uzuqPPUGzG-qN7u6gTaS8ApXBJYvw')
            .then(function (response) {
                $scope.records = response.data.items;
            });

       $scope.PlayFun = function (Val) {
           var Vid_ID = Val;
           var New_Vid = "<iframe width='450' height='283' src='https://www.youtube.com/embed/" + Vid_ID + "?autoplay=1&loop=1&rel=0&wmode=transparent' frameborder='0' allowfullscreen wmode='Opaque'></iframe>";
           var Vid_Elm = document.getElementById("video");

           Vid_Elm.setAttribute("crs", New_Vid);

       };

   });

