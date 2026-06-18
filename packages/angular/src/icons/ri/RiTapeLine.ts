import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-tape-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiTapeLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M10.83 13H13.17C13.06 12.69 13 12.35 13 12C13 10.34 14.34 9 16 9C17.66 9 19 10.34 19 12C19 13.66 17.66 15 16 15H8C6.34 15 5 13.66 5 12C5 10.34 6.34 9 8 9C9.66 9 11 10.34 11 12C11 12.35 10.94 12.69 10.83 13ZM4 5V19H20V5H4ZM3 3H21C21.55 3 22 3.45 22 4V20C22 20.55 21.55 21 21 21H3C2.45 21 2 20.55 2 20V4C2 3.45 2.45 3 3 3ZM8 13C8.55 13 9 12.55 9 12C9 11.45 8.55 11 8 11C7.45 11 7 11.45 7 12C7 12.55 7.45 13 8 13ZM16 13C16.55 13 17 12.55 17 12C17 11.45 16.55 11 16 11C15.45 11 15 11.45 15 12C15 12.55 15.45 13 16 13Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiTapeLine;
