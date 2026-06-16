import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdf-airline-seat-flat-angled",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdfAirlineSeatFlatAngled {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m22.25 14.29-0.69 1.89L9.2 11.71l2.08-5.66 8.56 3.09a4 4 0 0 1 2.41 5.15zM1.5 12.14 8 14.48V19h8v-1.63L20.52 19l0.69-1.89-19.02-6.86-0.69 1.89zm5.8-1.94a3.01 3.01 0 0 0 1.41-4A3.01 3.01 0 0 0 4.7 4.8a2.99 2.99 0 0 0-1.4 4 2.99 2.99 0 0 0 4 1.4z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdfAirlineSeatFlatAngled;
