import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mds-policy",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdsPolicy {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m21 5-9-4-9 4v6c0 5.55 3.84 10.74 9 12 2.3-0.56 4.33-1.9 5.88-3.71l-3.12-3.12a4.99 4.99 0 0 1-6.29-0.64 5 5 0 0 1 0-7.07 5 5 0 0 1 7.07 0 5.01 5.01 0 0 1 0.64 6.29l2.9 2.9C20.29 15.69 21 13.38 21 11V5z"}],["circle",{"cx":"12","cy":"12","r":"3"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdsPolicy;
