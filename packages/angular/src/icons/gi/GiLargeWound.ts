import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-large-wound",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiLargeWound {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M128.65 17.01c109 34.56 192.31 71.06 219.7 149.16-58.57-74.49-153.47-123.28-298.84-144.98 117.47 34.1 183.44 69.43 217.81 144.53C210.64 99.86 124.57 59.07 12.51 66.82 224.77 98.88 309.19 333.65 246.66 504.29c34.37-49.03 53.52-92.46 64.92-135.97 6.43 48.94 6.58 95.27-10.29 140.57 31.85-58.36 64.56-150.97 53.53-239.74 34.39 87.13 34.71 152.25-1.87 223.52 67.04-82.26 78.11-105.02 87.19-174.66 13.48 29.99 16.32 58.1 9.6 96.12 95.74-140.37 26.28-275.75-80.07-326.42 59.78 43.85 92.91 121.17 90.96 217.25-31.8-165.58-108.18-265.18-331.97-287.96zm-106.18 107.1c72.06 35.31 129.12 88.09 164.69 147.62-29.83-37.26-75.78-70.61-138.41-98.88 112.75 90.5 170.86 215.24 153.01 321.96 87.7-207.51 3.01-348.1-179.29-370.7zm193.83 32.91c64.25 34.72 95.31 113.94 72.34 195.58 2.31-71.5-33.98-148.48-72.34-195.58z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiLargeWound;
