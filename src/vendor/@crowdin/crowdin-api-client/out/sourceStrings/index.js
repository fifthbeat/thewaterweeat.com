"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SourceStringsModel = exports.SourceStrings = void 0;
const core_1 = require("../core");
class SourceStrings extends core_1.CrowdinApi {
    listProjectStrings(projectId, fileIdOrRequest, limit, offset, filter, denormalizePlaceholders, labelIds, scope, croql, branchId) {
        let url = `${this.url}/projects/${projectId}/strings`;
        let request;
        if (fileIdOrRequest && typeof fileIdOrRequest === 'object') {
            request = fileIdOrRequest;
        }
        else {
            request = {
                fileId: fileIdOrRequest,
                limit,
                offset,
                filter,
                denormalizePlaceholders,
                labelIds,
                scope,
                croql,
                branchId,
            };
        }
        url = this.addQueryParam(url, 'fileId', request.fileId);
        url = this.addQueryParam(url, 'filter', request.filter);
        url = this.addQueryParam(url, 'denormalizePlaceholders', request.denormalizePlaceholders);
        url = this.addQueryParam(url, 'labelIds', request.labelIds);
        url = this.addQueryParam(url, 'scope', request.scope);
        url = this.addQueryParam(url, 'croql', request.croql);
        url = this.addQueryParam(url, 'branchId', request.branchId);
        return this.getList(url, request.limit, request.offset);
    }
    /**
     * @param projectId project identifier
     * @param request request body
     */
    addString(projectId, request) {
        const url = `${this.url}/projects/${projectId}/strings`;
        return this.post(url, request, this.defaultConfig());
    }
    /**
     * @param projectId project identifier
     * @param stringId string identifier
     */
    getString(projectId, stringId) {
        const url = `${this.url}/projects/${projectId}/strings/${stringId}`;
        return this.get(url, this.defaultConfig());
    }
    /**
     * @param projectId project identifier
     * @param stringId string identifier
     */
    deleteString(projectId, stringId) {
        const url = `${this.url}/projects/${projectId}/strings/${stringId}`;
        return this.delete(url, this.defaultConfig());
    }
    /**
     * @param projectId project identifier
     * @param stringId string identifier
     * @param request request body
     */
    editString(projectId, stringId, request) {
        const url = `${this.url}/projects/${projectId}/strings/${stringId}`;
        return this.patch(url, request, this.defaultConfig());
    }
}
exports.SourceStrings = SourceStrings;
var SourceStringsModel;
(function (SourceStringsModel) {
    let Type;
    (function (Type) {
        Type[Type["TEXT"] = 0] = "TEXT";
        Type[Type["ASSET"] = 1] = "ASSET";
        Type[Type["ICU"] = 2] = "ICU";
    })(Type = SourceStringsModel.Type || (SourceStringsModel.Type = {}));
    let Scope;
    (function (Scope) {
        Scope["IDENTIFIER"] = "identifier";
        Scope["TEXT"] = "text";
        Scope["CONTEXT"] = "context";
    })(Scope = SourceStringsModel.Scope || (SourceStringsModel.Scope = {}));
})(SourceStringsModel = exports.SourceStringsModel || (exports.SourceStringsModel = {}));
