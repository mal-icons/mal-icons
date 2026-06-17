import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-sun-radiations",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiSunRadiations {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M168.24 12.09l-94.40c10.9 8.36 17.93 21.51 17.93 36.3 0 25.26-20.48 45.74-45.74 45.74-15.07 0-28.43-7.29-36.76-18.53v98.76l5.29 41.3 17.31-100.47 26.73 82.07 2.24-67.27 35.84 31.01-12.25-54.86 54.09 28.14-36.76-46.57 53.04-2.56-45.45-22.89 56.27-12.49-47.96-8.15 50.61-29.52zm33.6 6.31l-33.94 17.93 102.02-5.32-105.44 36.53 107.22 23.17-111.36 10.64 109.59 46.11-108.75-14.19 94.57 75.66-90.78-42.2 46.46 75.3-92.21-85.59 56.15 134.65-72.7-94.57 13 108.76-42.09-93.04L60.09 338.36l-26.01-136.06-15.73 47.63v106.68L38.22 309.99 58.91 464.26 82.55 289.3l86.3 203.33-24.82-201.55L258.69 437.66l-70.93-172 170.22 127.67L220.86 212.47l189.14 75.66L266.96 175.82l198.6 25.41-184.41-77.43 209.24-29.55-206.28-28.37 113.75-47.48h-196.02z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiSunRadiations;
