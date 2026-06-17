import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-swirl-string",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiSwirlString {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M17.49 22.18V127.3c78.74 126.92 174.79 219.19 252.88 237.11-7.14 1.67-14.68 2.53-22.78 2.34-67.67-1.59-153.3-68.9-230.1-171.7v70.08c76.9 77.2 159.02 128.7 227.77 137.25-8.21 2.32-16.91 4.15-26.28 4.67-58.78 3.28-130.57-30.5-201.48-88.77v46.14C182.62 479.16 356.19 508.12 441.49 422.82c69.39-69.39 71.76-265.95-29.79-330.55-16.73-10.64-35.31-18.69-56.65-18.69-53.35 0-96.95 43.01-96.95 96.36s43.6 96.95 96.95 96.95c45.01 0 83.97-31.81 80.23-72.42-5.44-59.03-88.17-44.01-98.33 7.59-0.47 2.36-0.83 4.68-1.17 7.01-4.27-11.26-5.69-23.12-2.34-35.62 8.5-31.71 41.3-51.13 73-42.63 11.89 3.19 21.69 10.04 29.2 18.69 11.05 12.73 14.59 29.67 14.02 47.3-1.93 59.77-24.98 108.15-87.02 119.14C210.91 342.81 88.24 190.12 17.49 22.18z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiSwirlString;
