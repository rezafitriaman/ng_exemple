console.log('service ownerService.js');
app.factory( 'ownerService', function() {
	var data =  [
		{
			ownerName : 'Yoga Perdana',
			ownerPhoto : 'https://cdn.dribbble.com/users/60166/avatars/mini/yogaLogo.png?1390870645',
			background : "https://cdn.dribbble.com/users/997070/screenshots/4097990/airbnb_teaser.gif",
			hoverTitle : "Airbnb for dinners",
			hoverSubtitle : "Who makes the best Italian food? Probably not that expensive tourist trap of a restaurant. I bet the locals are the best! Imagine if you could arra...",
			hoverTimeStamp : new Date('2018', '01', '01'),
			viewsView : 0,
			viewsComment : 133,
			viewsLikes : 0
		},
		{
			ownerName : 'Reza Fitriaman',
			ownerPhoto : 'https://cdn.dribbble.com/users/642843/avatars/mini/92d5bab67ad124151d595def5c58415c.jpg?1499767768',
			background : "img/3trk_1x.jpg",
			hoverTitle : "Airbnb for dinners",
			hoverSubtitle : "Hello",
			hoverTimeStamp : new Date('2017', '02', '11'),
			viewsView : 0,
			viewsComment : 193,
			viewsLikes : 0
		},
		{
			ownerName : 'Rens Hendriks',
			ownerPhoto : 'https://cdn.dribbble.com/users/207046/avatars/mini/d217b2a65dfa773771d1dae3139e06c1.png?1468930348',
			background : "img/800_1x.jpg",
			hoverTitle : "Airbnb for dinners",
			hoverSubtitle : "Hai",
			hoverTimeStamp : new Date('2017', '06', '11'),
			viewsView : 0,
			viewsComment : 193,
			viewsLikes : 0
		},
		{
			ownerName : 'Jarno Drent',
			ownerPhoto : 'https://cdn.dribbble.com/users/997070/avatars/mini/47ba30f02d62b4c5a565f4e0fd99b94a.jpg?1459240343',
			background : "img/rotate-dribbble_1x.jpg",
			hoverTitle : "Airbnb for dinners",
			hoverSubtitle : "Continuing our Snug showcase. Feel free to check out attachment to see the dashboard screen of the property managers desktop/web app...",
			hoverTimeStamp : new Date('2017', '04', '21'),
			viewsView : 0,
			viewsComment : 143,
			viewsLikes : 0
		},
		{
			ownerName : 'Nicole Jeuring',
			ownerPhoto : 'https://cdn.dribbble.com/users/414979/avatars/mini/0160be9f90ac7d57429dd20ad3f2917f.png?1484569830',
			background : "img/donut_v2_single_1_1x.gif",
			hoverTitle : "Airbnb for dinners",
			hoverSubtitle : "Continuing our Snug showcase. Feel free to check out attachment to see the dashboard screen of the property managers desktop/web app...",
			hoverTimeStamp : new Date('2017', '04', '21'),
			viewsView : 0,
			viewsComment : 143,
			viewsLikes : 0
		},
		{
			ownerName : 'Siu Tshang',
			ownerPhoto : 'https://cdn.dribbble.com/users/3715/avatars/mini/cmprofile.png?1413917909',
			background : "img/woman2_1x.jpg",
			hoverTitle : "Airbnb for dinners",
			hoverSubtitle : "Continuing our Snug showcase. Feel free to check out attachment to see the dashboard screen of the property managers desktop/web app...",
			hoverTimeStamp : new Date('2017', '04', '21'),
			viewsView : 0,
			viewsComment : 143,
			viewsLikes : 0
		}
	]
	
	return data;
});