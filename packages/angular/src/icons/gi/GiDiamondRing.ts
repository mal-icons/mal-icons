import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-diamond-ring",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiDiamondRing {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M191.02 25.35l-22.9 34.35h30.71l22.9-34.35H191.02zm52.35 0l-22.9 34.35h71.06l-22.9-34.35h-25.27zm46.9 0l22.9 34.35h30.71l-22.9-34.35h-30.71zm-117.23 52.35l50.12 50.12-25.06-50.11h-25.06zm45.18 0L256 153.26l37.78-75.57h-75.57zm95.7 0l-25.06 50.12 50.12-50.11H313.91zm-134.43 31.9C109.16 139.5 59.69 209.29 59.69 290.35c0 108.19 88.12 196.31 196.31 196.31 108.19 0 196.31-88.12 196.31-196.31 0-81.06-49.47-150.85-119.78-180.75l-30.52 30.52c64.4 19.59 111.04 79.29 111.04 150.24 0 86.97-70.08 157.04-157.04 157.04-86.97 0-157.04-70.08-157.04-157.04 0-70.95 46.64-130.65 111.04-150.24l-30.52-30.52z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiDiamondRing;
