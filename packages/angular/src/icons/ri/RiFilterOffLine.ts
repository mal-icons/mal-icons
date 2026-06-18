import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-filter-off-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiFilterOffLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M6.93 0.51L21.07 14.66L19.66 16.07L15.83 12.25L15 13.5V22H9V13.5L4 6H3V4L7.59 4L5.51 1.93L6.93 0.51ZM9.59 6L6.4 6L11 12.89V20H13V12.89L14.39 10.81L9.59 6ZM21 4V6H20L18.09 8.87L16.64 7.43L17.6 6H15.21L13.21 4H21Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiFilterOffLine;
