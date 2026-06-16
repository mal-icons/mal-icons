import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-youtube-searched-for",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtYoutubeSearchedFor {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M17.01 14h-0.8l-0.27-0.27a6.45 6.45 0 0 0 1.57-4.23c0-3.59-2.91-6.5-6.5-6.5s-6.5 3-6.5 6.5H2l3.84 4 4.16-4H6.51a4.5 4.5 0 0 1 9 0 4.51 4.51 0 0 1-6.32 4.12L7.71 15.1a6.47 6.47 0 0 0 7.52-0.67l0.270.27v0.79l5.01 4.99L22 19l-4.99-5z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtYoutubeSearchedFor;
