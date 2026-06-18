import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-typo3",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiTypo3 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M18.08 16.54c-0.360.11-0.640.14-1.010.14-3.05 0-7.52-10.65-7.52-14.2 0-1.30.31-1.740.75-2.11C6.560.81 2.08 2.180.65 3.92c-0.310.44-0.5 1.12-0.5 1.99C0.15 11.44 6.06 24 10.23 24c1.93 0 5.18-3.17 7.85-7.46M16.13 0c3.86 0 7.710.62 7.71 2.8 0 4.42-2.8 9.77-4.23 9.77-2.55 0-5.72-7.09-5.72-10.63C13.90.31 14.52 0 16.13 0"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiTypo3;
