import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-spiral-shell",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiSpiralShell {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M485.1 39.05c-7.140.38-49.73 5.77-52.11 23.04-9.77-2.65-19.68-1.8-26.85 3.12-5.39 3.69-8.37 9.1-9.01 15.17-11.38-2.67-22.25-1.52-29.87 4.1-6.4 4.72-9.48 11.84-9.45 19.93-4.61-1.09-9.15-1.7-13.51-1.78-0.58-0.01-1.16-0.01-1.740-8.640.13-16.51 2.36-22.69 6.92-6.81 5.02-10.64 12.19-11.67 20.42-22.61-6.66-44.65-5.2-59.69 5.89-12.26 9.04-17.78 22.95-17.02 38.65-46.31-12-87.77-0.73-90.41 55.25-4.32 91.37-104.76 126.18-107.83 254.66 71.16-106.47 255.07-279.77 239.6-137.21-8.06 74.25-92.8 24.71-211.91 115.45 108.46-74.82 224.28-15.26 232.49-121.47 19.97 10.96 29.23 6.27 46.23-6.27 24.39-17.99 27.18-41.51 16.99-65.13 6.98-1.56 13.35-4.3 18.79-8.32 16.94-12.5 21.04-34.27 13.43-57.28 7.5-0.54 14.31-2.75 19.79-6.79 11.34-8.37 14.46-22.68 10.04-37.99 7.160.03 13.69-1.72 18.77-5.47 9.79-7.22 11.82-20.05 6.82-33.39 4.47-0.53 8.62-1.95 12.12-4.35 8.63-5.91 11.1-16.2 7.62-26.59 17.76-3.35 20.07-43.59 21.08-50.58z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiSpiralShell;
