$('#flashMessage').hide();

/* const title = "My first blog post";
const content = "This is my <strong>first</strong> post!";*/

$('#previewButton').click(function(){
	const title = $('#blogTitleInput').val();
	const content = $('#blogContentInput').val();
	$('#blogTitlePreview').text(title);
	$('#blogContentPreview').html(content);

	$('#flashMessage')
		.slideDown(1000)
		.delay(3000)
		.slideUp();
});