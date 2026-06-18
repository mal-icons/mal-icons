import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-music-2-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiMusic2Line {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M20 3V17C20 19.21 18.21 21 16 21C13.79 21 12 19.21 12 17C12 14.79 13.79 13 16 13C16.73 13 17.41 13.19 18 13.54V5H9V17C9 19.21 7.21 21 5 21C2.79 21 1 19.21 1 17C1 14.79 2.79 13 5 13C5.73 13 6.41 13.19 7 13.54V3H20ZM5 19C6.1 19 7 18.1 7 17C7 15.9 6.1 15 5 15C3.9 15 3 15.9 3 17C3 18.1 3.9 19 5 19ZM16 19C17.1 19 18 18.1 18 17C18 15.9 17.1 15 16 15C14.9 15 14 15.9 14 17C14 18.1 14.9 19 16 19Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiMusic2Line;
