import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-alarm-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtAlarmOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M10.04 6.29C10.66 6.11 11.32 6 12 6c3.86 0 7 3.14 7 7 0 0.68-0.11 1.34-0.29 1.96l1.56 1.56c0.47-1.080.73-2.270.73-3.52A9 9 0 0 0 8.47 4.72l1.57 1.57zm7.3-4.48 4.61 3.85-1.28 1.54-4.61-3.84zm1.9 16.51-1.43-1.43-9.7-9.7-1.43-1.43-0.74-0.74L4.52 3.6l-1.5-1.5-1.41 1.41 1.37 1.37-0.920.77 1.28 1.54 1.06-0.880.80.8A8.96 8.96 0 0 0 3 13a9 9 0 0 0 9 9c2.25 0 4.31-0.83 5.89-2.2l2.1 2.1 1.41-1.41-2.16-2.17zM12 20c-3.86 0-7-3.14-7-7 0-1.70.61-3.26 1.62-4.47l9.85 9.85A6.96 6.96 0 0 1 12 20zM7.48 3.73l0.46-0.38-1.28-1.54-0.60.5z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtAlarmOff;
