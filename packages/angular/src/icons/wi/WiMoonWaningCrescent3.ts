import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-wi-moon-waning-crescent-3",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class WiMoonWaningCrescent3 {
  readonly viewBox = "0 0 30 30";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3.74,14.44c0,2.04,0.5,3.93,1.51,5.65s2.37,3.1,4.09,4.1s3.61,1.51,5.65,1.51c-2.99-2.33-4.48-6.09-4.48-11.26 c0-2.32,0.42-4.46,1.25-6.4s1.91-3.56,3.23-4.85c-2.04,0-3.92,0.5-5.65,1.51S6.26,7.07,5.25,8.8S3.74,12.4,3.74,14.44z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default WiMoonWaningCrescent3;
