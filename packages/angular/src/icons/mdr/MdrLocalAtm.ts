import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-local-atm",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrLocalAtm {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M20 4H4c-1.11 0-1.990.89-1.99 2L2 18c0 1.110.89 2 2 2h16c1.11 0 2-0.89 2-2V6c0-1.11-0.89-2-2-2zm0 13c0 0.55-0.45 1-1 1H5c-0.55 0-1-0.45-1-1V7c0-0.550.45-1 1-1h14c0.55 0 1 0.45 1 1v10zm-6-7c0.55 0 1-0.45 1-1s-0.45-1-1-1h-1v-0.01c0-0.55-0.45-1-1-1s-1 0.45-1 1V8h-1c-0.55 0-1 0.45-1 1v3c0 0.550.45 1 1 1h3v1h-3c-0.55 0-1 0.45-1 1s0.45 1 1 1h1c0 0.550.45 1 1 1s1-0.45 1-1h1c0.55 0 1-0.45 1-1v-3c0-0.55-0.45-1-1-1h-3v-1h3z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrLocalAtm;
