export type FileTreeKind = 'folder' | 'file';

export interface FileTreeNode {
    name: string;
    kind: FileTreeKind;
    comment?: string;
    children?: FileTreeNode[];
}

export interface FileTreeRoot {
    name: string;
    children: FileTreeNode[];
}

export interface FileTreeLine {
    guide: string;
    name: string;
    kind: FileTreeKind;
    comment?: string;
}
