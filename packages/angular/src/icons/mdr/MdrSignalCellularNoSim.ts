import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-signal-cellular-no-sim",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrSignalCellularNoSim {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M19 5c0-1.1-0.9-2-2-2h-6.17c-0.53 0-1.040.21-1.420.59L7.95 5.06 19 16.11V5zM3.09 4.44a11 0 0 0 0 1.41L5 7.78V19a2 2 0 0 0 2 2h11.23l0.910.91a11 0 1 0 1.41-1.41L4.5 4.44a11 0 0 0-1.41 0z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrSignalCellularNoSim;
