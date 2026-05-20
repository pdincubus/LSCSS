function escapeXml(text) {
    return text
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;')
        .replaceAll("'", '&apos;');
}

export async function GET(context) {
    const site = (context.site?.href ?? 'https://lscss.crayonsandco.de').replace(/\/?$/, '/');

    const items = [
        {
            title: 'CSS @scope and LSCSS',
            link: `${site}writing/articles/css-scope-and-lscss/`,
            guid: `${site}writing/articles/css-scope-and-lscss/`,
            pubDate: new Date('2026-04-15T12:00:00.000Z').toUTCString(),
            description:
                'How CSS @scope fits into Layered Semantic CSS: boundaries, layers, naming, and when scope is enough on its own.'
        },
        {
            title: 'CSS methodology evolution',
            link: `${site}writing/articles/methodology-evolution/`,
            guid: `${site}writing/articles/methodology-evolution/`,
            pubDate: new Date('2026-04-28T12:00:00.000Z').toUTCString(),
            description:
                'How CSS methodologies responded to platform limits—and how cascade layers, scoping, container queries, and modern selectors change the trade-offs today.'
        }
    ];

    const itemBlocks = items
        .map(
            (item) => `        <item>
            <title>${escapeXml(item.title)}</title>
            <link>${escapeXml(item.link)}</link>
            <guid isPermaLink="true">${escapeXml(item.guid)}</guid>
            <pubDate>${item.pubDate}</pubDate>
            <description>${escapeXml(item.description)}</description>
        </item>`
        )
        .join('\n\n');

    const xml = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
    <channel>
        <title>LSCSS</title>
        <description>Articles and documentation for Layered Semantic CSS.</description>
        <link>${site}</link>
        <language>en-gb</language>

${itemBlocks}
    </channel>
</rss>`;

    return new Response(xml, {
        headers: {
            'Content-Type': 'application/xml; charset=utf-8'
        }
    });
}
