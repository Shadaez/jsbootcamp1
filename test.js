describe("tests", function (){
it("has the title 'title'", function (){
	var title = $('head').find('title').text();
	expect(title).to.equal("title");
});
});