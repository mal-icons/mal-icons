import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-semaphoreci",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiSemaphoreci {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m21.5 13.25-4.16-4.23a3.04 3.04 0 0 0-4.36 0L9.69 12.37a1.21 1.21 0 0 1-1.72 0l-1.63-1.66 4.16-4.23a6.53 6.53 0 0 1 9.34 0L24 10.72zM8.83 19.48a6.53 6.53 0 0 1-4.67-1.97L0 13.3l2.49-2.53 4.16 4.22a3.06 3.06 0 0 0 4.36 0l3.29-3.35a1.21 1.21 0 0 1 1.72 0l1.63 1.66-4.15 4.23a6.52 6.52 0 0 1-4.67 1.96z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiSemaphoreci;
