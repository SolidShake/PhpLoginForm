$(document).ready(function () {
	$("#submit").click(
		function () {
			sendAjaxForm('result_form', 'ajax_form', 'action_ajax_form.php');
			return false;
		}
	);
});

function sendAjaxForm(result_form, ajax_form, url) {
	jQuery.ajax({
		url: url,
		type: "POST",
		dataType: "html",
		data: jQuery("#" + ajax_form).serialize(),
		success: function (response) {
			result = jQuery.parseJSON(response);
			if (result.status === true) {
				document.getElementById(ajax_form).innerHTML = result.ans;
			} else {
				document.getElementById(result_form).innerHTML = result.ans;
			}
		},
		error: function (response) {
			document.getElementById(result_form).innerHTML = "Ошибка. Данные не отправленны.";
		}
	});
}