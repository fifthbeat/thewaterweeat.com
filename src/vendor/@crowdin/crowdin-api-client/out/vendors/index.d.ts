import { CrowdinApi, ResponseList } from '../core';
export declare class Vendors extends CrowdinApi {
    /**
     * @param limit maximum number of items to retrieve (default 25)
     * @param offset starting offset in the collection (default 0)
     */
    listVendors(limit?: number, offset?: number): Promise<ResponseList<VendorsModel.Vendor>>;
}
export declare namespace VendorsModel {
    interface Vendor {
        id: number;
        name: string;
        description: string;
        status: string;
    }
}
