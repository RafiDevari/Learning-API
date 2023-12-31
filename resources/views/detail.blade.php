<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
</head>
<body style="background-color: azure">
    <div id="context">{{$var}}</div>
    <div id="jenisnya">{{$kind}}</div>
    @if ($kind=="characters")
    <div id="detail" class="container mt-lg-5">
        
        <div id="img">
        </div>
        
        <p id="desc"></p>
        
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>Normal Attack</th>
                    <th>Elemental Skill</th>
                    <th>Elemental Burst</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td id="na"></td>
                    <td id="e"></td>
                    <td id="q"></td>
                </tr>
                <tr>
                    <td id="nad"></td>
                    <td id="ed"></td>
                    <td id="qd"></td>
                </tr>
            </tbody>
        </table>

    </div>
    @endif

    @if ($kind=="artifacts")
    <div id="detailart" class="container mt-lg-5">
        
        <div id="imgs"></div>
        
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>2-Piece</th>
                    <th>4-Piece</th>
                </tr>
            </thead>

            <tbody>
                
                <tr>
                    <td id="pc2"></td>
                    <td id="pc4"></td>
                </tr>
            </tbody>
        </table>

    </div>
    @endif

    @if ($kind=="enemies")
    <div id="detailen" class="container mt-lg-5">
        
        <div id="imgsen"></div>
        
        <p id="descen"></p>
        <div></div>
    </div>
    @endif

    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>
    <script src="../detail.js">
    
    </script>
</body>
</html>