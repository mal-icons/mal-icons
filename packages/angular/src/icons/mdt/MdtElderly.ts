import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-elderly",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtElderly {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M13.5 5.5c1.1 0 2-0.9 2-2s-0.9-2-2-2-2 0.9-2 2 0.9 2 2 2zm6.5 7V23h-1V12.5c0-0.28-0.22-0.5-0.5-0.5s-0.50.22-0.50.5v1h-1v-0.69a6.02 6.02 0 0 1-3.51-2.52c-0.310.87-0.49 1.78-0.49 2.71 0 0.230.020.460.030.69L15 16.5V23h-2v-5l-1.78-2.54L11 19l-3 4-1.6-1.2L9 18.33V13c0-1.150.18-2.290.5-3.39l-1.50.85V14H6V9.3l5.4-3.07v0.01a2 2 0 0 1 1.940.03c0.360.210.630.510.80.85l0.79 1.67A3.99 3.99 0 0 0 18.5 11c0.83 0 1.50.67 1.5 1.5z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtElderly;
