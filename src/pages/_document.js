import Document, {Html, Head, Main, NextScript} from "next/document";

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return {...initialProps};
    }
    render() {
        return (
            <Html>
                <Head>
                    <link rel="icon" type="image/png" href="/favicon.png" />
                    <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;