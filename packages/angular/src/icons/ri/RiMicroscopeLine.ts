import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-microscope-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiMicroscopeLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M13.2 2.27L16.45 7.9C16.72 8.38 16.56 8.99 16.08 9.26L14.78 10.01L15.78 11.75L14.05 12.75L13.05 11.01L11.75 11.76C11.27 12.04 10.66 11.88 10.38 11.4L8.55 8.21C6.49 8.84 5 10.74 5 13C5 13.63 5.11 14.22 5.32 14.78C6.1 14.28 7.02 14 8 14C9.68 14 11.17 14.83 12.08 16.11L19.77 11.67L20.77 13.4L12.89 17.95C12.96 18.29 13 18.64 13 19C13 19.34 12.97 19.68 12.9 20L21 20V22L4 22C3.37 21.17 3 20.13 3 19C3 17.99 3.3 17.06 3.81 16.27C3.29 15.29 3 14.18 3 13C3 10 4.88 7.45 7.53 6.45L7.13 5.77C6.58 4.81 6.91 3.59 7.87 3.04L10.46 1.54C11.42 0.98 12.64 1.31 13.2 2.27ZM8 16C6.34 16 5 17.34 5 19C5 19.35 5.06 19.69 5.17 20H10.83C10.94 19.69 11 19.35 11 19C11 17.34 9.66 16 8 16ZM11.46 3.27L8.87 4.77L11.62 9.53L14.21 8.03L11.46 3.27Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiMicroscopeLine;
