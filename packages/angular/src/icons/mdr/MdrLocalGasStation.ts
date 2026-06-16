import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-local-gas-station",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrLocalGasStation {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m19.77 7.230.01-0.01-3.19-3.19a0.750.75 0 0 0-1.06 0c-0.290.29-0.290.77 0 1.06l1.58 1.58c-1.050.4-1.76 1.47-1.58 2.710.16 1.1 1.1 1.99 2.2 2.110.470.050.88-0.03 1.27-0.2v7.21c0 0.55-0.45 1-1 1s-1-0.45-1-1V14c0-1.1-0.9-2-2-2h-1V5c0-1.1-0.9-2-2-2H6c-1.1 0-2 0.9-2 2v15c0 0.550.45 1 1 1h8c0.55 0 1-0.45 1-1v-6.5h1.5v4.86c0 1.310.94 2.5 2.24 2.63a2.5 2.5 0 0 0 2.76-2.49V9c0-0.69-0.28-1.32-0.73-1.77zM12 10H6V6c0-0.550.45-1 1-1h4c0.55 0 1 0.45 1 1v4zm6 0c-0.55 0-1-0.45-1-1s0.45-1 1-1 1 0.45 1 1-0.45 1-1 1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrLocalGasStation;
