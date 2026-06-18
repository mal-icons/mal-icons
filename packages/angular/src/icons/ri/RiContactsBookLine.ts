import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-contacts-book-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiContactsBookLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3 2H19C20.11 2 21 2.9 21 3.99V20.01C21 21.11 20.11 22 19 22H3V2ZM7 4H5V20H7V4ZM9 20H19V4H9V20ZM11 16C11 14.34 12.34 13 14 13C15.66 13 17 14.34 17 16H11ZM14 12C12.9 12 12 11.1 12 10C12 8.9 12.9 8 14 8C15.1 8 16 8.9 16 10C16 11.1 15.1 12 14 12ZM22 6H24V10H22V6ZM22 12H24V16H22V12Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiContactsBookLine;
