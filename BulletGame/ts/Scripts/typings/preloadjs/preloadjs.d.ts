// Type definitions for PreloadJS 0.4.1
// Project: http://www.createjs.com/#!/PreloadJS
// Definitions by: Pedro Ferreira <https://bitbucket.org/drk4>
// Definitions: https://github.com/borisyankov/DefinitelyTyped



// Library documentation : http://www.createjs.com/Docs/PreloadJS/modules/PreloadJS.html

/// <reference path="../createjs/createjs.d.ts" />

declare module createjs {
    export class AbstractLoader extends EventDispatcher {
        // properties
        canceled: boolean;
        loaded: boolean;
        progress: number;
        
        // methods
        buildPath(src: string, data?: Object): string;
        close(): void;
        load(): void;
    }
    
    export class LoadQueue extends AbstractLoader {
        constructor(useXHR?: boolean, basePath?: string, crossOrigin?: string);
        constructor(useXHR?: boolean, basePath?: string, crossOrigin?: boolean);

        // properties
        static BINARY: string;
        static CSS: string;
        static IMAGE: string;
        static JAVASCRIPT: string;
        static JSON: string;
        static JSONP: string;
        static loadTimeout: number;
        maintainScriptOrder: boolean;
        static MANIFEST: string;
        next: LoadQueue;
        static SOUND: string;
        stopOnError: boolean;
        static SVG: string;
        static TEXT: string;
        useXHR: boolean;
        static XML: string;
        
        // methods
        getItem(value: string): Object;
        getResult(value: string, rawResult?: boolean): Object;
        installPlugin(plugin: any): void;
        loadFile(file: Object, loadNow?: boolean, basePath?: string): void;
        loadFile(file: string, loadNow?: boolean, basePath?: string): void;
        loadManifest(manifest: Object, loadNow?: boolean, basePath?: string): void;
        loadManifest(manifest: string, loadNow?: boolean, basePath?: string): void;
        loadManifest(manifest: any[], loadNow?: boolean, basePath?: string): void;
        remove(idsOrUrls: string): void;
        remove(idsOrUrls: any[]): void;
        removeAll(): void;
        reset(): void;
        setMaxConnections(value: number): void;
        setPaused(value: boolean): void;
        setUseXHR(value: boolean): void;
    }
    
    export class PreloadJS {
        static buildDate: string;
        static version: string;
    }
    
    export class SamplePlugin {
        static fileLoadHandler(event: Object): void;
        static getPreloadHandlers(): Object;
        static preloadHandler(src: string, type: string, id: string, data: any, basePath: string, queue: LoadQueue): any;
    }

    export class TagLoader extends AbstractLoader {
        constructor (item: Object);
        
        // methods
        getResult(): any;
    }
    
    export class XHRLoader extends AbstractLoader {
        constructor (item: Object, crossOrigin?: string);
        
        // methods
        getAllResponseHeaders(): string;
        getResponseHeader(header: string): string;
        getResult (rawResult?: boolean): Object;
    }
}
