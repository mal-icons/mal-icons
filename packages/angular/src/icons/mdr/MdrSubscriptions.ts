import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-subscriptions",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrSubscriptions {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M19 8H5c-0.55 0-1-0.45-1-1s0.45-1 1-1h14c0.55 0 1 0.45 1 1s-0.45 1-1 1zm-2-6H7c-0.55 0-1 0.45-1 1s0.45 1 1 1h10c0.55 0 1-0.45 1-1s-0.45-1-1-1zm5 10v8c0 1.1-0.9 2-2 2H4c-1.1 0-2-0.9-2-2v-8c0-1.10.9-2 2-2h16c1.1 0 2 0.9 2 2zm-6.81 3.56L10 12.73v6.53l5.19-2.82a0.50.5 0 0 0 0-0.88z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrSubscriptions;
