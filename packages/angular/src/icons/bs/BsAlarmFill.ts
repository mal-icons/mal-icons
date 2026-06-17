import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-alarm-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsAlarmFill {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M6 0.5a0.50.5 0 0 1 0.5-0.5h3a0.50.5 0 0 1 0 1H9v1.07a7 7 0 0 1 3.27 12.47l0.60.6a0.50.5 0 0 1-0.710.71l-0.75-0.75A6.97 6.97 0 0 1 8 16a6.97 6.97 0 0 1-3.42-0.89l-0.750.75a0.50.5 0 0 1-0.71-0.71l0.6-0.6A7 7 0 0 1 7 2.07V1h-0.5A0.50.5 0 0 1 6 0.5m2.5 5a0.50.5 0 0 0-1 0v3.36l-1.43 2.38a0.50.5 0 1 0 0.860.52l1.5-2.5A0.50.5 0 0 0 8.5 9zM0.86 5.39A2.5 2.5 0 1 1 4.39 1.86 8.04 8.04 0 0 0 0.86 5.39M11.61 1.86a2.5 2.5 0 1 1 3.53 3.53 8.04 8.04 0 0 0-3.53-3.53"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsAlarmFill;
