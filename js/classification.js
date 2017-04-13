window.onload = function() {
	var com = document.getElementById('commodity')
	var ol = com.getElementsByTagName('ol');
	var cat = document.getElementById('category')
	var li = cat.getElementsByTagName('li')
	for(var i=0; i<li.length; i++){
		li[i].index=i;
		li[i].addEventListener('touchstart',function(){
			for(var i=0; i<li.length; i++){
				li[i].className='';
				ol[i].className='';
			}
			this.className='show';
			ol[this.index].className='active';
		},false)
	}
}