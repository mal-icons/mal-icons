import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-slideshow-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiSlideshowFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M13 21V23H11V21H3C2.45 21 2 20.55 2 20V6H22V20C22 20.55 21.55 21 21 21H13ZM8 10C6.34 10 5 11.34 5 13C5 14.66 6.34 16 8 16C9.66 16 11 14.66 11 13H8V10ZM13 10V12H19V10H13ZM13 14V16H19V14H13ZM2 3H22V5H2V3Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiSlideshowFill;
