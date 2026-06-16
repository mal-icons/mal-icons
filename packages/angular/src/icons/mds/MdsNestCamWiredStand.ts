import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mds-nest-cam-wired-stand",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdsNestCamWiredStand {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m18 0.85-6.020.55C8.95 1.7 6.37 4 6.04 7.03a6.36 6.36 0 0 0 5.68 7.04l1.90.19-0.560.85c-0.88-0.19-1.83-0.18-2.850.25-2 0.85-3.21 2.89-3.21 5.05V23h10v-3c0-1.67-0.83-3.15-2.09-4.06l0.97-1.45 2.120.23V0.85z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdsNestCamWiredStand;
