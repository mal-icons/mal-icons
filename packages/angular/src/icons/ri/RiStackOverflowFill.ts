import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-stack-overflow-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiStackOverflowFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M18 20V14.67H20V22H4V14.67H6V20H18ZM7.6 14.74L7.91 12.76L16.75 14.46L16.64 16.04L7.6 14.74ZM8.8 10.2L9.53 8.6L17.53 12.34L16.8 13.94L8.8 10.2ZM11.07 6.27L12.2 4.94L19 10.6L17.86 11.94L11.07 6.27ZM15.4 2.14L20.66 9.2L19.26 10.27L14 3.21L15.4 2.14ZM7.33 18.67V16.67H16.66V18.67H7.33Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiStackOverflowFill;
