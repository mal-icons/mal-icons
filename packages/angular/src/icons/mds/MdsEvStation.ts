import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mds-ev-station",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdsEvStation {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m19.77 7.230.01-0.01-3.72-3.72L15 4.56l2.11 2.11c-1.050.4-1.76 1.47-1.58 2.710.16 1.1 1.1 1.99 2.2 2.110.470.050.88-0.03 1.27-0.2v8.21h-2V12h-3V3H4v18h10v-7.5h1.5V21h5V9c0-0.69-0.28-1.32-0.73-1.77zM18 10c-0.55 0-1-0.45-1-1s0.45-1 1-1 1 0.45 1 1-0.45 1-1 1zM8 18v-4.5H6L10 6v5h2l-4 7z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdsEvStation;
