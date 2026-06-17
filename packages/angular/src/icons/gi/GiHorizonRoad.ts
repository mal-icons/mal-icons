import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-horizon-road",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiHorizonRoad {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M129.8 19.64 64.66 113.4H32v18h272.8c12.3 23.5 21.4 40.3 28.1 68.3-118 19.8-137.8 26.8-247.03 65.1C126.4 344.9 167 425 232.8 492.4l246.2-0.3c-87.1-63.9-203.5-127.6-260.1-201.3 64.2-33.7 98.8-49.9 155.5-74.6-11.5-28.8-30.3-59.7-53.9-84.8H480v-18H251.2l-54.5-67.85-35.6 23.16z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiHorizonRoad;
