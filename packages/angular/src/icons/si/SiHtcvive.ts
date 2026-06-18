import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-htcvive",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiHtcvive {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M16.23 19.05a14.3 14.3 0 0 1-4.220.64 14.3 14.3 0 0 1-4.22-0.64c-1.56-0.5-2.52-2.07-2.2-3.670.6-2.94 2.11-5.51 4.27-7.48a3.19 3.19 0 0 1 4.36 0c2.11 1.93 3.63 4.54 4.27 7.480.28 1.61-0.64 3.21-2.25 3.67m7.57-1.47L14.89 2.2a1.49 1.49 0 0 0-1.33-0.78h-3.08a1.49 1.49 0 0 0-1.330.78L0.21 17.58c-0.280.51-0.28 1.1 0 1.56l1.56 2.66c0.280.50.780.78 1.330.78h17.76c0.55 0 1.06-0.28 1.33-0.78l1.56-2.66c0.32-0.50.32-1.10.05-1.56"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiHtcvive;
