exports.data = {};

exports.render = function (data) {
    return `<!doctype html>
<html lang="tr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${data.title}</title>
    <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">
  </head>
  <body class="bg-gray-400 p-4">
  ${data.collections.kisi
        .sort((a, b) => parseInt(a.data.birth_date) - (b.data.birth_date))
        .reverse()
        .map(kisi => `
        <div class="flex justify-center items-center mb-4">
           <!-- Start of component -->
           <a href="./${kisi.url}" class="max-w-sm bg-white border-2 border-gray-200 p-6 rounded-md tracking-wide shadow-sm hover:shadow-lg hover:border-gray-300 w-full">
              <div id="header" class="flex items-center mb-4"> 
                 <img alt="avatar" class="w-20 rounded-full border-2 border-gray-300" src="https://s.gravatar.com/avatar/${this.md5(kisi.data.email)}?s=80" />
                 <div id="header-text" class="leading-5 ml-6 sm">
                    <h4 id="name" class="text-xl font-semibold">${kisi.data.first_name} ${kisi.data.last_name}</h4>
                 </div>
              </div>
              <div id="quote">
                 <q class="italic text-gray-600">${kisi.data.motto}</q>
              </div>
           </a>
        </div>
        `).join('')}
  </body>
</html>`;
};
