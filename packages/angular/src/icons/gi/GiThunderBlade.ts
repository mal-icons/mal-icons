import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-thunder-blade",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiThunderBlade {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M17.84 16.51v54.06l76.18 58.4 141.9-7.52 8.45 30.68-60.56 5.88 37.73 19.62-41.25 32.69 31.35-0.88c-24.94 26.55-49.46 53.39-74.57 78.94-15.74-23-28.3-47.16-35.85-71.05l-4.64-14.67-73.14 73.15 80.74 80.73c-25.17 32.58-54.14 58.56-84.51 83l-3.49 2.81v4.47c0 14.94 4.78 27.6 13.72 36.06 8.94 8.46 21.28 12.25 34.58 12.25h4.7l2.8-3.77c23.67-31.87 49.89-60.99 82.57-84.43l83.47 83.47 73.14-73.14-14.67-4.64c-25.65-8.11-50.25-21.62-73.74-38.29 29.32-28.95 59.59-57.01 88.91-85.31l8.35 48.87 86.04 9.65 42.14 148.15h45.53v-58.33l-51.24-117.03-99.22-1.42-13.78-47.28C401.04 201.05 464.2 127.47 489.44 33.27l3.15-11.76h-13.41l-1.190.32C405.27 41.31 346.29 80.95 293.18 128.38l0.35-33.56L260.61 138.9l-11.1-42.06-124.79-10.03-42.85-70.29H17.84zm448.64 28.23c-25.66 78.61-80.4 143.39-143.71 206.69l-12.17-57.89-29.59 21.76-10.73-39.04c57.49-56.98 118.99-106.68 196.2-131.52zm-211.38 146.8l15.09 54.9 28.1-20.65 8.67 41.26c-34.22 33.46-70.35 66.78-105.38 101.82l-7.6 7.6 8.58 6.47c23.2 17.5 47.9 32.25 74.08 42.42l-38.6 38.6-81.32-81.32-6.39 4.32c-36.53 24.72-65 55.87-90.14 89.17-7.6-0.68-13.42-3.04-17.43-6.83-4.11-3.89-6.86-9.7-7.57-18.36 31.54-25.61 62.36-53.57 88.95-89.65l4.77-6.47-79.02-79.02 38.59-38.6c9.49 24.59 23.17 48.77 39.83 71.45l6.44 8.78 7.7-7.7c38.51-38.51 74.93-79.61 112.67-118.19z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiThunderBlade;
