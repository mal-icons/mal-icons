import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-pass-valid-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiPassValidFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M2 4C1.45 4 1 4.45 1 5V19C1 19.55 1.45 20 2 20H22C22.55 20 23 19.55 23 19V5C23 4.45 22.55 4 22 4H2ZM9 10C9 9.45 8.55 9 8 9C7.45 9 7 9.45 7 10C7 10.55 7.45 11 8 11C8.55 11 9 10.55 9 10ZM11 10C11 11.66 9.66 13 8 13C6.34 13 5 11.66 5 10C5 8.34 6.34 7 8 7C9.66 7 11 8.34 11 10ZM5.53 17.03L4.11 15.61C5.11 14.62 6.48 14 8 14C9.52 14 10.9 14.62 11.89 15.61L10.48 17.03C9.84 16.39 8.97 16 8 16C7.04 16 6.16 16.39 5.53 17.03ZM20.21 10.71L16.21 14.71L15.5 15.41L14.79 14.71L12.29 12.21L13.71 10.79L15.5 12.59L18.79 9.29L20.21 10.71Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiPassValidFill;
