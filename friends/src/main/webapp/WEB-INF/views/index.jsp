<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" %>
<html>
<head>
<script src="<c:url value="/resources/angular/angular.js" />"></script>
  <script src="<c:url value="/resources/angular/angular-route.js"/>"></script>
   <script src="<c:url value="/resources/angular/angular-resource.js" />"></script>
   <script src="<c:url value="http://code.angularjs.org/1.2.9/angular-animate.min.js"/>"></script>
   <script src="<c:url value="/resources/angular/ng-flow-standalone.min.js"/>"></script>
   <link rel="stylesheet" href="<c:url value="http://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css" />">
   <link rel="stylesheet" href="<c:url value="/resources/css/friends.css"/>"/>
   <link rel="stylesheet" href="<c:url value="/resources/css/app.css"/>"/>
  <script src="<c:url value="/resources/js/app.js" />"></script>
  <script src="<c:url value="/resources/js/services.js" />"></script>
  <script src="<c:url value="/resources/js/controllers.js" />"></script>  
</head>

<body ng-app="friendsApp" >
<div class="navbar">
<ng-view></ng-view>
</div>
</body>
</html>  
