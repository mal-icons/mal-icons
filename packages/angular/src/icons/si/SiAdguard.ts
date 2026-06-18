import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-adguard",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiAdguard {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 0C8.25 0 3.730.86 0 2.76 0 6.85-0.05 17.04 12 24 24.05 17.04 24 6.85 24 2.76 20.270.86 15.75 0 12 0zm-0.11 15.43L6.86 9.61c0.33-0.24 1.75-1.14 2.790.04l2.19 2.59c0.010 5.8-5.95 5.82-5.940.25-0.220.69-0.5 1.2-0.1l-6.96 9.23z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiAdguard;
