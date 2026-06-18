import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-advertisement-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiAdvertisementLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12.6 16 9.4 8H7.4L5.4 13 5.4 13 4.2 16H6.35L6.75 15H10.04L10.44 16H12.6ZM7.55 13 8.4 10.89 9.24 13H7.55ZM17 8H19V16H16C14.34 16 13 14.66 13 13 13 11.34 14.34 10 16 10H17V8ZM16 12C15.45 12 15 12.45 15 13 15 13.55 15.45 14 16 14H17V12H16ZM21 3H3C2.45 3 2 3.45 2 4V20C2 20.55 2.45 21 3 21H21C21.55 21 22 20.55 22 20V4C22 3.45 21.55 3 21 3ZM4 19V5H20V19H4Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiAdvertisementLine;
