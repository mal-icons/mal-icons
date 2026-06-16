import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-west",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrWest {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M339-221 101-459q-5-5-6.5-10T93-480q0-6 1.5-11t6.5-10l238-238q9-9 21-9t21 9q8 9 8.5 21t-8.5 21L194-510h656q13 0 21.5 8.5T880-480q0 13-8.5 21.5T850-450H194l187 187q9 9 9 21t-9 21q-9 9-21 9t-21-9Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrWest;
