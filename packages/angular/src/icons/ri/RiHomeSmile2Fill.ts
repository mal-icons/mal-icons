import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-home-smile-2-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiHomeSmile2Fill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M21 20C21 20.55 20.55 21 20 21H4C3.45 21 3 20.55 3 20V9.31C3 9.01 3.14 8.72 3.38 8.53L11.38 2.22C11.74 1.93 12.26 1.93 12.62 2.22L20.62 8.53C20.86 8.72 21 9.01 21 9.31V20ZM7 12C7 14.76 9.24 17 12 17C14.76 17 17 14.76 17 12H15C15 13.66 13.66 15 12 15C10.34 15 9 13.66 9 12H7Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiHomeSmile2Fill;
