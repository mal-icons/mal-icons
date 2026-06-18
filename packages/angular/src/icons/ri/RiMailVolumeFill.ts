import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-mail-volume-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiMailVolumeFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M20 14.5V23.5L16.67 21H14V17H16.67L20 14.5ZM21 3C21.55 3 22 3.45 22 4L22 14.53C20.94 13.58 19.54 13 18 13C14.69 13 12 15.69 12 19C12 19.7 12.12 20.37 12.34 21L3 21C2.45 21 2 20.55 2 20V4C2 3.45 2.45 3 3 3H21ZM21 17C22.1 17 23 17.9 23 19C23 20.05 22.18 20.92 21.15 20.99L21 21V17ZM5.65 6.24L4.35 7.76L12.07 14.32L19.65 7.76L18.35 6.24L12.06 11.68L5.65 6.24Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiMailVolumeFill;
