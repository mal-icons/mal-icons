import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-airline-seat-legroom-reduced",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoAirlineSeatLegroomReduced {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M577-120v-109l46-181H320q-28.87 0-49.44-20.56Q250-451.12 250-480v-360h220v250h220q29 0 49 20t21 49l-86 301h74q22.65 0 37.32 13.75Q800-192.5 800-170t-13.75 36.25Q772.5-120 750-120H577Zm-97-160H180q-24.75 0-42.37-17.62T120-340v-500h60v500h300v60Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoAirlineSeatLegroomReduced;
