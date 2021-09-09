import { BooleanInt, CrowdinApi, PatchRequest, ResponseList, ResponseObject } from '../core';
export declare class SourceStrings extends CrowdinApi {
    listProjectStrings(projectId: number, request: SourceStringsModel.ListProjectStringsRequest): Promise<ResponseList<SourceStringsModel.String>>;
    /**
     * @param projectId project identifier
     * @param fileId file identifier
     * @param limit maximum number of items to retrieve (default 25)
     * @param offset starting offset in the collection (default 0)
     * @param filter filter strings by text and context
     * @param denormalizePlaceholders enable denormalize placeholders
     * @param labelIds filter strings by labelIds
     * @param scope specify field to be the target of filtering
     * @param croql filter strings by CroQL (Can't be used with `labelIds`, `filter` or `scope` in same request)
     * @param branchId filter by branch identifier
     */
    listProjectStrings(projectId: number, fileId?: number, limit?: number, offset?: number, filter?: string, denormalizePlaceholders?: BooleanInt, labelIds?: string, scope?: SourceStringsModel.Scope, croql?: string, branchId?: number): Promise<ResponseList<SourceStringsModel.String>>;
    /**
     * @param projectId project identifier
     * @param request request body
     */
    addString(projectId: number, request: SourceStringsModel.CreateStringRequest): Promise<ResponseObject<SourceStringsModel.String>>;
    /**
     * @param projectId project identifier
     * @param stringId string identifier
     */
    getString(projectId: number, stringId: number): Promise<ResponseObject<SourceStringsModel.String>>;
    /**
     * @param projectId project identifier
     * @param stringId string identifier
     */
    deleteString(projectId: number, stringId: number): Promise<void>;
    /**
     * @param projectId project identifier
     * @param stringId string identifier
     * @param request request body
     */
    editString(projectId: number, stringId: number, request: PatchRequest[]): Promise<ResponseObject<SourceStringsModel.String>>;
}
export declare namespace SourceStringsModel {
    interface ListProjectStringsRequest {
        fileId?: number;
        limit?: number;
        offset?: number;
        filter?: string;
        denormalizePlaceholders?: BooleanInt;
        labelIds?: string;
        scope?: SourceStringsModel.Scope;
        croql?: string;
        branchId?: number;
    }
    interface String {
        id: number;
        projectId: number;
        fileId: number;
        branchId: number;
        identifier: string;
        text: string | PluralText;
        type: Type;
        context: string;
        maxLength: number;
        isHidden: boolean;
        revision: number;
        hasPlurals: boolean;
        isIcu: boolean;
        labelIds: number[];
        createdAt: string;
        updatedAt: string;
    }
    interface CreateStringRequest {
        identifier: string;
        fileId?: number;
        text: string;
        context?: string;
        isHidden?: boolean;
        maxLength?: number;
        labelIds?: number[];
    }
    interface PluralText {
        zero?: string;
        one?: string;
        two?: string;
        few?: string;
        many?: string;
        other?: string;
    }
    enum Type {
        TEXT = 0,
        ASSET = 1,
        ICU = 2
    }
    enum Scope {
        IDENTIFIER = "identifier",
        TEXT = "text",
        CONTEXT = "context"
    }
}
