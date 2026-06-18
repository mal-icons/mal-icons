import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-music-2-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiMusic2Fill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M20 3V17C20 19.21 18.21 21 16 21C13.79 21 12 19.21 12 17C12 14.79 13.79 13 16 13C16.73 13 17.41 13.19 18 13.54V6H9V17C9 19.21 7.21 21 5 21C2.79 21 1 19.21 1 17C1 14.79 2.79 13 5 13C5.73 13 6.41 13.19 7 13.54V3H20Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiMusic2Fill;
