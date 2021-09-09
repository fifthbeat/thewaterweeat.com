"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SourceFilesModel = exports.SourceFiles = void 0;
const core_1 = require("../core");
class SourceFiles extends core_1.CrowdinApi {
    /**
     * @param projectId project identifier
     * @param name filter branch by name
     * @param limit maximum number of items to retrieve (default 25)
     * @param offset starting offset in the collection (default 0)
     */
    listProjectBranches(projectId, name, limit, offset) {
        let url = `${this.url}/projects/${projectId}/branches`;
        url = this.addQueryParam(url, 'name', name);
        return this.getList(url, limit, offset);
    }
    /**
     * @param projectId project identifier
     * @param request request body
     */
    createBranch(projectId, request) {
        const url = `${this.url}/projects/${projectId}/branches`;
        return this.post(url, request, this.defaultConfig());
    }
    /**
     * @param projectId project identifier
     * @param branchId branch identifier
     */
    getBranch(projectId, branchId) {
        const url = `${this.url}/projects/${projectId}/branches/${branchId}`;
        return this.get(url, this.defaultConfig());
    }
    /**
     * @param projectId project identifier
     * @param branchId branch identifier
     */
    deleteBranch(projectId, branchId) {
        const url = `${this.url}/projects/${projectId}/branches/${branchId}`;
        return this.delete(url, this.defaultConfig());
    }
    /**
     * @param projectId project identifier
     * @param branchId branch identifier
     * @param request request body
     */
    editBranch(projectId, branchId, request) {
        const url = `${this.url}/projects/${projectId}/branches/${branchId}`;
        return this.patch(url, request, this.defaultConfig());
    }
    /**
     * @param projectId project identifier
     * @param branchId filter directories by branchId
     * @param directoryId filter directories by directoryId
     * @param limit maximum number of items to retrieve (default 25)
     * @param offset starting offset in the collection (default 0)
     * @param filter use to filter directories by name
     * @param recursion use to list directories recursively (works only when directoryId or branchId parameter is specified)
     */
    listProjectDirectories(projectId, branchId, directoryId, limit, offset, filter, recursion) {
        let url = `${this.url}/projects/${projectId}/directories`;
        url = this.addQueryParam(url, 'branchId', branchId);
        url = this.addQueryParam(url, 'directoryId', directoryId);
        url = this.addQueryParam(url, 'filter', filter);
        url = this.addQueryParam(url, 'recursion', recursion);
        return this.getList(url, limit, offset);
    }
    /**
     * @param projectId project identifier
     * @param request request body
     */
    createDirectory(projectId, request) {
        const url = `${this.url}/projects/${projectId}/directories`;
        return this.post(url, request, this.defaultConfig());
    }
    /**
     * @param projectId project identifier
     * @param directoryId directory identifier
     */
    getDirectory(projectId, directoryId) {
        const url = `${this.url}/projects/${projectId}/directories/${directoryId}`;
        return this.get(url, this.defaultConfig());
    }
    /**
     * @param projectId project identifier
     * @param directoryId directory identifier
     */
    deleteDirectory(projectId, directoryId) {
        const url = `${this.url}/projects/${projectId}/directories/${directoryId}`;
        return this.delete(url, this.defaultConfig());
    }
    /**
     * @param projectId project identifier
     * @param directoryId directory identifier
     * @param request request body
     */
    editDirectory(projectId, directoryId, request) {
        const url = `${this.url}/projects/${projectId}/directories/${directoryId}`;
        return this.patch(url, request, this.defaultConfig());
    }
    listProjectFiles(projectId, branchIdOrRequest, directoryId, limit, offset, recursion, filter) {
        let url = `${this.url}/projects/${projectId}/files`;
        let request;
        if (branchIdOrRequest && typeof branchIdOrRequest === 'object') {
            request = branchIdOrRequest;
        }
        else {
            request = { branchId: branchIdOrRequest, directoryId, limit, offset, recursion, filter };
        }
        url = this.addQueryParam(url, 'branchId', request.branchId);
        url = this.addQueryParam(url, 'directoryId', request.directoryId);
        url = this.addQueryParam(url, 'recursion', request.recursion);
        url = this.addQueryParam(url, 'filter', request.filter);
        return this.getList(url, request.limit, request.offset);
    }
    /**
     * @param projectId project identifier
     * @param request request body
     */
    createFile(projectId, request) {
        const url = `${this.url}/projects/${projectId}/files`;
        return this.post(url, request, this.defaultConfig());
    }
    /**
     * @param projectId project identifier
     * @param fileId file identifier
     */
    getFile(projectId, fileId) {
        const url = `${this.url}/projects/${projectId}/files/${fileId}`;
        return this.get(url, this.defaultConfig());
    }
    /**
     * @param projectId project identifier
     * @param fileId file identifier
     * @param request request body
     */
    updateOrRestoreFile(projectId, fileId, request) {
        const url = `${this.url}/projects/${projectId}/files/${fileId}`;
        return this.put(url, request, this.defaultConfig());
    }
    /**
     * @param projectId project identifier
     * @param fileId file identifier
     */
    deleteFile(projectId, fileId) {
        const url = `${this.url}/projects/${projectId}/files/${fileId}`;
        return this.delete(url, this.defaultConfig());
    }
    /**
     * @param projectId project identifier
     * @param fileId file identifier
     * @param request request body
     */
    editFile(projectId, fileId, request) {
        const url = `${this.url}/projects/${projectId}/files/${fileId}`;
        return this.patch(url, request, this.defaultConfig());
    }
    /**
     * @param projectId project identifier
     * @param fileId file identifier
     */
    downloadFile(projectId, fileId) {
        const url = `${this.url}/projects/${projectId}/files/${fileId}/download`;
        return this.get(url, this.defaultConfig());
    }
    /**
     * @param projectId project identifier
     * @param fileId file identifier
     * @param limit maximum number of items to retrieve (default 25)
     * @param offset starting offset in the collection (default 0)
     */
    listFileRevisions(projectId, fileId, limit, offset) {
        const url = `${this.url}/projects/${projectId}/files/${fileId}/revisions`;
        return this.getList(url, limit, offset);
    }
    /**
     * @param projectId project identifier
     * @param fileId file identifier
     * @param revisionId revision identifier
     */
    getFileRevision(projectId, fileId, revisionId) {
        const url = `${this.url}/projects/${projectId}/files/${fileId}/revisions/${revisionId}`;
        return this.get(url, this.defaultConfig());
    }
    /**
     * @param projectId project identifier
     * @param branchId filter builds by branchId
     * @param limit maximum number of items to retrieve (default 25)
     * @param offset starting offset in the collection (default 0)
     */
    listReviewedSourceFilesBuild(projectId, branchId, limit, offset) {
        let url = `${this.url}/projects/${projectId}/strings/reviewed-builds`;
        url = this.addQueryParam(url, 'branchId', branchId);
        return this.getList(url, limit, offset);
    }
    /**
     * @param projectId project identifier
     * @param request request body
     */
    buildReviewedSourceFiles(projectId, request) {
        const url = `${this.url}/projects/${projectId}/strings/reviewed-builds`;
        return this.post(url, request, this.defaultConfig());
    }
    /**
     * @param projectId project identifier
     * @param buildId build identifier
     */
    checkReviewedSourceFilesBuildStatus(projectId, buildId) {
        const url = `${this.url}/projects/${projectId}/strings/reviewed-builds/${buildId}`;
        return this.get(url, this.defaultConfig());
    }
    /**
     * @param projectId project identifier
     * @param buildId build identifier
     */
    downloadReviewedSourceFiles(projectId, buildId) {
        const url = `${this.url}/projects/${projectId}/strings/reviewed-builds/${buildId}/download`;
        return this.get(url, this.defaultConfig());
    }
}
exports.SourceFiles = SourceFiles;
var SourceFilesModel;
(function (SourceFilesModel) {
    let Priority;
    (function (Priority) {
        Priority["LOW"] = "low";
        Priority["NORMAL"] = "normal";
        Priority["HIGH"] = "high";
    })(Priority = SourceFilesModel.Priority || (SourceFilesModel.Priority = {}));
    let FileType;
    (function (FileType) {
        FileType["AUTO"] = "auto";
        FileType["ANDROID"] = "android";
        FileType["MACOSX"] = "macosx";
        FileType["RESX"] = "resx";
        FileType["PROPERTIES"] = "properties";
        FileType["GETTEXT"] = "gettext";
        FileType["YAML"] = "yaml";
        FileType["PHP"] = "php";
        FileType["JSON"] = "json";
        FileType["XML"] = "xml";
        FileType["INI"] = "ini";
        FileType["RC"] = "rc";
        FileType["RESW"] = "resw";
        FileType["RESJSON"] = "resjson";
        FileType["QTTS"] = "qtts";
        FileType["JOOMLA"] = "joomla";
        FileType["CHROME"] = "chrome";
        FileType["DTD"] = "dtd";
        FileType["DKLANG"] = "dklang";
        FileType["FLEX"] = "flex";
        FileType["NSH"] = "nsh";
        FileType["WXL"] = "wxl";
        FileType["XLIFF"] = "xliff";
        FileType["HTML"] = "html";
        FileType["HAML"] = "haml";
        FileType["TXT"] = "txt";
        FileType["CSV"] = "csv";
        FileType["MD"] = "md";
        FileType["FLSNP"] = "flsnp";
        FileType["FM_HTML"] = "fm_html";
        FileType["FM_MD"] = "fm_md";
        FileType["MEDIAWIKI"] = "mediawiki";
        FileType["DOCX"] = "docx";
        FileType["SBV"] = "sbv";
        FileType["VTT"] = "vtt";
        FileType["SRT"] = "srt";
    })(FileType = SourceFilesModel.FileType || (SourceFilesModel.FileType = {}));
    let EscapeQuotes;
    (function (EscapeQuotes) {
        EscapeQuotes[EscapeQuotes["ZERO"] = 0] = "ZERO";
        EscapeQuotes[EscapeQuotes["ONE"] = 1] = "ONE";
        EscapeQuotes[EscapeQuotes["TWO"] = 2] = "TWO";
        EscapeQuotes[EscapeQuotes["THREE"] = 3] = "THREE";
    })(EscapeQuotes = SourceFilesModel.EscapeQuotes || (SourceFilesModel.EscapeQuotes = {}));
    let UpdateOption;
    (function (UpdateOption) {
        UpdateOption["CLEAR_TRANSLATIONS_AND_APPROVALS"] = "clear_translations_and_approvals";
        UpdateOption["KEEP_TRANSLATIONS"] = "keep_translations";
        UpdateOption["KEEP_TRANSLATIONS_AND_APPROVALS"] = "keep_translations_and_approvals";
    })(UpdateOption = SourceFilesModel.UpdateOption || (SourceFilesModel.UpdateOption = {}));
})(SourceFilesModel = exports.SourceFilesModel || (exports.SourceFilesModel = {}));
