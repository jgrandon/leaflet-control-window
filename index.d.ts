import * as L from 'leaflet';

declare module 'leaflet' {
  namespace Control {
    class Window extends Control {
      constructor(container: L.Map, options?: WindowOptions);
      container: L.Map;
      options: any;
      show() : void;
    }

    interface WindowOptions {
      element?: string;
      className?: string;
      visible?: boolean;
      title?: string;
      closeButton?: boolean;
      content?: HTMLElement | HTMLDivElement | string;
      prompt?: any;
      maxWidth?: number;
      modal?: boolean;
      position?: string;
    }
  }

  namespace control {
    function window(container: L.Map, options?: Control.WindowOptions): Control.Window;
  }


}
