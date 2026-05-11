export async function GET(context) {
    const site = context.site || 'https://lscss.dev';

    const xml = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
    <channel>
        <title>LSCSS</title>
        <description>Modern CSS architecture articles and documentation.</description>
        <link>${site}</link>

        <item>
            <title>CSS @scope and LSCSS</title>
            <link>${site}/writing/articles/css-scope-and-lscss/</link>
        </item>

        <item>
            <title>CSS methodology evolution</title>
            <link>${site}/writing/articles/methodology-evolution/</link>
        </item>
    </channel>
</rss>`;

    return new Response(xml, {
        headers: {
            'Content-Type': 'application/xml'
        }
    });
}
