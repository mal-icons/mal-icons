import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-airbrake",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiAirbrake {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M15.820.58 24 23.42h-6.07L10.680.58Zm-6.46 0 1.87 5.93-2.45 7.75c1.040.18 2.090.28 3.140.290.58 0 1.18-0.05 1.82-0.1l1.15 3.91a28.7 28.7 0 0 1-2.950.17 26.57 26.57 0 0 1-4.32-0.36L5.88 23.42H0L8.180.58Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiAirbrake;
