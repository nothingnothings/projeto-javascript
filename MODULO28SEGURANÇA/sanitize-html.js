
var html = "<strong>hello world</strong>";
console.log(sanitizeHtml(html));
console.log(sanitizeHtml("<img src=x onerror=alert('img') />"));
console.log(sanitizeHtml("console.log('hello world')"));
console.log(sanitizeHtml("<script>alert('hello world')</script>"));