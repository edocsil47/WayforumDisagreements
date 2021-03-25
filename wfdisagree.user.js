// ==UserScript==
// @id wfdisagree
// @name Show Wayforum Disagreements
// @version 0.1
// @author /u/edocsil47
// @description Lists your enemies on the forum
// @match https://community.wayfarer.nianticlabs.com/discussion/*
// @require http://code.jquery.com/jquery-latest.js
// ==/UserScript==

$("a.ReactButton-Disagree").attr("data-reaction", "disagree");
