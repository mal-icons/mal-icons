import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-hourglass-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiHourglassLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M6 4H4V2H20V4H18V6C18 7.62 17.18 8.91 16.16 9.98C15.45 10.7 14.6 11.37 13.73 12C14.6 12.63 15.45 13.3 16.16 14.02C17.18 15.09 18 16.38 18 18V20H20V22H4V20H6V18C6 16.38 6.82 15.09 7.84 14.02C8.55 13.3 9.4 12.63 10.27 12C9.4 11.37 8.55 10.7 7.84 9.98C6.82 8.91 6 7.62 6 6V4ZM8 4V6C8 6.88 8.43 7.71 9.28 8.59C10.01 9.34 10.95 10.04 12 10.78C13.05 10.04 13.99 9.34 14.72 8.59C15.57 7.71 16 6.88 16 6V4H8ZM12 13.22C10.95 13.96 10.01 14.66 9.28 15.41C8.43 16.29 8 17.12 8 18V20H16V18C16 17.12 15.57 16.29 14.72 15.41C13.99 14.66 13.05 13.96 12 13.22Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiHourglassLine;
