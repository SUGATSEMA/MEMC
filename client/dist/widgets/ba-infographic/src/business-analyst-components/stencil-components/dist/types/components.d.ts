/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "./stencil-public-runtime";
import { InfographicBufferType, InfographicBufferUnits, ViewModeType } from "./components/arcgis-infographic/arcgis-infographic";
export namespace Components {
    interface ArcgisBaSearch {
    }
    interface ArcgisInfographic {
        "bufferSizes": string;
        "bufferType": InfographicBufferType;
        "bufferUnits": InfographicBufferUnits;
        "env": string;
        /**
          * generateBuffers  This function passes in values needed to do either a drivetime or walktime buffers report.  The values passed in update the Props in the component, async returns the rings, and generates a new infographic using the drivetime or walktime values.
          * @param bufferType = 'walktime' or 'drivetime'
          * @param values = string representing drivetime distance or time [examplel:"1,3,5"]
          * @param units = "miles", "kilometers", or "minutes"
          * @param latitude = map location
          * @param longitude
          * @return = [ { value: <bufferValue>, units: <bufferUnits>, rings: <geometry rings> }, { value: <bufferValue>, units: <bufferUnits>, rings: <geometry rings> }, <up to 3 results depending on length of values> ]
         */
        "generateBuffers": (bufferType: string, values: string, units: string, latitude: string, longitude: string) => Promise<any>;
        "instanceId": string;
        "langCode": string;
        "locationDisplayName": string;
        "onPropChange": (callback: any, context: any) => Promise<void>;
        "reportColorBackground": string;
        "reportColorHeader": string;
        "reportColorHeaderText": string;
        "reportGeometry": string;
        "reportHeaderButtonDynHtml": boolean;
        "reportHeaderButtonExcel": boolean;
        "reportHeaderButtonFullscreen": boolean;
        "reportHeaderButtonImage": boolean;
        "reportHeaderButtonPdf": boolean;
        "reportHeaderButtonPrint": boolean;
        "reportHeaderButtonZoomLevel": boolean;
        "reportId": string;
        "reportLocation": string;
        "reportShowHeader": boolean;
        "runReportOnClick": boolean;
        "selectedFeatureId": number;
        "showSearch": boolean;
        "theme": object;
        "token": string;
        "username": string;
        "viewMode": ViewModeType;
    }
    interface ArcgisReportList {
        "_containerId": string;
        "_counter": number;
        "selectedReportId": string;
        "token": string;
        "treeInstanceId": string;
        "username": string;
    }
    interface ReportListAccordion {
        "_containerId": string;
        "_counter": number;
        "env": string;
        "langCode": string;
        "listInstanceId": string;
        "selectedReportId": string;
        "theme": string;
        "token": string;
        "username": string;
    }
}
declare global {
    interface HTMLArcgisBaSearchElement extends Components.ArcgisBaSearch, HTMLStencilElement {
    }
    var HTMLArcgisBaSearchElement: {
        prototype: HTMLArcgisBaSearchElement;
        new (): HTMLArcgisBaSearchElement;
    };
    interface HTMLArcgisInfographicElement extends Components.ArcgisInfographic, HTMLStencilElement {
    }
    var HTMLArcgisInfographicElement: {
        prototype: HTMLArcgisInfographicElement;
        new (): HTMLArcgisInfographicElement;
    };
    interface HTMLArcgisReportListElement extends Components.ArcgisReportList, HTMLStencilElement {
    }
    var HTMLArcgisReportListElement: {
        prototype: HTMLArcgisReportListElement;
        new (): HTMLArcgisReportListElement;
    };
    interface HTMLReportListAccordionElement extends Components.ReportListAccordion, HTMLStencilElement {
    }
    var HTMLReportListAccordionElement: {
        prototype: HTMLReportListAccordionElement;
        new (): HTMLReportListAccordionElement;
    };
    interface HTMLElementTagNameMap {
        "arcgis-ba-search": HTMLArcgisBaSearchElement;
        "arcgis-infographic": HTMLArcgisInfographicElement;
        "arcgis-report-list": HTMLArcgisReportListElement;
        "report-list-accordion": HTMLReportListAccordionElement;
    }
}
declare namespace LocalJSX {
    interface ArcgisBaSearch {
    }
    interface ArcgisInfographic {
        "bufferSizes"?: string;
        "bufferType"?: InfographicBufferType;
        "bufferUnits"?: InfographicBufferUnits;
        "env"?: string;
        "instanceId"?: string;
        "langCode"?: string;
        "locationDisplayName"?: string;
        "reportColorBackground"?: string;
        "reportColorHeader"?: string;
        "reportColorHeaderText"?: string;
        "reportGeometry"?: string;
        "reportHeaderButtonDynHtml"?: boolean;
        "reportHeaderButtonExcel"?: boolean;
        "reportHeaderButtonFullscreen"?: boolean;
        "reportHeaderButtonImage"?: boolean;
        "reportHeaderButtonPdf"?: boolean;
        "reportHeaderButtonPrint"?: boolean;
        "reportHeaderButtonZoomLevel"?: boolean;
        "reportId"?: string;
        "reportLocation"?: string;
        "reportShowHeader"?: boolean;
        "runReportOnClick"?: boolean;
        "selectedFeatureId"?: number;
        "showSearch"?: boolean;
        "theme"?: object;
        "token"?: string;
        "username"?: string;
        "viewMode"?: ViewModeType;
    }
    interface ArcgisReportList {
        "_containerId"?: string;
        "_counter"?: number;
        "onReportSelected"?: (event: CustomEvent<any>) => void;
        "selectedReportId"?: string;
        "token"?: string;
        "treeInstanceId"?: string;
        "username"?: string;
    }
    interface ReportListAccordion {
        "_containerId"?: string;
        "_counter"?: number;
        "env"?: string;
        "langCode"?: string;
        "listInstanceId"?: string;
        "onReportSelected"?: (event: CustomEvent<any>) => void;
        "selectedReportId"?: string;
        "theme"?: string;
        "token"?: string;
        "username"?: string;
    }
    interface IntrinsicElements {
        "arcgis-ba-search": ArcgisBaSearch;
        "arcgis-infographic": ArcgisInfographic;
        "arcgis-report-list": ArcgisReportList;
        "report-list-accordion": ReportListAccordion;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "arcgis-ba-search": LocalJSX.ArcgisBaSearch & JSXBase.HTMLAttributes<HTMLArcgisBaSearchElement>;
            "arcgis-infographic": LocalJSX.ArcgisInfographic & JSXBase.HTMLAttributes<HTMLArcgisInfographicElement>;
            "arcgis-report-list": LocalJSX.ArcgisReportList & JSXBase.HTMLAttributes<HTMLArcgisReportListElement>;
            "report-list-accordion": LocalJSX.ReportListAccordion & JSXBase.HTMLAttributes<HTMLReportListAccordionElement>;
        }
    }
}
