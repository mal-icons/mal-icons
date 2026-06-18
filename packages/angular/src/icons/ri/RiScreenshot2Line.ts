import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-screenshot-2-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiScreenshot2Line {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3 3H5V5H3V3ZM7 3H9V5H7V3ZM11 3H13V5H11V3ZM15 3H17V5H15V3ZM19 3H21V5H19V3ZM19 7H21V9H19V7ZM3 19H5V21H3V19ZM3 15H5V17H3V15ZM3 11H5V13H3V11ZM3 7H5V9H3V7ZM10.67 11L11.7 9.45C11.89 9.17 12.2 9 12.54 9H15.46C15.8 9 16.11 9.17 16.3 9.45L17.33 11H20C20.55 11 21 11.45 21 12V20C21 20.55 20.55 21 20 21H8C7.45 21 7 20.55 7 20V12C7 11.45 7.45 11 8 11H10.67ZM9 19H19V13H16.26L14.93 11H13.07L11.74 13H9V19ZM14 18C12.9 18 12 17.1 12 16C12 14.9 12.9 14 14 14C15.1 14 16 14.9 16 16C16 17.1 15.1 18 14 18Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiScreenshot2Line;
