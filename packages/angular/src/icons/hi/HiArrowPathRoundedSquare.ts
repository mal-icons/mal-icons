import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-hi-arrow-path-rounded-square",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class HiArrowPathRoundedSquare {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"stroke-linecap":"round","stroke-linejoin":"round","d":"M19.5 12c0-1.23-0.05-2.45-0.14-3.66a4.01 4.01 0 0 0-3.7-3.7 48.68 48.68 0 0 0-7.32 0 4.01 4.01 0 0 0-3.7 3.7c-0.020.22-0.030.44-0.050.66M19.5 12l3-3m-3 3-3-3m-12 3c0 1.230.05 2.450.14 3.66a4.01 4.01 0 0 0 3.7 3.7 48.66 48.66 0 0 0 7.32 0 4.01 4.01 0 0 0 3.7-3.7c0.02-0.220.03-0.440.05-0.66M4.5 12l3 3m-3-3-3 3"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":1.5};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default HiArrowPathRoundedSquare;
