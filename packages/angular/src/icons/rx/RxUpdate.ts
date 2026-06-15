import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-rx-update",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RxUpdate {
  readonly viewBox = "0 0 15 15";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M1.9 7.3C1.9 10.34 4.11 12.41 6.59 12.84C6.87 12.89 7.06 13.16 7.01 13.45C6.96 13.73 6.69 13.92 6.41 13.87C3.5 13.37 0.86 10.91 0.86 7.3C0.86 5.76 1.56 4.55 2.38 3.63C2.96 2.98 3.63 2.44 4.17 2.03L2.53 2.03C2.26 2.03 2.03 1.81 2.03 1.53C2.03 1.26 2.26 1.03 2.53 1.03L5.53 1.03C5.81 1.03 6.03 1.26 6.03 1.53L6.03 4.53C6.03 4.81 5.81 5.03 5.53 5.03C5.26 5.03 5.03 4.81 5.03 4.53L5.03 2.69L5.03 2.69L5.03 2.69L5.03 2.69L5.03 2.69C4.46 3.12 3.76 3.65 3.16 4.33C2.44 5.13 1.9 6.1 1.9 7.3ZM13.01 7.7C13.01 4.69 10.85 2.63 8.4 2.17C8.12 2.12 7.93 1.84 7.99 1.56C8.04 1.28 8.31 1.09 8.6 1.15C11.47 1.69 14.05 4.13 14.05 7.7C14.05 9.24 13.35 10.45 12.54 11.37C11.95 12.02 11.28 12.56 10.75 12.97L12.38 12.97C12.66 12.97 12.88 13.19 12.88 13.47C12.88 13.74 12.66 13.97 12.38 13.97L9.38 13.97C9.11 13.97 8.88 13.74 8.88 13.47L8.88 10.47C8.88 10.19 9.11 9.97 9.38 9.97C9.66 9.97 9.88 10.19 9.88 10.47L9.88 12.31L9.88 12.31C10.46 11.88 11.15 11.35 11.76 10.67C12.47 9.87 13.01 8.9 13.01 7.7Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RxUpdate;
