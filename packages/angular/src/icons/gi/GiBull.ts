import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-bull",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiBull {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M68.6 28.18c-86.77 50.67-51.03 136.88 123.35 136.88l2.84-70.43c-71.07 14-169.1 15.57-126.18-66.45zm378.46 0c42.92 82.02-55.11 80.45-126.18 66.45l2.84 70.43c174.38 0 210.12-86.21 123.35-136.88zM174.21 220.77c-3.80.1-7.760.79-11.82 2.09-1.89 29.82 11.63 50.31 48.52 39.88-0.46-26.26-16.19-42.53-36.7-41.97zm167.21 0c-20.51-0.56-36.24 15.71-36.7 41.97 36.89 10.43 50.4-10.06 48.52-39.88-4.06-1.3-8.02-1.98-11.82-2.09zm-53.12 162.7l-10.79 15.27c15.54 10.98 19.19 32.2 8.21 47.73C274.74 462 253.53 465.64 238 454.66c-15.53-10.98-19.19-32.19-8.21-47.73 2.03-2.87 4.48-5.42 7.29-7.54l-11.26-14.89c-4.34 3.28-8.15 7.2-11.29 11.65-16.8 23.78-11.1 56.98 12.69 73.79 23.78 16.81 56.96 11.1 73.76-12.69 16.81-23.78 11.11-56.97-12.67-73.77z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiBull;
