import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-directions-railway-filled",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtDirectionsRailwayFilled {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M6 15.5c0 0.830.67 1.5 1.5 1.5h9c0.83 0 1.5-0.67 1.5-1.5V12H6v3.5zm6-2.5c0.83 0 1.50.67 1.5 1.5S12.83 16 12 16s-1.5-0.67-1.5-1.50.67-1.5 1.5-1.5zm0-9c-3.52 0-4.970.48-5.57 1h11.24c-0.54-0.54-1.96-1-5.67-1z","opacity":".3"}],["path",{"d":"M12 2c-4 0-8 0.5-8 4v9.5C4 17.43 5.57 19 7.5 19L6 20v1h12v-1l-1.5-1c1.93 0 3.5-1.57 3.5-3.5V6c0-3.5-3.58-4-8-4zm0 2c3.71 0 5.130.46 5.67 1H6.43c0.6-0.52 2.05-1 5.57-1zm6 11.5c0 0.83-0.67 1.5-1.5 1.5h-9c-0.83 0-1.5-0.67-1.5-1.5V12h12v3.5zm0-5.5H6V7h12v3z"}],["circle",{"cx":"12","cy":"14.5","r":"1.5"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtDirectionsRailwayFilled;
