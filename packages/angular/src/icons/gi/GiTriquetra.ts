import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-triquetra",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiTriquetra {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M256 74.06c32.76 39.37 52.46 90 52.46 145.29 0 21.33-2.94 41.97-8.42 61.53-28.84-5.28-58.69-5.44-88.1-0.09-5.47-19.54-8.4-40.15-8.4-61.44 0-55.29 19.7-105.92 52.46-145.29zm-0.58 220.69c13.13-0.03 26.2 1.1 39.06 3.31-9.02 24.45-22.12 46.92-38.47 66.58-16.36-19.67-29.47-42.14-38.49-66.61 12.6-2.17 25.28-3.26 37.9-3.28zM199.8 301.82c10.06 28.13 25.12 53.9 44.11 76.22-41.25 42.28-98.87 68.52-162.68 68.52-13.1 0-25.94-1.12-38.44-3.24 17.72-48.04 51.72-90.41 99.6-118.05 18.45-10.65 37.76-18.41 57.42-23.45zm112.390.03c57.21 14.6 108.71 51.36 140.6 106.59 6.55 11.34 11.99 23.01 16.4 34.89-12.49 2.12-25.32 3.24-38.41 3.24-63.81 0-121.43-26.24-162.68-68.52 18.98-22.32 34.04-48.08 44.1-76.2zm180.22 154.89l-5.44-17.16c-4.9-13.68-11.08-27.11-18.6-40.13-34.18-59.19-89.39-98.73-150.77-114.67 5.76-20.83 8.85-42.77 8.85-65.42 0-60.5-21.98-115.91-58.36-158.69L256 47.44l-12.09 13.22c-36.39 42.79-58.36 98.2-58.36 158.7 0 22.62 3.09 44.52 8.83 65.32-20.89 5.42-41.4 13.7-60.99 25.01-52.4 30.25-89.4 77-108.26 129.91l-5.42 17.17 17.5 3.84c14.29 2.6 29 3.96 44.04 3.96 68.39 0 130.27-28.07 174.77-73.3 44.5 45.23 106.38 73.3 174.77 73.3 15.04 0 29.76-1.36 44.06-3.96z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiTriquetra;
