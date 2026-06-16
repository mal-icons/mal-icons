import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-water-bottle-large",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoWaterBottleLarge {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M260-140h440v-120h-80v-260h-80v-60h160v-120H260v120h80v260h80v60H260v120Zm0 60q-24.75 0-42.37-17.62T200-140v-120q0-24.75 17.63-42.37T260-320h20v-200h-20q-24.75 0-42.37-17.62T200-580v-120q0-24.75 17.63-42.37T260-760h150v-60h-50v-60h240v60h-50v60h150q24.75 0 42.38 17.63T760-700v120q0 24.75-17.62 42.38T700-520h-20v200h20q24.75 0 42.38 17.63T760-260v120q0 24.75-17.62 42.38T700-80H260Zm220-340Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoWaterBottleLarge;
