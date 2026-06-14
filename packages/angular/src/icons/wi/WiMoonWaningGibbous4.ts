import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-wi-moon-waning-gibbous-4",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class WiMoonWaningGibbous4 {
  readonly viewBox = "0 0 30 30";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3.74,14.47c0,1.52,0.3,2.98,0.89,4.37s1.39,2.58,2.4,3.59s2.2,1.8,3.59,2.4s2.84,0.89,4.37,0.89 c2.89-2.39,4.34-6.14,4.34-11.24c0-2.34-0.41-4.47-1.22-6.36s-1.85-3.52-3.11-4.87c-2.03,0-3.91,0.5-5.64,1.51S6.25,7.12,5.24,8.84 S3.74,12.44,3.74,14.47z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default WiMoonWaningGibbous4;
