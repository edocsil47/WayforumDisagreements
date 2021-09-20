// ==UserScript==
// @id wfdisagree
// @name Show Forum Disagreements
// @version 0.1
// @author /u/edocsil47
// @description Hover to see disagreements on the Ingress and Wayfarer community forums
// @match https://community.wayfarer.nianticlabs.com/discussion/*
// @match https://community.ingress.com/en/discussion/*
// @require http://code.jquery.com/jquery-latest.js
// ==/UserScript==

$("a.ReactButton-Disagree").attr("data-reaction", "disagree");
