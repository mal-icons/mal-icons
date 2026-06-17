import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-minerals",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiMinerals {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M263.4 491.14l-21.3-131.13-13.12 127.85-44.26-24.59 49.02-168.95 41.12 67.33 19.67 91.79-31.13 37.7zm-153.69-3.88l-7.82-27.85-27.78-9.02 27.84-7.83 9.02-27.78 7.83 27.85 27.78 9.03-27.84 7.82-9.03 27.79zm60.94-55.48l-28.97-2.24-64.16-105.39-4.15-82.91 78.46 30.34 51.1 67.97-16.4 62.95-63.1-83.05 47.22 112.33zm145.66-28.76l-17.02-2.13-8.51-43.62-14.28-26.77 91.79-91.79 31.15 9.82-13.11 73.76-70.02 80.73zm18.35-41.89l27.27-32.52 9.98-40.92-25.18 32.52-12.07 40.92zM209.74 322.73l-38.53-51.62 22.13-109.02 77.05-95.05 63.11 85.23-6.55 105.74-59.01 60.64-37.7-57.37-20.49 61.47zm47.32-47.25l27.18-94.6 24.74-22.86-28.03 3.85-11.13-43.28-6.56 43.28-45.34 5.52 45.11 16.17-5.96 91.92zm-97.25-19.73l-27.88-44.27 9.84-93.41 31.14 62.29-13.11 75.4zm232.26-22.46l-9.87-35.17-35.08-11.39 35.15-9.89 11.39-35.08 9.89 35.16 35.08 11.4-35.15 9.87-11.41 35.1zm-213.9-97.94l-12.34-43.99-43.88-14.25 43.98-12.36 14.25-43.88L192.54 64.84l43.87 14.26-43.97 12.35-14.27 43.89z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiMinerals;
