import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-graph-down",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsGraphDown {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","d":"M0 0h1v15h15v1H0zm14.82 11.89a0.50.5 0 0 0 0.07-0.7l-4.5-5.5a0.50.5 0 0 0-0.74-0.04L7.06 8.23 3.4 3.21a0.50.5 0 0 0-0.810.59l4 5.5a0.50.5 0 0 0 0.760.06l2.61-2.61 4.15 5.07a0.50.5 0 0 0 0.70.07"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsGraphDown;
