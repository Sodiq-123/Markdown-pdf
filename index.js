const path = require('path');
const fs = require('fs');
const MarkdownPDF = require('markdown-pdf');

const infile = path.join(__dirname, 'test.md'); // path to the markdown file
const outfile = path.join(__dirname, 'test.pdf'); // path to the pdf file and name you want to convert it to

const convertMd = (infile, outfile) => {
  const md = fs.readFileSync(infile, 'utf8');
  const pdf = new MarkdownPDF();
  pdf.from.string(md).to(outfile);
}

convertMd(infile, outfile);

const convertMd2 = (infile, outfile) => {
  try {
    fs.createReadStream(infile)
    .pipe(MarkdownPDF())
    .pipe(fs.createWriteStream(outfile));

    console.log('Successfully created Pdf');
  } catch (err) {
    console.error(err);
  }
}

convertMd2(infile, outfile);