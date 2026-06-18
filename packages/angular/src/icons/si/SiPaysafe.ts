import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-paysafe",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiPaysafe {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m23.91 12.23-7.67 7.67a0.160.16 0 0 1-0.110.05h-0.05a0.160.16 0 0 1-0.16-0.16v-7.79a0.320.32 0 0 1-0.090.23L8.19 19.86a0.330.33 0 0 1-0.47 0L0.1 12.24a0.330.33 0 0 1 0-0.47L7.72 4.14a0.330.33 0 0 1 0.47 0l7.63 7.63c0.060.060.090.140.090.23V4.21c0-0.090.07-0.160.16-0.16h0.05c0.04 0 0.080.020.120.05l7.67 7.67a0.330.33 0 0 1 00.47z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiPaysafe;
