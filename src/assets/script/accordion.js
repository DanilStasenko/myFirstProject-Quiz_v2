window.addEventListener('load', function(){
	const questions = document.querySelector('.questions');

	delegate(questions, '.question__title-wrapper', 'click', function(){
		const answer = this.closest('.item').querySelector('.options');
		const cl = answer.classList;

		if(cl.contains('open')){
			let animation = answer.animate([
				{ maxHeight: getComputedStyle(answer).height },
				{ maxHeight: 0 }
			], { duration: 500 });
			
			animation.addEventListener('finish', () => {
				cl.remove('open');
			});
		}
		else{
			cl.add('open');
			answer.animate([
				{ maxHeight: 0 },
				{ maxHeight: getComputedStyle(answer).height }
			], { duration: 500 });
		}
	});

});

function delegate(box, selector, eventName, handler){
	box.addEventListener(eventName, function(e){
		let elem = e.target.closest(selector);

		if(elem !== null && box.contains(elem)){
			handler.call(elem, e);
		}
	});
}