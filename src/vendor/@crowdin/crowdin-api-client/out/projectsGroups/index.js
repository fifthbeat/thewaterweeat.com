"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectsGroupsModel = exports.ProjectsGroups = void 0;
const core_1 = require("../core");
class ProjectsGroups extends core_1.CrowdinApi {
    /**
     * @param parentId parent group identifier
     * @param offset starting offset in the collection (default 0)
     * @param userId get user own projects
     * @param limit maximum number of items to retrieve (default 25)
     */
    listGroups(parentId, offset, userId, limit) {
        let url = `${this.url}/groups`;
        url = this.addQueryParam(url, 'parentId', parentId);
        url = this.addQueryParam(url, 'userId', userId);
        return this.getList(url, limit, offset);
    }
    /**
     * @param request request body
     */
    addGroup(request) {
        const url = `${this.url}/groups`;
        return this.post(url, request, this.defaultConfig());
    }
    /**
     * @param group group identifier
     */
    getGroup(groupId) {
        const url = `${this.url}/groups/${groupId}`;
        return this.get(url, this.defaultConfig());
    }
    /**
     * @param groupId group identifier
     */
    deleteGroup(groupId) {
        const url = `${this.url}/groups/${groupId}`;
        return this.delete(url, this.defaultConfig());
    }
    /**
     * @param groupId group identifier
     * @param request request body
     */
    editGroup(groupId, request) {
        const url = `${this.url}/groups/${groupId}`;
        return this.patch(url, request, this.defaultConfig());
    }
    /**
     * @param groupId group identifier
     * @param hasManagerAccess projects with manager access (default 0)
     * @param limit maximum number of items to retrieve (default 25)
     * @param offset starting offset in the collection (default 0)
     */
    listProjects(groupId, hasManagerAccess, limit, offset) {
        let url = `${this.url}/projects`;
        url = this.addQueryParam(url, 'groupId', groupId);
        url = this.addQueryParam(url, 'hasManagerAccess', hasManagerAccess);
        return this.getList(url, limit, offset);
    }
    /**
     * @param request request body
     */
    addProject(request) {
        const url = `${this.url}/projects`;
        return this.post(url, request, this.defaultConfig());
    }
    /**
     * @param projectId project identifier
     */
    getProject(projectId) {
        const url = `${this.url}/projects/${projectId}`;
        return this.get(url, this.defaultConfig());
    }
    /**
     * @param projectId project identifier
     */
    deleteProject(projectId) {
        const url = `${this.url}/projects/${projectId}`;
        return this.delete(url, this.defaultConfig());
    }
    /**
     * @param projectId project identifier
     * @param request request body
     */
    editProject(projectId, request) {
        const url = `${this.url}/projects/${projectId}`;
        return this.patch(url, request, this.defaultConfig());
    }
}
exports.ProjectsGroups = ProjectsGroups;
var ProjectsGroupsModel;
(function (ProjectsGroupsModel) {
    let Type;
    (function (Type) {
        Type[Type["FILES_BASED"] = 0] = "FILES_BASED";
        Type[Type["STRINGS_BASED"] = 1] = "STRINGS_BASED";
    })(Type = ProjectsGroupsModel.Type || (ProjectsGroupsModel.Type = {}));
    let JoinPolicy;
    (function (JoinPolicy) {
        JoinPolicy["OPEN"] = "open";
        JoinPolicy["PRIVATE"] = "private";
    })(JoinPolicy = ProjectsGroupsModel.JoinPolicy || (ProjectsGroupsModel.JoinPolicy = {}));
    let LanguageAccessPolicy;
    (function (LanguageAccessPolicy) {
        LanguageAccessPolicy["OPEN"] = "open";
        LanguageAccessPolicy["MODERATE"] = "moderate";
    })(LanguageAccessPolicy = ProjectsGroupsModel.LanguageAccessPolicy || (ProjectsGroupsModel.LanguageAccessPolicy = {}));
    let TranslateDuplicates;
    (function (TranslateDuplicates) {
        TranslateDuplicates[TranslateDuplicates["SHOW"] = 0] = "SHOW";
        TranslateDuplicates[TranslateDuplicates["HIDE_REGULAR_DETECTION"] = 1] = "HIDE_REGULAR_DETECTION";
        TranslateDuplicates[TranslateDuplicates["SHOW_AUTO_TRANSLATE"] = 2] = "SHOW_AUTO_TRANSLATE";
        TranslateDuplicates[TranslateDuplicates["SHOW_WITHIN_VERION_BRANCH_REGULAR_DETECTION"] = 3] = "SHOW_WITHIN_VERION_BRANCH_REGULAR_DETECTION";
        TranslateDuplicates[TranslateDuplicates["HIDE_STRICT_DETECTION"] = 4] = "HIDE_STRICT_DETECTION";
        TranslateDuplicates[TranslateDuplicates["SHOW_WITHIN_VERION_BRANCH_STRICT_DETECTION"] = 5] = "SHOW_WITHIN_VERION_BRANCH_STRICT_DETECTION";
    })(TranslateDuplicates = ProjectsGroupsModel.TranslateDuplicates || (ProjectsGroupsModel.TranslateDuplicates = {}));
})(ProjectsGroupsModel = exports.ProjectsGroupsModel || (exports.ProjectsGroupsModel = {}));