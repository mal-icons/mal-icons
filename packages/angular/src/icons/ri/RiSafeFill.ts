import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-safe-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiSafeFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M18 20H6V22H4V20H3C2.45 20 2 19.55 2 19V4C2 3.45 2.45 3 3 3H21C21.56 3 22 3.45 22 4V19C22 19.55 21.56 20 21 20H20V22H18V20ZM11 13.87V17H13V13.87C14.73 13.43 16 11.86 16 10C16 7.79 14.21 6 12 6C9.8 6 8 7.79 8 10C8 11.86 9.28 13.43 11 13.87ZM12 12C10.9 12 10 11.1 10 10C10 8.9 10.9 8 12 8C13.11 8 14 8.9 14 10C14 11.1 13.11 12 12 12Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiSafeFill;
