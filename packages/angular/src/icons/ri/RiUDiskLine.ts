import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-u-disk-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiUDiskLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M19 12H5V20H19V12ZM5 10V2H19V10H20C20.55 10 21 10.45 21 11V21C21 21.55 20.55 22 20 22H4C3.45 22 3 21.55 3 21V11C3 10.45 3.45 10 4 10H5ZM7 10H17V4H7V10ZM9 6H11V8H9V6ZM13 6H15V8H13V6Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiUDiskLine;
