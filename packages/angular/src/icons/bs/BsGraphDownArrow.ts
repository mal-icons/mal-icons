import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-graph-down-arrow",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsGraphDownArrow {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","d":"M0 0h1v15h15v1H0zm10 11.5a0.50.5 0 0 0 0.50.5h4a0.50.5 0 0 0 0.5-0.5v-4a0.50.5 0 0 0-1 0v2.6l-3.61-4.42a0.50.5 0 0 0-0.74-0.04L7.06 8.23 3.4 3.21a0.50.5 0 0 0-0.810.59l4 5.5a0.50.5 0 0 0 0.760.06l2.61-2.61L13.45 11H10.5a0.50.5 0 0 0-0.50.5"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsGraphDownArrow;
