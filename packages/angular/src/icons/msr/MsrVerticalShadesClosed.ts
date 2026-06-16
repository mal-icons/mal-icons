import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-vertical-shades-closed",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrVerticalShadesClosed {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M110-120q-12.75 0-21.37-8.68Q80-137.35 80-150.18 80-163 88.63-171.5T110-180h50v-600q0-24.75 17.63-42.37T220-840h520q24.75 0 42.38 17.63T800-780v600h50q12.75 0 21.38 8.68 8.63 8.68 8.63 21.5 0 12.83-8.62 21.33T850-120H110Zm110-60h85v-600h-85v600Zm145 0h85v-600h-85v600Zm145 0h85v-600h-85v600Zm145 0h85v-600h-85v600Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrVerticalShadesClosed;
