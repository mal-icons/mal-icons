import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdf-timer-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdfTimerOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M9 1h6v2H9zm4 7v2.17l6.98 6.98a8.96 8.96 0 0 0-0.95-9.76l1.42-1.42c-0.43-0.51-0.9-0.99-1.41-1.41l-1.42 1.42a8.96 8.96 0 0 0-9.77-0.96L10.83 8H13zM2.81 2.81 1.39 4.22l3.4 3.4a8.99 8.99 0 0 0 12.59 12.59l2.4 2.4 1.41-1.41L2.81 2.81z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdfTimerOff;
