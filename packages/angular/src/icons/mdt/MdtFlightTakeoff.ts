import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-flight-takeoff",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtFlightTakeoff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M2.5 19h19v2h-19v-2zm19.57-9.36c-0.21-0.8-1.04-1.28-1.84-1.06L14.92 10l-6.9-6.43-1.930.51 4.14 7.17-4.97 1.33-1.97-1.54-1.450.39 2.59 4.49L21 11.49c0.81-0.23 1.28-1.05 1.07-1.85z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtFlightTakeoff;
