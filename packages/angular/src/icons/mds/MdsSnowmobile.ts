import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mds-snowmobile",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdsSnowmobile {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M22 17c0 0.55-0.45 1-1 1h-0.17l-2.2-2.2C21.6 15.18 23 13 23 13l-9-8h-3v2h2.25l1.45 1.3L11 11l-9.5-1L0 13l4.54 1.36-3.49 1.88C-0.77 17.22-0.07 20 2 20h6c2.21 0 4-1.79 4-4h4l2 2h-3v2h6c1.66 0 3-1.34 3-3h-2zM8 18H2l5.25-2.83L10 16a2 2 0 0 1-2 2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdsSnowmobile;
