import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-water-bottle-large",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrWaterBottleLarge {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M260-80q-24.75 0-42.37-17.62T200-140v-120q0-24.75 17.63-42.37T260-320h20v-200h-20q-24.75 0-42.37-17.62T200-580v-120q0-24.75 17.63-42.37T260-760h150v-60h-20q-12.75 0-21.37-8.68-8.62-8.68-8.62-21.5 0-12.82 8.63-21.32T390-880h180q12.75 0 21.38 8.68 8.63 8.68 8.63 21.5 0 12.83-8.62 21.33T570-820h-20v60h150q24.75 0 42.38 17.63T760-700v120q0 24.75-17.62 42.38T700-520h-20v200h20q24.75 0 42.38 17.63T760-260v120q0 24.75-17.62 42.38T700-80H260Zm0-60h440v-120h-80v-260h-50q-12.75 0-21.37-8.68-8.62-8.68-8.62-21.5 0-12.82 8.63-21.32T570-580h130v-120H260v120h80v260h50q12.75 0 21.38 8.68 8.63 8.68 8.63 21.5 0 12.83-8.62 21.33T390-260H260v120Zm220-280Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrWaterBottleLarge;
