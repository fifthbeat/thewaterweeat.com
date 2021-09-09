import { CrowdinApi, DownloadLink, PatchRequest, ResponseList, ResponseObject } from '../core';
export declare class SourceFiles extends CrowdinApi {
    /**
     * @param projectId project identifier
     * @param name filter branch by name
     * @param limit maximum number of items to retrieve (default 25)
     * @param offset starting offset in the collection (default 0)
     */
    listProjectBranches(projectId: number, name?: string, limit?: number, offset?: number): Promise<ResponseList<SourceFilesModel.Branch>>;
    /**
     * @param projectId project identifier
     * @param request request body
     */
    createBranch(projectId: number, request: SourceFilesModel.CreateBranchRequest): Promise<ResponseObject<SourceFilesModel.Branch>>;
    /**
     * @param projectId project identifier
     * @param branchId branch identifier
     */
    getBranch(projectId: number, branchId: number): Promise<ResponseObject<SourceFilesModel.Branch>>;
    /**
     * @param projectId project identifier
     * @param branchId branch identifier
     */
    deleteBranch(projectId: number, branchId: number): Promise<void>;
    /**
     * @param projectId project identifier
     * @param branchId branch identifier
     * @param request request body
     */
    editBranch(projectId: number, branchId: number, request: PatchRequest[]): Promise<ResponseObject<SourceFilesModel.Branch>>;
    /**
     * @param projectId project identifier
     * @param branchId filter directories by branchId
     * @param directoryId filter directories by directoryId
     * @param limit maximum number of items to retrieve (default 25)
     * @param offset starting offset in the collection (default 0)
     * @param filter use to filter directories by name
     * @param recursion use to list directories recursively (works only when directoryId or branchId parameter is specified)
     */
    listProjectDirectories(projectId: number, branchId?: number, directoryId?: number, limit?: number, offset?: number, filter?: string, recursion?: string): Promise<ResponseList<SourceFilesModel.Directory>>;
    /**
     * @param projectId project identifier
     * @param request request body
     */
    createDirectory(projectId: number, request: SourceFilesModel.CreateDirectoryRequest): Promise<ResponseObject<SourceFilesModel.Directory>>;
    /**
     * @param projectId project identifier
     * @param directoryId directory identifier
     */
    getDirectory(projectId: number, directoryId: number): Promise<ResponseObject<SourceFilesModel.Directory>>;
    /**
     * @param projectId project identifier
     * @param directoryId directory identifier
     */
    deleteDirectory(projectId: number, directoryId: number): Promise<void>;
    /**
     * @param projectId project identifier
     * @param directoryId directory identifier
     * @param request request body
     */
    editDirectory(projectId: number, directoryId: number, request: PatchRequest[]): Promise<ResponseObject<SourceFilesModel.Directory>>;
    listProjectFiles(projectId: number, request: SourceFilesModel.ListProjectFilesRequest): Promise<ResponseList<SourceFilesModel.File>>;
    /**
     *
     * @param projectId project identifier
     * @param branchId list branch files (Note! You can either list files for the specified branch (branchId) in the same request)
     * @param directoryId list directory files (Note! You can either list files for the specified directory (directoryId) in the same request)
     * @param limit maximum number of items to retrieve (default 25)
     * @param offset starting offset in the collection (default 0)
     * @param recursion use to list files recursively
     * @param filter use to filter files by name
     */
    listProjectFiles(projectId: number, branchId?: number, directoryId?: number, limit?: number, offset?: number, recursion?: any, filter?: string): Promise<ResponseList<SourceFilesModel.File>>;
    /**
     * @param projectId project identifier
     * @param request request body
     */
    createFile(projectId: number, request: SourceFilesModel.CreateFileRequest): Promise<ResponseObject<SourceFilesModel.File>>;
    /**
     * @param projectId project identifier
     * @param fileId file identifier
     */
    getFile(projectId: number, fileId: number): Promise<ResponseObject<SourceFilesModel.File>>;
    /**
     * @param projectId project identifier
     * @param fileId file identifier
     * @param request request body
     */
    updateOrRestoreFile(projectId: number, fileId: number, request: SourceFilesModel.ReplaceFileFromStorageRequest | SourceFilesModel.RestoreFile): Promise<ResponseObject<SourceFilesModel.File>>;
    /**
     * @param projectId project identifier
     * @param fileId file identifier
     */
    deleteFile(projectId: number, fileId: number): Promise<void>;
    /**
     * @param projectId project identifier
     * @param fileId file identifier
     * @param request request body
     */
    editFile(projectId: number, fileId: number, request: PatchRequest[]): Promise<ResponseObject<SourceFilesModel.File>>;
    /**
     * @param projectId project identifier
     * @param fileId file identifier
     */
    downloadFile(projectId: number, fileId: number): Promise<ResponseObject<DownloadLink>>;
    /**
     * @param projectId project identifier
     * @param fileId file identifier
     * @param limit maximum number of items to retrieve (default 25)
     * @param offset starting offset in the collection (default 0)
     */
    listFileRevisions(projectId: number, fileId: number, limit?: number, offset?: number): Promise<ResponseList<SourceFilesModel.FileRevision>>;
    /**
     * @param projectId project identifier
     * @param fileId file identifier
     * @param revisionId revision identifier
     */
    getFileRevision(projectId: number, fileId: number, revisionId: number): Promise<ResponseObject<SourceFilesModel.FileRevision>>;
    /**
     * @param projectId project identifier
     * @param branchId filter builds by branchId
     * @param limit maximum number of items to retrieve (default 25)
     * @param offset starting offset in the collection (default 0)
     */
    listReviewedSourceFilesBuild(projectId: number, branchId?: number, limit?: number, offset?: number): Promise<ResponseList<SourceFilesModel.ReviewedSourceFilesBuild>>;
    /**
     * @param projectId project identifier
     * @param request request body
     */
    buildReviewedSourceFiles(projectId: number, request: SourceFilesModel.BuildReviewedSourceFilesRequest): Promise<ResponseObject<SourceFilesModel.ReviewedSourceFilesBuild>>;
    /**
     * @param projectId project identifier
     * @param buildId build identifier
     */
    checkReviewedSourceFilesBuildStatus(projectId: number, buildId: number): Promise<ResponseObject<SourceFilesModel.ReviewedSourceFilesBuild>>;
    /**
     * @param projectId project identifier
     * @param buildId build identifier
     */
    downloadReviewedSourceFiles(projectId: number, buildId: number): Promise<ResponseObject<DownloadLink>>;
}
export declare namespace SourceFilesModel {
    interface Branch {
        id: number;
        projectId: number;
        name: string;
        title: string;
        exportPattern: string;
        priority: Priority;
        createdAt: string;
        updatedAt: string;
    }
    interface CreateBranchRequest {
        name: string;
        title?: string;
        exportPattern?: string;
        priority?: Priority;
    }
    enum Priority {
        LOW = "low",
        NORMAL = "normal",
        HIGH = "high"
    }
    interface Directory {
        id: number;
        projectId: number;
        branchId: number;
        directoryId: number;
        name: string;
        title: string;
        exportPattern: string;
        priority: Priority;
        createdAt: string;
        updatedAt: string;
    }
    interface CreateDirectoryRequest {
        branchId?: number;
        directoryId?: number;
        name: string;
        title?: string;
        exportPattern?: string;
        priority?: Priority;
    }
    interface ListProjectFilesRequest {
        branchId?: number;
        directoryId?: number;
        limit?: number;
        offset?: number;
        recursion?: any;
        filter?: string;
    }
    interface File {
        id: number;
        projectId: number;
        branchId: number;
        directoryId: number;
        name: string;
        title: string;
        type: string;
        revisionId: number;
        status: string;
        priority: Priority;
        path: string;
        importOptions: SpreadsheetImportOptions | XmlImportOptions | OtherImportOptions;
        exportOptions: GeneralExportOptions | PropertyExportOptions;
        createdAt: string;
        updatedAt: string;
        excludedTargetLanguages: string[];
    }
    interface CreateFileRequest {
        storageId: number;
        name: string;
        branchId?: number;
        directoryId?: number;
        title?: string;
        type?: FileType;
        importOptions?: SpreadsheetImportOptions | XmlImportOptions | OtherImportOptions;
        exportOptions?: GeneralExportOptions | PropertyExportOptions;
        attachLabelIds?: number[];
        excludedTargetLanguages?: string[];
    }
    interface ReplaceFileFromStorageRequest {
        storageId: number;
        updateOption?: UpdateOption;
        importOptions?: SpreadsheetImportOptions | XmlImportOptions | OtherImportOptions;
        exportOptions?: GeneralExportOptions | PropertyExportOptions;
        attachLabelIds?: number[];
        detachLabelIds?: number[];
    }
    interface RestoreFile {
        revisionId: number;
    }
    interface FileRevision {
        id: number;
        projectId: number;
        fileId: number;
        restoreToRevision: number;
        info: FileRevisionInfo;
        date: string;
    }
    interface FileRevisionInfo {
        added: FileRevisionInfoAttribute;
        deleted: FileRevisionInfoAttribute;
        updated: FileRevisionInfoAttribute;
    }
    interface FileRevisionInfoAttribute {
        strings: number;
        words: number;
    }
    enum FileType {
        AUTO = "auto",
        ANDROID = "android",
        MACOSX = "macosx",
        RESX = "resx",
        PROPERTIES = "properties",
        GETTEXT = "gettext",
        YAML = "yaml",
        PHP = "php",
        JSON = "json",
        XML = "xml",
        INI = "ini",
        RC = "rc",
        RESW = "resw",
        RESJSON = "resjson",
        QTTS = "qtts",
        JOOMLA = "joomla",
        CHROME = "chrome",
        DTD = "dtd",
        DKLANG = "dklang",
        FLEX = "flex",
        NSH = "nsh",
        WXL = "wxl",
        XLIFF = "xliff",
        HTML = "html",
        HAML = "haml",
        TXT = "txt",
        CSV = "csv",
        MD = "md",
        FLSNP = "flsnp",
        FM_HTML = "fm_html",
        FM_MD = "fm_md",
        MEDIAWIKI = "mediawiki",
        DOCX = "docx",
        SBV = "sbv",
        VTT = "vtt",
        SRT = "srt"
    }
    interface SpreadsheetImportOptions {
        firstLineContainsHeader: boolean;
        importTranslations: boolean;
        scheme: Scheme;
    }
    interface Scheme {
        identifier: number;
        sourcePhrase: number;
        [key: string]: number;
    }
    interface XmlImportOptions {
        translateContent: boolean;
        translateAttributes: boolean;
        contentSegmentation: boolean;
        translatableElements: string[];
        srxStorageId: number;
    }
    interface OtherImportOptions {
        contentSegmentation: boolean;
        srxStorageId: number;
    }
    interface GeneralExportOptions {
        exportPattern: string;
    }
    interface PropertyExportOptions {
        escapeQuotes: EscapeQuotes;
        exportPattern: string;
    }
    enum EscapeQuotes {
        ZERO = 0,
        ONE = 1,
        TWO = 2,
        THREE = 3
    }
    enum UpdateOption {
        CLEAR_TRANSLATIONS_AND_APPROVALS = "clear_translations_and_approvals",
        KEEP_TRANSLATIONS = "keep_translations",
        KEEP_TRANSLATIONS_AND_APPROVALS = "keep_translations_and_approvals"
    }
    interface ReviewedSourceFilesBuild {
        id: number;
        projectId: number;
        status: string;
        progress: number;
        attributes: ReviewedSourceFilesBuildAttributes;
    }
    interface ReviewedSourceFilesBuildAttributes {
        branchId: number;
        targetLanguageId: string;
    }
    interface BuildReviewedSourceFilesRequest {
        branchId: number;
    }
}