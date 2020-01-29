import { Resource } from './Resource';
import { Project } from './project';
import { AccessBundle } from './access-bundle';

export class RequestAccess {
    businessUnit?: string;
    division?: string;
    superDepartment?: string;
    department?: string;
    projectSelected?: string;
    accessBundleSelected?: string;
    projects?: Project[];
    accessBundles?: AccessBundle[];
    resourceList?: Resource[];
}