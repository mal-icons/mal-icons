import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-wechat-2-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiWechat2Fill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M5.46 18.18C3.36 16.68 2 14.4 2 11.91C2 7.32 6.48 3.6 12 3.6C17.53 3.6 22 7.32 22 11.91C22 16.49 17.53 20.22 12 20.22C10.86 20.22 9.75 20.06 8.73 19.75C8.64 19.72 8.51 19.72 8.42 19.72C8.24 19.72 8.05 19.78 7.9 19.88L5.7 21.14C5.64 21.17 5.58 21.2 5.52 21.2C5.33 21.2 5.18 21.05 5.18 20.86C5.18 20.77 5.21 20.71 5.24 20.62C5.27 20.58 5.55 19.57 5.7 18.95C5.7 18.89 5.74 18.8 5.74 18.74C5.74 18.49 5.64 18.31 5.46 18.18ZM8.67 10.51C9.38 10.51 9.95 9.94 9.95 9.23C9.95 8.51 9.38 7.94 8.67 7.94C7.95 7.94 7.38 8.51 7.38 9.23C7.38 9.94 7.95 10.51 8.67 10.51ZM15.33 10.51C16.05 10.51 16.62 9.94 16.62 9.23C16.62 8.51 16.05 7.94 15.33 7.94C14.62 7.94 14.05 8.51 14.05 9.23C14.05 9.94 14.62 10.51 15.33 10.51Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiWechat2Fill;
