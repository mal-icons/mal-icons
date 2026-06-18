import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-time-zone-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiTimeZoneLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4 12C4 9.85 4.85 7.89 6.24 6.45C6.36 6.56 6.46 6.71 6.54 6.88C6.75 7.34 6.75 7.81 6.75 8.23C6.74 8.56 6.74 8.87 6.85 9.09C6.99 9.4 7.62 9.53 8.17 9.65L8.19 9.65C8.38 9.69 8.57 9.73 8.75 9.78C9.25 9.92 9.65 10.38 9.96 10.74C10.09 10.89 10.28 11.12 10.38 11.17C10.43 11.14 10.59 10.96 10.67 10.67C10.73 10.45 10.71 10.26 10.62 10.15C10.06 9.49 10.1 8.22 10.27 7.75C10.54 7.02 11.39 7.07 12.01 7.11L12.02 7.11C12.25 7.13 12.46 7.14 12.63 7.12C13.1 7.06 13.32 6.5 13.46 6.16C13.51 6.04 13.54 5.96 13.58 5.91C13.84 5.55 14.6 5.02 15.15 4.64C17.22 5.53 18.85 7.27 19.58 9.42C20.43 9.71 21.22 10.14 21.91 10.69C21.27 5.78 17.08 2 12 2C6.48 2 2 6.48 2 12C2 17.08 5.78 21.27 10.69 21.91C10.14 21.22 9.71 20.43 9.42 19.58C6.27 18.5 4 15.52 4 12ZM17 13C14.79 13 13 14.79 13 17C13 19.21 14.79 21 17 21C19.21 21 21 19.21 21 17C21 14.79 19.21 13 17 13ZM11 17C11 13.69 13.69 11 17 11C20.31 11 23 13.69 23 17C23 20.31 20.31 23 17 23C13.69 23 11 20.31 11 17ZM16 14V18H20V16H18V14H16Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiTimeZoneLine;
