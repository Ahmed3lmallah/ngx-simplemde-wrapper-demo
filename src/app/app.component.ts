import { Component, VERSION } from '@angular/core';
import { SimpleMdEOptions } from 'ngx-simplemde-wrapper';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  JSON = JSON;
  
  customOptions1: SimpleMdEOptions = {
    toolbar: ["bold", "italic", "heading", "|", "quote"]
  };
  
  customOptions2: SimpleMdEOptions = {
    toolbar: false,
	  status: false
  };

  model1: string; 
  model2: string;
  model3: string;
  model4 = "# H1\n## H2\n### H3\n#### H4\n##### H5\n###### H6\n\nAlternatively, for H1 and H2, an underline-ish style:\n\nAlt-H1\n======\n\nAlt-H2\n------\n# Emphasis\n\nEmphasis, aka italics, with *asterisks* or _underscores_.\n\nStrong emphasis, aka bold, with **asterisks** or __underscores__.\n\nCombined emphasis with **asterisks and _underscores_**.\n\nStrikethrough uses two tildes. ~~Scratch this.~~\n\n# Lists\n\n1. First ordered list item\n2. Another item\n * Unordered sub-list.\n1. Actual numbers don't matter, just that it's a number\n 1. Ordered sub-list\n4. And another item.\n\n⋅⋅⋅You can have properly indented paragraphs within list items. Notice the blank line above, and the leading spaces (at least one, but we'll use three here to also align the raw Markdown).\n\n⋅⋅⋅To have a line break without a paragraph, you will need to use two trailing spaces.⋅⋅\n⋅⋅⋅Note that this line is separate, but within the same paragraph.⋅⋅\n⋅⋅⋅(This is contrary to the typical GFM line break behaviour, where trailing spaces are not required.)\n\n* Unordered list can use asterisks\n- Or minuses\n+ Or pluses\n\n### Check list\n* [x] checked item\n* [ ] unchecked item\n\n\n# Links\n\nThere are two ways to create links.\n\n[I'm an inline-style link](https://www.google.com)\n\n[I'm an inline-style link with title](https://www.google.com \"Google's Homepage\")\n\n[I'm a reference-style link][Arbitrary case-insensitive reference text]\n\n[I'm a relative reference to a repository file](../blob/master/LICENSE)\n\n[You can use numbers for reference-style link definitions][1]\n\nOr leave it empty and use the [link text itself].\n\nURLs and URLs in angle brackets will automatically get turned into links.\nhttp://www.example.com or <http://www.example.com> and sometimes\nexample.com (but not on Github, for example).\n\nSome text to show that the reference links can follow later.\n\n[arbitrary case-insensitive reference text]: https://www.mozilla.org\n[1]: http://slashdot.org\n[link text itself]: http://www.reddit.com\n\n\n\n# Images\n\nHere's our logo (hover to see the title text):\n\nInline-style:\n![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png \"Logo Title Text 1\")\n\nReference-style:\n![alt text][logo]\n\n[logo]: https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png \"Logo Title Text 2\"\n\n# Code and Syntax Highlighting\n\nInline `code` has `back-ticks around` it.\n\n```ts\nimport { SimplemdeModule } from 'ngx-simplemde';\n\n@NgModule({\n imports: [\n BrowserModule,\n SimplemdeModule.forRoot({\n })\n ],\n declarations: [AppComponent],\n bootstrap: [AppComponent]\n})\nexport class AppModule { }\n```\n\n```javascript\nvar s = \"JavaScript syntax highlighting\";\nalert(s);\n```\n\n```python\ns = \"Python syntax highlighting\"\nprint s\n```\n\n```\nNo language indicated, so no syntax highlighting.\nBut let's throw in a <b>tag</b>.\n\n```\n\n\n# Blockquotes\n\n> Blockquotes are very handy in email to emulate reply text.\n> This line is part of the same quote.\n\nQuote break.\n\n> This is a very long line that will still be quoted properly when it wraps. Oh boy let's keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can *put* **Markdown** into a blockquote.\n\n\n# Horizontal Rule\n\nThree or more...\n\n---\n\nHyphens\n\n***\n\nAsterisks\n\n___\n\nUnderscores\n\n# Tables\n\nColons can be used to align columns.\n\n| Tables | Are | Cool |\n| ------------- |:-------------:| -----:|\n| col 3 is | right-aligned | $1600 |\n| col 2 is | centered | $12 |\n| zebra stripes | are neat | $1 |\n\nThere must be at least 3 dashes separating each header cell.\nThe outer pipes (|) are optional, and you don't need to make the\nraw Markdown line up prettily. You can also use inline Markdown.\n\nMarkdown | Less | Pretty\n--- | --- | ---\n*Still* | `renders]` | **nicely**\n1 | 2 | 3\n"
}
