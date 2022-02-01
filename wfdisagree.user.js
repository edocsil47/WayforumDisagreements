// ==UserScript==
// @id wfdisagree
// @name Show Wayforum Reactions
// @version 2.0
// @author /u/edocsil47
// @description Reenable reactions on the wayfarer and ingress community forums
// @match https://community.wayfarer.nianticlabs.com/*
// @match https://community.ingress.com/*
// @require http://code.jquery.com/jquery-latest.js
// ==/UserScript==

// reattach disagree data to the button; redundant attach others preemptively
$("a.ReactButton-Insightful").attr("data-reaction", "insightful");
$("a.ReactButton-Disagree").attr("data-reaction", "disagree");
$("a.ReactButton-Like").attr("data-reaction", "like");

// duplicate https://community.wayfarer.nianticlabs.com/plugins/Reactions/js/reactions.js?v=61f19289
// but don't return early with whatever config they have set

$(document).on('mouseenter', '.ReactButton', function() {
   var $button = $(this);

   var itemID = $button.closest('.Item').attr('id');
   var $menu = $('.MenuItems-Reactions', $button);

   if ($menu.length == 0) {
		// Construct the initial div.
		$menu = $('<div class="MenuItems MenuItems-Reactions Up"><div class="TinyProgress" /></div>')
			.css('visibility', 'hidden')
			.attr('aria-hidden', 'true')
			.attr('tabindex', '-1')
			.appendTo($button);

		$.ajax({
			url: gdn.url('/reactions/users/'+itemID.split('_').join('/')+'/'+$button.data('reaction')),
			data: {DeliveryType: 'VIEW'},
			success: function(data) {
				$menu.html(data);
			}
		});
   }

   // Position the menu above the reaction button.
   var left = ($button.outerWidth() - $menu.outerWidth()) / 2.0;
   var bottom = $button.height();

   $menu.css({ bottom: bottom, left: left, visibility: 'visible' });
});
