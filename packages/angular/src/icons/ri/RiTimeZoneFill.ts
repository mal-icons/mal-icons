import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-time-zone-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiTimeZoneFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 2C17.08 2 21.27 5.78 21.91 10.69C20.56 9.63 18.85 9 17 9C12.58 9 9 12.58 9 17C9 18.85 9.63 20.56 10.69 21.91C5.78 21.27 2 17.08 2 12C2 6.48 6.48 2 12 2ZM12 3.83C9.68 3.83 7.59 4.8 6.1 6.35C6.28 6.47 6.44 6.64 6.54 6.88C6.75 7.34 6.75 7.81 6.75 8.23C6.74 8.56 6.74 8.87 6.85 9.09C6.99 9.4 7.62 9.53 8.17 9.65L8.19 9.65C8.38 9.69 8.57 9.73 8.75 9.78C9.25 9.92 9.65 10.38 9.96 10.74C10.09 10.89 10.28 11.12 10.38 11.17C10.43 11.14 10.59 10.96 10.67 10.67C10.73 10.45 10.71 10.26 10.62 10.15C10.06 9.49 10.1 8.22 10.27 7.75C10.54 7.02 11.39 7.07 12.01 7.11L12.02 7.11C12.25 7.13 12.46 7.14 12.63 7.12C13.1 7.06 13.32 6.5 13.46 6.16C13.51 6.04 13.54 5.96 13.58 5.91C13.87 5.51 14.76 4.91 15.32 4.53C14.3 4.08 13.18 3.83 12 3.83ZM23 17C23 20.31 20.31 23 17 23C13.69 23 11 20.31 11 17C11 13.69 13.69 11 17 11C20.31 11 23 13.69 23 17ZM16 18H20V16H18V14H16V18Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiTimeZoneFill;
