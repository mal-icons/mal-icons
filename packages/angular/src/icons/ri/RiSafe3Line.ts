import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-safe-3-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiSafe3Line {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M2 4C2 3.45 2.45 3 3 3H21C21.55 3 22 3.45 22 4V19C22 19.55 21.55 20 21 20H20V22H18V20H6V22H4V20H3C2.45 20 2 19.55 2 19V4ZM4 18H5H19H20V5H4V18ZM15.35 8.24C14.21 7.59 12.79 7.59 11.65 8.24L10.32 6.9L8.9 8.32L10.24 9.65C9.59 10.79 9.59 12.21 10.24 13.35L8.9 14.68L10.32 16.1L11.65 14.76C12.79 15.41 14.21 15.41 15.35 14.76L16.68 16.1L18.1 14.68L16.76 13.35C17.41 12.21 17.41 10.79 16.76 9.65L18.1 8.32L16.68 6.9L15.35 8.24ZM14.74 10.26C15.42 10.95 15.42 12.05 14.74 12.74C14.05 13.42 12.95 13.42 12.26 12.74C11.58 12.05 11.58 10.95 12.26 10.26C12.95 9.58 14.05 9.58 14.74 10.26ZM5 8V15H7V8H5Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiSafe3Line;
