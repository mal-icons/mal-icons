import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-roadster-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiRoadsterLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M19 20H5V21C5 21.55 4.55 22 4 22H3C2.45 22 2 21.55 2 21V13.5L0.76 13.19C0.31 13.08 0 12.68 0 12.22V11.5C0 11.22 0.22 11 0.5 11H2L4.48 5.21C4.8 4.48 5.52 4 6.32 4H17.68C18.48 4 19.2 4.48 19.52 5.21L22 11H23.5C23.78 11 24 11.22 24 11.5V12.22C24 12.68 23.69 13.08 23.24 13.19L22 13.5V21C22 21.55 21.55 22 21 22H20C19.45 22 19 21.55 19 21V20ZM20 18V13H4V18H20ZM5.48 11H18.52C18.65 11 18.78 10.98 18.89 10.93C19.41 10.72 19.66 10.14 19.45 9.63L18 6H6L4.55 9.63C4.5 9.75 4.48 9.87 4.48 10C4.48 10.55 4.92 11 5.48 11ZM5 14C7.32 14 8.88 14.75 9.69 16.26L9.69 16.26C9.82 16.51 9.72 16.81 9.48 16.94C9.41 16.98 9.33 17 9.24 17H6C5.45 17 5 16.55 5 16V14ZM19 14V16C19 16.55 18.55 17 18 17H14.76C14.67 17 14.59 16.98 14.52 16.94C14.28 16.81 14.18 16.51 14.31 16.26L14.31 16.26C15.12 14.75 16.68 14 19 14Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiRoadsterLine;
