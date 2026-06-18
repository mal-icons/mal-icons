import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-pass-expired-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiPassExpiredLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3 18H21V6H3V18ZM1 5C1 4.45 1.45 4 2 4H22C22.55 4 23 4.45 23 5V19C23 19.55 22.55 20 22 20H2C1.45 20 1 19.55 1 19V5ZM9 10C9 9.45 8.55 9 8 9C7.45 9 7 9.45 7 10C7 10.55 7.45 11 8 11C8.55 11 9 10.55 9 10ZM11 10C11 11.66 9.66 13 8 13C6.34 13 5 11.66 5 10C5 8.34 6.34 7 8 7C9.66 7 11 8.34 11 10ZM8 16C7.04 16 6.16 16.39 5.53 17.03L4.11 15.61C5.11 14.62 6.48 14 8 14C9.52 14 10.9 14.62 11.89 15.61L10.48 17.03C9.84 16.39 8.97 16 8 16ZM17.79 8.79L16 10.59L14.21 8.79L12.79 10.21L14.59 12L12.79 13.79L14.21 15.21L16 13.41L17.79 15.21L19.21 13.79L17.41 12L19.21 10.21L17.79 8.79Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiPassExpiredLine;
