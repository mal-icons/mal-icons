import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-filter-drama",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrFilterDrama {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M19.35 10.04A7.49 7.49 0 0 0 12 4a7.48 7.48 0 0 0-6.64 4.04A6 6 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6.17c-2.09 0-3.95-1.53-4.15-3.61a4 4 0 0 1 7.89-1.22c0.10.480.50.830.980.830.61 0 1.11-0.550.99-1.15a5.99 5.99 0 0 0-4.29-4.63c1.1-1.46 2.89-2.37 4.89-2.2 2.880.25 5.01 2.82 5.01 5.71V12h1.37c1.45 0 2.790.97 3.07 2.40.39 1.91-1.08 3.6-2.93 3.6z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrFilterDrama;
