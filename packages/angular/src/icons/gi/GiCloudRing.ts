import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-cloud-ring",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiCloudRing {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M245.22 31.39c-70.060.15-134.33 31.79-168.1 90.28-5.22 9.05-8.83 18.42-12.24 28C122.16 71 219.37 40.6 292.07 82.57c78.82 45.51 98.66 158.25 44.41 252.22-25.85 44.78-63.86 77.03-105.15 93.72 95.38 29.26 195.7-0.31 240.96-78.7 54.03-93.57 8.9-220.77-100.05-283.68-40.86-23.59-84.98-34.84-127.01-34.75zm-24.76 49.95c-40.360.12-84.11 16.55-122.25 49.41C19.45 198.59-6.02 311.19 41.32 382.24c4.58 6.87 9.9 12.55 15.43 18.14C20.79 331.21 31.14 244.73 83.69 199.46c56.97-49.08 141.44-31.06 188.98 40.29 22.65 34 32.71 73.91 30.93 111.78 51.07-67.13 63.01-155.83 23.35-215.36h0C302.53 99.54 263.42 81.2 220.46 81.33zm-63.36 107.71c-26.760.08-53.23 9.95-73.05 29.65-48.85 48.55-47.85 142.19 1.14 205.94 49 63.75 128.32 76.07 177.17 27.52-47.11 29.65-84.88 26.3-128.78-20.92-39.45-42.43-24.43-122.8 24.62-171.55 23.38-23.23 51.13-35.81 77.68-37.7-21.48-22.03-50.3-33.03-78.78-32.95z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiCloudRing;
