import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bx-alarm-exclamation",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxAlarmExclamation {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 22c4.88 0 9-4.12 9-9s-4.12-9-9-9-9 4.12-9 9 4.12 9 9 9zm0-16c3.79 0 7 3.21 7 7s-3.21 7-7 7-7-3.21-7-7 3.21-7 7-7zm5.28-2.29 1.41-1.42 3.01 3-1.41 1.42zM5.28 2.29 6.7 3.71l-2.99 3-1.42-1.41z"}],["path",{"d":"M11 9h2v5h-2zm0 6h2v2h-2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxAlarmExclamation;
