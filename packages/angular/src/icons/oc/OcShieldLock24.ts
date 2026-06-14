import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-shield-lock-24",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcShieldLock24 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M11.46 1.14a1.75 1.75 0 0 1 1.08 0l8.25 2.68A1.75 1.75 0 0 1 22 5.48V10.5c0 6.19-3.77 10.71-9.4 12.83a1.7 1.7 0 0 1-1.2 0C5.77 21.2 2 16.69 2 10.5V5.48c0-0.760.49-1.43 1.21-1.66Zm0.62 1.43a0.250.25 0 0 0-0.15 0L3.67 5.24a0.250.25 0 0 0-0.170.24V10.5c0 5.46 3.28 9.48 8.43 11.43a0.20.2 0 0 0 0.14 0c5.15-1.94 8.43-5.96 8.43-11.43V5.48a0.250.25 0 0 0-0.17-0.24ZM13 12.23V15a1 1 0 0 1-2 0v-2.77a2 2 0 1 1 2 0Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcShieldLock24;
