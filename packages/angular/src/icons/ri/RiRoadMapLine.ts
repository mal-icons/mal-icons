import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-road-map-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiRoadMapLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4 6.14V18.97L9.06 16.8L15.06 19.8L20 17.68V4.86L21.3 4.3C21.56 4.19 21.85 4.31 21.96 4.56C21.99 4.62 22 4.69 22 4.76V19L15 22L9 19L2.7 21.7C2.44 21.81 2.15 21.69 2.04 21.44C2.01 21.38 2 21.31 2 21.24V7L4 6.14ZM16.24 11.24L12 15.49L7.76 11.24C5.41 8.9 5.41 5.1 7.76 2.76C10.1 0.41 13.9 0.41 16.24 2.76C18.59 5.1 18.59 8.9 16.24 11.24ZM12 12.66L14.83 9.83C16.39 8.27 16.39 5.73 14.83 4.17C13.27 2.61 10.73 2.61 9.17 4.17C7.61 5.73 7.61 8.27 9.17 9.83L12 12.66Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiRoadMapLine;
