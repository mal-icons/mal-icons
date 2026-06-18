import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bx-pointer",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxPointer {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M20.98 13.21a1 1 0 0 0-0.4-1.02l-14-10a11 0 0 0-1.570.93l2 17a1 1 0 0 0 1.770.52l3.61-4.42 3.38 5.46 1.7-1.05-3.36-5.43 6.09-1.22a11 0 0 0 0.78-0.77zm-8.670.31a1 1 0 0 0-0.580.35l-3.01 3.68L7.26 5.13l10.28 7.35-5.24 1.05z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxPointer;
