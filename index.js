    setInterval(() => {
        var d = new Date();
            document.getElementById("hrstime").innerHTML = d.getHours();
            document.getElementById("mintime").innerHTML = d.getMinutes();
            document.getElementById("sectime").innerHTML = d.getSeconds();

    },1000)

    var h = 0;
    var m = 0;
    var s = 0;
    var ms = 0;
    var countime;

        function commence(){
             countime = setInterval(() => {
                ms++

                if(ms >= 100){
                    ms = 0;
                    s++
                }
                if(s >= 60){
                    s = 0;
                    m++
                }
                if(m >= 60){
                    m = 0;
                    h++
                }

        document.getElementById("milisecond").innerHTML = ms;
        document.getElementById("second").innerHTML = s;
        document.getElementById("minute").innerHTML = m;
        document.getElementById("hour").innerHTML = h;
            
            }, 10)
        }

        function stoptime(){
            clearInterval(countime);
        }