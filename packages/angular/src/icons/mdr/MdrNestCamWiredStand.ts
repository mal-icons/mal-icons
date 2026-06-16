import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-nest-cam-wired-stand",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrNestCamWiredStand {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m15.83 1.01-4.110.42C8.47 1.75 6 4.48 6 7.75s2.47 6 5.72 6.33l1.90.19-0.560.85c-0.35-0.08-0.7-0.12-1.06-0.12-2.76 0-5 2.24-5 5v2c0 0.550.45 1 1 1h8c0.55 0 1-0.45 1-1v-2c0-1.67-0.83-3.15-2.09-4.06l0.97-1.45c1.140.07 2.12-0.83 2.12-1.99V3c0-1.17-1-2.09-2.17-1.99z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrNestCamWiredStand;
