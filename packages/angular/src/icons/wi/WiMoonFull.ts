import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-wi-moon-full",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class WiMoonFull {
  readonly viewBox = "0 0 30 30";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3.74,14.44c0,2.04,0.5,3.93,1.51,5.65s2.37,3.1,4.1,4.1s3.61,1.51,5.65,1.51s3.92-0.5,5.65-1.51s3.09-2.37,4.09-4.1 s1.51-3.61,1.51-5.65s-0.5-3.92-1.51-5.65s-2.37-3.09-4.09-4.09s-3.61-1.51-5.65-1.51S11.08,3.7,9.35,4.7s-3.1,2.37-4.1,4.09 S3.74,12.4,3.74,14.44z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default WiMoonFull;
