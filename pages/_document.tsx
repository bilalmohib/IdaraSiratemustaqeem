import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <title>Idara Sirate Mustaqeem</title>
      {/* Font Awesome */}
      <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet" />
      {/* Google Fonts */}
      <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" rel="stylesheet" />
      {/* MDB */}
      <link href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/6.1.0/mdb.min.css" rel="stylesheet" />
      <meta name="description" content="Dr Ashraf Asif Jalali is the Author of Many Books and continuously working on it. Dr Jalali has delivered more than 20,000+ lectures ( in Urdu, English and Arabic) on a Wide Range of subjects. Like Fahm e Deen, (Urdu اسلام کو درپیش چیلنجز کا ادراک اور ان کا حل .درود و سلام پر اعتراض آخر کیوں؟ , غائبانہ جنازہ جائز نہیں , حضور ﷺ بحیثیت مبشر مع معجزہ شق القمر) ." />
      <body>
        <Main />
        <NextScript />
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/6.1.0/mdb.min.js"
        />
      </body>
    </Html>
  )
}
