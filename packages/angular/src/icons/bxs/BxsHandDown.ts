import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bxs-hand-down",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxsHandDown {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M16.28 2.23a1 1 0 0 0-0.64-0.23H5a2 2 0 0 0-2 2v7.21a2 2 0 0 0 1.78 1.99L12 14v6a2 2 0 0 0 4 0V8l3.03 1.21a2 2 0 0 0 2.64-1.23l0.11-0.34a11 0 0 0-0.31-1.08l-5.2-4.33z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxsHandDown;
