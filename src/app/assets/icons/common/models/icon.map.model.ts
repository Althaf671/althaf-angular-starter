import { IMultiProviderIconConfig } from "@/app/common/ui/models/icon.model";
import { IIconMetadata } from "./icon.metadata.model";

export interface IIconMapConfig extends IMultiProviderIconConfig { 
    name: string;
    metadata: IIconMetadata
}