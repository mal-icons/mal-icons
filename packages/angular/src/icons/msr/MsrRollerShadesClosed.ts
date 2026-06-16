import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-roller-shades-closed",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrRollerShadesClosed {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M479.9-60Q455-60 437.5-77.57 420-95.14 420-120H110q-12.75 0-21.37-8.68Q80-137.35 80-150.18 80-163 88.63-171.5T110-180h50v-600q0-24.75 17.63-42.37T220-840h520q24.75 0 42.38 17.63T800-780v600h50q12.75 0 21.38 8.68 8.63 8.68 8.63 21.5 0 12.83-8.62 21.33T850-120H540q0 25-17.6 42.5t-42.5 17.5ZM220-350h520v-430H220v430Zm0 170h230v-110H220v110Zm290 0h230v-110H510v110ZM220-780h520-520Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrRollerShadesClosed;
