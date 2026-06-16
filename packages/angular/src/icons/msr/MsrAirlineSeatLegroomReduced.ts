import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-airline-seat-legroom-reduced",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrAirlineSeatLegroomReduced {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M627-120q-27.43 0-46.71-23Q561-166 568-192l55-218H320q-28.87 0-49.44-20.56Q250-451.12 250-480v-360h220v250h220q29 0 49 20t21 49l-86 301h74q22.65 0 37.32 13.75Q800-192.5 800-170t-13.75 36.25Q772.5-120 750-120H627ZM180-280q-24.75 0-42.37-17.62T120-340v-470q0-12.75 8.68-21.37 8.68-8.62 21.5-8.62 12.83 0 21.33 8.63T180-810v470h270q12.75 0 21.38 8.68 8.63 8.68 8.63 21.5 0 12.83-8.62 21.33T450-280H180Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrAirlineSeatLegroomReduced;
