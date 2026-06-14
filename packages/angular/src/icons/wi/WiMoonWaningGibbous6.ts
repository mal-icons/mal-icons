import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-wi-moon-waning-gibbous-6",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class WiMoonWaningGibbous6 {
  readonly viewBox = "0 0 30 30";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3.74,14.46c0,2.04,0.5,3.92,1.51,5.65s2.37,3.09,4.09,4.09s3.61,1.51,5.65,1.51c1.44-3.08,2.15-6.83,2.15-11.25 c0-3.46-0.72-7.2-2.15-11.24c-1.52,0-2.98,0.3-4.37,0.89S8.03,5.5,7.03,6.5s-1.8,2.2-2.4,3.59S3.74,12.93,3.74,14.46z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default WiMoonWaningGibbous6;
