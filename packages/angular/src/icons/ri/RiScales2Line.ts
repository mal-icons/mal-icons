import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-scales-2-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiScales2Line {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M6 2C6 2.51 6.49 3 7 3H17C17.51 3 18 2.51 18 2H20C20 3.66 18.65 5 17 5H13L13 7.06C16.94 7.55 20 10.92 20 15V21C20 21.55 19.55 22 19 22H5C4.45 22 4 21.55 4 21V15C4 10.92 7.05 7.55 11 7.06L11 5H7C5.34 5 4 3.66 4 2H6ZM12 9C8.76 9 6 11.76 6 15V20H18V15C18 11.76 15.24 9 12 9ZM12 11C12.74 11 13.43 11.2 14.03 11.55L11.29 14.29C10.9 14.68 10.9 15.32 11.29 15.71C11.65 16.07 12.22 16.1 12.61 15.79L12.71 15.71L15.44 12.97C15.8 13.56 16 14.26 16 15C16 17.21 14.21 19 12 19C9.79 19 8 17.21 8 15C8 12.79 9.79 11 12 11Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiScales2Line;
