import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-fa-road-spikes",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class FaRoadSpikes {
  readonly viewBox = "0 0 640 512";
  readonly nodes: NodeTuple[] = [["path",{"d":"M64 116.8c0-15.8 20.5-22 29.3-8.9L192 256l0-139.2c0-15.8 20.5-22 29.3-8.9L320 256l0-139.2c0-15.8 20.5-22 29.3-8.9L448 256l0-139.2c0-15.8 20.5-22 29.3-8.9L606.8 302.2c14.2 21.3-1.1 49.7-26.6 49.7L512 352l-64 0-64 0-64 0-64 0-64 0L64 352l0-235.2zM32 384l576 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default FaRoadSpikes;
