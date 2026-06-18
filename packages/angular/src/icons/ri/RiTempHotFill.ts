import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-temp-hot-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiTempHotFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8 10.25V5C8 2.79 9.79 1 12 1C14.21 1 16 2.79 16 5V10.25C17.81 11.52 19 13.62 19 16C19 19.87 15.87 23 12 23C8.13 23 5 19.87 5 16C5 13.62 6.19 11.52 8 10.25ZM11 12.13C9.27 12.57 8 14.14 8 16C8 18.21 9.79 20 12 20C14.21 20 16 18.21 16 16C16 14.14 14.73 12.57 13 12.13V5H11V12.13Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiTempHotFill;
