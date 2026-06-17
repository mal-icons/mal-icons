import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-lipstick",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiLipstick {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M402.8 39.7c-5.81-0.03-11.170.44-15.85 1.35-12.48 2.44-18.74 7.54-20.04 12.3-1.3 4.76 1.48 12.34 10.98 20.79 9.5 8.46 24.73 16.63 42.74 21.56 18.02 4.93 35.28 5.65 47.77 3.21 12.48-2.44 18.74-7.54 20.04-12.3 1.3-4.76-1.48-12.34-10.98-20.79-9.5-8.45-24.73-16.63-42.74-21.56-11.26-3.08-22.22-4.52-31.91-4.57zM350.74 67.09l-92.53 92.53c1.03 3.12 3.39 8.75 8.33 15.77 6.3 8.95 15.22 19.27 24.81 28.87 9.6 9.6 19.92 18.51 28.87 24.81 7.02 4.94 12.66 7.3 15.77 8.33L455.1 118.29c-12.160.24-25.51-1.47-39.22-5.22-20.34-5.57-37.73-14.6-49.95-25.47-6.81-6.06-12.31-13.05-15.19-20.51zm-111.52 88.89l-64.96 64.96c7.62 19.82 22.47 41.44 40.73 59.69a210.71 210.71 0 0 0 17.17 15.36l63.38-63.38a285.51 285.51 0 0 1-16.91-15.62c-10.2-10.2-19.67-21.1-26.8-31.24-7.14-10.14-12.6-18.71-12.6-28.87zm-83.47 66.5L23.26 354.97c4.78 23.24 21.87 50.63 44.37 72.97 9.46 9.39 19.82 17.82 30.37 24.83l134.15-134.15c-10.48-7.36-20.55-15.93-29.89-25.27-21.13-21.13-38.36-46.04-46.51-70.87zm154.08 21.29l-62.95 62.95c9.31 6.14 18.74 11.15 27.8 14.63l64.96-64.96h-0.9c-10.16 0-18.73-5.46-28.87-12.6-0.01-0.01-0.02-0.02-0.03-0.02zm-62.08 84.71L113.99 462.23c9.19 4.74 18.25 8.21 26.7 10.07l132.44-132.44c-8.5-2.79-17.01-6.67-25.38-11.39z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiLipstick;
