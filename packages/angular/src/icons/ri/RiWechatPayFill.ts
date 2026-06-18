import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-wechat-pay-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiWechatPayFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M9.27 14.67C8.95 14.83 8.56 14.71 8.39 14.4L8.35 14.31L6.53 10.31C6.52 10.26 6.52 10.21 6.53 10.16C6.53 10.07 6.57 9.99 6.63 9.93C6.69 9.87 6.78 9.83 6.86 9.83C6.94 9.83 7.01 9.86 7.06 9.9L9.24 11.43C9.4 11.53 9.59 11.59 9.79 11.59C9.9 11.59 10.02 11.57 10.13 11.53L20.18 7.03C18.09 4.73 15.11 3.44 12 3.5C6.48 3.5 2 7.23 2 11.87C2.07 14.41 3.36 16.75 5.46 18.17C5.69 18.33 5.78 18.62 5.7 18.89L5.25 20.59C5.22 20.67 5.21 20.75 5.2 20.83C5.2 20.92 5.23 21.01 5.3 21.07C5.36 21.14 5.44 21.17 5.53 21.17C5.6 21.16 5.67 21.14 5.72 21.11L7.9 19.85C8.06 19.75 8.25 19.69 8.43 19.69C8.53 19.69 8.63 19.71 8.73 19.74C9.79 20.04 10.89 20.19 11.99 20.19C17.52 20.19 22 16.46 22 11.86C22.01 10.48 21.63 9.14 20.9 7.97L9.35 14.63L9.27 14.67Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiWechatPayFill;
