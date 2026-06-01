import type { FileTreeLine, FileTreeNode } from '../types/fileTree';

/**
 * Flatten nested folder nodes into display lines with box-drawing guides.
 */
export function flattenFileTree(
    nodes: FileTreeNode[],
    ancestors: boolean[] = []
): FileTreeLine[] {
    const lines: FileTreeLine[] = [];

    nodes.forEach((node, index) => {
        const isLast = index === nodes.length - 1;
        const branch = isLast ? '└─ ' : '├─ ';
        const guide = ancestors.map((continues) => (continues ? '│   ' : '    ')).join('');
        const name = node.kind === 'folder' ? `${node.name}/` : node.name;

        lines.push({
            guide: `${guide}${branch}`,
            name,
            kind: node.kind,
            comment: node.comment
        });

        if (node.children?.length) {
            lines.push(...flattenFileTree(node.children, [...ancestors, !isLast]));
        }
    });

    return lines;
}
