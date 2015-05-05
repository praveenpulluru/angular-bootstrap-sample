<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<a href="/friends/index.jsp">
<img align="left" ng-src="${pageContext.request.contextPath}/resources/img/{{logo}}" width="180" height="75"/>
</a>
<br/><br/><br/>
<body>
<section  ng-controller="FriendsController as panel" >
<br/>
<ul style="background-color:#E5E4E2;padding-left: 170px;" class="nav nav-tabs">
	<li ng-class="{active:panel.isSelected(1) }">
		<a href ng-click="panel.selectTab(1)"><span class="glyphicon glyphicon-home"></span> Home</a>
	</li>
	<li ng-class="{active:panel.isSelected(2)  }">
		<a href ng-click="panel.selectTab(2)"><span class="glyphicon glyphicon-user"></span> Profiles</a>
	</li>
	<li ng-class="{active:panel.isSelected(3)}">
		<a href ng-click="panel.selectTab(3)"><span class="glyphicon glyphicon-upload"> Upload</a>
	</li>
</ul>
<br />
	<div ng-controller="SliderController">
	<div ng-show="panel.isSelected(1)" style="position: absolute;left: 20%;top:40%;">
	<span>
	<slider images="images"/>
	</span>
  </div>

	<br/><br/>
	<div ng-show="panel.isSelected(2)" style="padding: 5%;position: absolute;left: 0%;top:33%;">
		<ul> 
		<li ng-repeat="image in images" >
		<div class="itemholder">
		<a href="/friends/resources/friends.jsp">
			{{image.title}} <img ng-src="/friends/resources/img/{{image.src}}" height="60" width="60"/>
		</a>
		</div>
		</li>
		</ul>
	</div>
	</div>
	<div ng-show="panel.isSelected(3)">
		<!-- <marquee direction="left" scrollamount="3" behavior="scroll" style="color: blue; font-size: 33px;">FRIENDS FOR EVER!!!</marquee> -->
		
		<div flow-init  flow-file-added="!!{png:1,gif:1,jpg:1,jpeg:1}[$file.getExtension()]"  flow-files-submitted="$flow.upload()">
      <div class="container">
  	<hr class="soften"/>

  <div>
    <div class="thumbnail" ng-hide="$flow.files.length">
      <img src="/friends/resources/img/noImage.gif" />
    </div>
    <div class="thumbnail" ng-show="$flow.files.length">
      <img flow-img="$flow.files[0]" />
    </div>
    <div>
      <span flow-btn><a href="">Upload File</a></span>
    </div>
    <p>
      Only PNG,GIF,JPG files allowed.
    </p>
  </div>
</div>
      </div>
      
	</div><br />

</section>
</body>
