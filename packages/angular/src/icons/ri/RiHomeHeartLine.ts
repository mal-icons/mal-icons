import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-home-heart-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiHomeHeartLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M20 20C20 20.55 19.55 21 19 21H5C4.45 21 4 20.55 4 20V11H1L11.33 1.61C11.71 1.26 12.29 1.26 12.67 1.61L23 11H20V20ZM18 19V9.16L12 3.7L6 9.16V19H18ZM12 17L8.64 13.64C7.76 12.76 7.76 11.34 8.64 10.46C9.52 9.58 10.94 9.58 11.82 10.46L12 10.64L12.18 10.46C13.06 9.58 14.48 9.58 15.36 10.46C16.24 11.34 16.24 12.76 15.36 13.64L12 17Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiHomeHeartLine;
