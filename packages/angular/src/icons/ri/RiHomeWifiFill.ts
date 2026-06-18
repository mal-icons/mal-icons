import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-home-wifi-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiHomeWifiFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M20 20C20 20.55 19.55 21 19 21H5C4.45 21 4 20.55 4 20V11L1 11L11.33 1.61C11.71 1.26 12.29 1.26 12.67 1.61L23 11L20 11V20ZM7 11V13C9.76 13 12 15.24 12 18H14C14 14.13 10.87 11 7 11ZM7 15V18H10C10 16.34 8.66 15 7 15Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiHomeWifiFill;
