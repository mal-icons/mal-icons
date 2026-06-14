import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-wi-moon-waning-crescent-2",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class WiMoonWaningCrescent2 {
  readonly viewBox = "0 0 30 30";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3.74,14.44c0,2.04,0.5,3.93,1.51,5.65s2.37,3.1,4.1,4.1s3.61,1.51,5.65,1.51c-2.01-2.74-3.02-6.5-3.02-11.26 c0-3.98,1.01-7.73,3.02-11.25c-2.04,0-3.93,0.5-5.65,1.51s-3.1,2.37-4.1,4.09S3.74,12.4,3.74,14.44z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default WiMoonWaningCrescent2;
