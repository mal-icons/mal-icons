import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-share-circle-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiShareCircleLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M11 2.05V4.06C7.05 4.55 4 7.92 4 12C4 16.42 7.58 20 12 20C16.08 20 19.45 16.95 19.94 13H21.95C21.45 18.05 17.19 22 12 22C6.48 22 2 17.52 2 12C2 6.81 5.95 2.55 11 2.05ZM20 5.41L12 13.41L10.59 12L18.59 4H14V2H22V10H20V5.41Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiShareCircleLine;
