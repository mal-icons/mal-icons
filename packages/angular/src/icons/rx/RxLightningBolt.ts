import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-rx-lightning-bolt",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RxLightningBolt {
  readonly viewBox = "0 0 15 15";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M8.7 0.04C8.91 0.13 9.03 0.35 8.99 0.58L8.09 6H12.5C12.69 6 12.86 6.11 12.95 6.28C13.03 6.45 13.01 6.65 12.9 6.8L6.9 14.8C6.76 14.98 6.52 15.05 6.3 14.96C6.09 14.87 5.97 14.65 6.01 14.42L6.91 9H2.5C2.31 9 2.14 8.89 2.05 8.72C1.97 8.55 1.99 8.35 2.1 8.2L8.1 0.2C8.24 0.02 8.48 -0.05 8.7 0.04ZM3.5 8H7.5C7.65 8 7.79 8.06 7.88 8.18C7.98 8.29 8.02 8.44 7.99 8.58L7.33 12.56L11.5 7H7.5C7.35 7 7.21 6.94 7.12 6.82C7.02 6.71 6.98 6.56 7.01 6.42L7.67 2.44L3.5 8Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RxLightningBolt;
