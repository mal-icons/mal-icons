import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-lantern",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiLantern {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M257.25 23.38c-41.54 0-75.44 33.9-75.44 75.44 0 17.04 5.71 32.79 15.31 45.44-34.43 29.59-75.09 52.47-118.09 72.84H435.44c-44.28-20.26-85.17-43.21-118.78-71.94 10.02-12.8 16-28.89 16-46.34 0-41.54-33.86-75.44-75.41-75.44zm0 18.72c31.44 0 56.72 25.28 56.72 56.72 0 12.71-4.13 24.41-11.13 33.84-18.04-17.45-33.48-36.94-45.59-59.09-13.02 21.97-28.66 41.1-46.28 58.13-6.58-9.26-10.47-20.59-10.47-32.87 0-31.44 25.31-56.72 56.75-56.72zm-104.03 193.53v203.81h208.03V235.63H153.22zm103.5 18c0.95-0.01 1.920.01 2.870.03 13.890.35 27.9 4.05 40.75 11.47 41.12 23.74 55.27 76.6 31.53 117.72-23.74 41.11-76.57 55.27-117.69 31.53-41.11-23.74-55.27-76.57-31.53-117.69 15.81-27.38 44.49-42.82 74.06-43.06zm9.31 19.19v36.72h51.63c-5.71-11.41-14.74-21.33-26.66-28.22-7.95-4.59-16.43-7.37-24.97-8.5zm-18.690.16c-19.64 2.91-37.79 14.46-48.53 33.06-0.67 1.16-1.28 2.33-1.88 3.5h50.41v-36.56zm-56.62 55.25c-1.64 9.37-1.24 18.9 1.03 27.94h55.59V328.22H190.72zm75.31 0v27.94h56.69c2.34-9.27 2.68-18.78 1.09-27.94h-57.78zm-66.47 46.62c5.7 9.36 13.78 17.46 23.97 23.34 7.59 4.38 15.66 7.12 23.81 8.34v-31.69h-47.78zm66.47 0v31.84c19.59-2.56 37.8-13.69 48.85-31.84H266.03zm-144.5 83.28v38.56H392.94v-38.56H121.53z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiLantern;
