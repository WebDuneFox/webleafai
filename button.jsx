<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>WebLeafAI</title>
    <script>
      var l = window.location;
      sessionStorage.setItem('spa-redirect', l.href);
      l.replace(l.protocol + '//' + l.host + '/');
    </script>
  </head>
  <body></body>
</html>
