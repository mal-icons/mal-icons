import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-mail-star-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiMailStarLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M22 13H20V7.24L12.07 14.34L4 7.22V19H14V21H3C2.45 21 2 20.55 2 20V4C2 3.45 2.45 3 3 3H21C21.55 3 22 3.45 22 4V13ZM4.51 5L12.06 11.66L19.5 5H4.51ZM19.5 21.75L16.86 23.14L17.36 20.2L15.22 18.11L18.18 17.68L19.5 15L20.82 17.68L23.78 18.11L21.64 20.2L22.15 23.14L19.5 21.75Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiMailStarLine;
