function Map() {
	//************************************************************添加第01个地图:Childhood*******************************************************************
	//*************************************************
	var normalMap = new L.tileLayer.chinaProvider('Google.Normal.Map', {
			maxZoom: 20,
			minZoom: 5
		}),
		satelliteMap = new L.tileLayer.chinaProvider('Google.Satellite.Map', {
			maxZoom: 20,
			minZoom: 5
		});

	var baseLayers = {
		"SatelliteMap": satelliteMap,
		"NormalMap": normalMap,
	}

	var overlayLayers = {

	}

	var mymap01 = L.map("map01", {
		center: [30.17644, 111.130],
		zoom: 14,
		layers: [normalMap],
		zoomControl: false
	});

	L.control.layers(baseLayers, overlayLayers).addTo(mymap01);

	L.control.zoom({
		zoomInTitle: '放大',
		zoomOutTitle: '缩小'
	}).addTo(mymap01);

	var popup = L.popup()
		.setLatLng([30.1766, 111.139])
		.setContent(" >My House is located here. </br>>Check into SatelliteMap and zoom the map in,you could see my house clearly   :)")
		.openOn(mymap01);

	//************************************************************添加第02个地图:From Grandparents to Parents*******************************************************************

	//高德地图加载
	var map02 = new AMap.Map("Addmap02", {
		resizeEnable: true,
		center: [116.397428, 39.90923], //地图中心点
		zoom: 13 //地图显示的缩放级别
	});
	//构造路线导航类
	var driving = new AMap.Driving({
		map: map02
	});
	// 根据起终点名称规划驾车导航路线
	driving.search([{
			keyword: '宜都市全福河村观湾',
			city: '湖北'
		},
		{
			keyword: '宜昌市长阳县磨中心学校',
			city: '湖北'
		}
	]);

	//************************************************************添加第03个地图:Middle School*******************************************************************

	//高德地图加载
	var map03 = new AMap.Map("Addmap03", {
		mapStyle: 'amap://styles/whitesmoke',
		resizeEnable: true,
		center: [116.397428, 39.90923], //地图中心点
		zoom: 13 //地图显示的缩放级别
	});
	//构造路线导航类
	var driving01 = new AMap.Driving({
		map: map03
	});
	var driving = new AMap.Driving({
		map: map03
	});
	// 根据起终点名称规划驾车导航路线
	driving01.search([{
			keyword: '宜昌市长阳土家族自治县磨市镇镇府',
			city: '湖北'
		},
		{
			keyword: '宜昌市长阳县柳家院小学',
			city: '湖北'
		}
	]);
	driving.search([{
			keyword: '宜昌市长阳土家族自治县磨市镇镇府',
			city: '湖北'
		},
		{
			keyword: '宜昌市长阳县磨市镇磨市中心学校',
			city: '湖北'
		}
	]);

	//************************************************************添加第04个地图:HighSchool*******************************************************************
	var satelliteMap02 = new L.tileLayer.chinaProvider('Google.Satellite.Map', {
		maxZoom: 20,
		minZoom: 5
	});

	var mymap02 = L.map("section-resume", {
		center: [30.4797, 111.196],
		zoom: 18,
		layers: [satelliteMap02],
		zoomControl: false
	});

	var polygon_classroom = L.polygon([
		[30.479308, 111.194456],
		[30.479693, 111.195836],
		[30.4794, 111.195926],
		[30.479363, 111.195752],
		[30.479468, 111.19573],
		[30.479174, 111.194491]
	]).addTo(mymap02);
	polygon_classroom.bindPopup("Our Classroom！");

	var polygon_Living = L.polygon([
		[30.48099, 111.193898],
		[30.480969, 111.194512],
		[30.480764, 111.194517],
		[30.480795, 111.193922]
	]).addTo(mymap02);
	polygon_Living.bindPopup("Our Dormitory！");

	var polygon_Restaurant = L.polygon([
		[30.48052, 111.194709],
		[30.480496, 111.194988],
		[30.480249, 111.194993],
		[30.480279, 111.194721]
	]).addTo(mymap02);
	polygon_Restaurant.bindPopup("Our Restaurant！");

	var marker02 = L.marker([30.479308, 111.194]).addTo(mymap02);
	marker02.bindPopup("<b>Hello!</b><br>This is My High School!").openPopup();

	//************************************************************添加第05个地图:University全景*******************************************************************
	var panorama = new BMap.Panorama('Addmap05_2');
	panorama.setPosition(new BMap.Point(114.338054,30.58504));
	var panoramaService = new BMap.PanoramaService();
	panoramaService.getPanoramaByLocation(new BMap.Point(114.338054,30.58504));
}