import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-infinity",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiInfinity {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M278.54 276.13c12.31 21.92 26.6 38.42 42.85 49.5 16.5 10.84 35.09 16.26 55.78 16.26 24.87 0 45.19-8.25 60.96-24.75 15.76-16.75 23.64-38.05 23.64-63.91 0-24.87-7.26-45.56-21.79-62.06-14.53-16.5-32.76-24.75-54.68-24.75-19.95 0-38.05 8.25-54.31 24.75-16.01 16.26-33.49 44.58-52.46 84.97m-45.07-39.53c-12.07-21.67-26.35-37.93-42.85-48.76-16.25-10.83-34.85-16.25-55.78-16.25-24.87 0-45.19 8.25-60.95 24.75C58.11 212.59 50.23 233.65 50.23 259.51c0 24.88 7.27 45.56 21.8 62.06 14.53 16.5 32.76 24.75 54.68 24.75 19.95 0 37.93-8.13 53.94-24.38 16.25-16.25 33.86-44.7 52.83-85.34m26.23 67.61c-17.49 33.49-35.83 58-55.04 73.52C185.69 393.24 164.51 401 141.11 401c-33.25 0-61.45-13.79-84.6-41.38-22.9-27.58-34.36-61.69-34.36-102.33 0-43.1 10.22-77.95 30.66-104.55 20.69-26.6 47.53-39.9 80.54-39.9 23.4 0 44.33 7.64 62.8 22.91 18.47 15.02 36.94 39.9 55.41 74.62 16.75-33.99 34.85-58.98 54.31-74.99C325.33 119.13 347 111 370.89 111c32.75 0 60.71 13.92 83.86 41.75 23.4 27.83 35.09 62.19 35.09 103.07 0 42.85-10.34 77.58-31.03 104.18-20.44 26.35-47.16 39.53-80.17 39.53-23.4 0-44.21-7.14-62.43-21.43-17.98-14.53-36.82-39.16-56.52-73.89z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiInfinity;
