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
    

    <div id="detail" class="container mt-lg-5">
        <div id="context">{{$var}}</div>
        <img id="img" style="width: 25rem"  alt="">
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


    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>
    <script src="../detail.js">
    
    </script>
</body>
</html>