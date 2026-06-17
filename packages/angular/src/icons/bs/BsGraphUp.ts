import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-graph-up",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsGraphUp {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","d":"M0 0h1v15h15v1H0zm14.82 3.11a0.50.5 0 0 1 0.070.7l-4.5 5.5a0.50.5 0 0 1-0.740.04L7.06 6.77l-3.66 5.03a0.50.5 0 0 1-0.81-0.59l4-5.5a0.50.5 0 0 1 0.76-0.06l2.61 2.61 4.15-5.07a0.50.5 0 0 1 0.7-0.07"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsGraphUp;
