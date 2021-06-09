import type LOAD_STATUS from './utils/loadStatus';
export interface ImageObject {
  url: string;
  originUrl: string;
  style?: any;
}

export type Images = Array<Partial<ImageObject> & { loaded?: LOAD_STATUS }>;

export default interface PropsType {
  images: ReadonlyArray<ImageObject | string>;
  visible: boolean;
  activeIndex?: number;
  showPagination?: boolean;
  maxScale?: number;
  minScale?: number;
  onChange?: Function;
  onClose?: Function;
}
