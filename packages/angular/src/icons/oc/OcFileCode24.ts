import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-file-code-24",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcFileCode24 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3 3a2 2 0 0 1 2-2h9.98a2 2 0 0 1 1.410.59l4.02 4.02A2 2 0 0 1 21 7.02V21a2 2 0 0 1-2 2H4.75a0.750.75 0 0 1 0-1.5H19a0.50.5 0 0 0 0.5-0.5V8.5h-4a2 2 0 0 1-2-2v-4H5a0.50.5 0 0 0-0.50.5v6.25a0.750.75 0 0 1-1.5 0Zm12-0.5v4a0.50.5 0 0 0 0.50.5h4a0.50.5 0 0 0-0.15-0.34l-4.02-4.02A0.50.5 0 0 0 15 2.5Z"}],["path",{"d":"M4.53 12.24a0.750.75 0 0 1-0.04 1.06l-2.64 2.45 2.64 2.45a0.750.75 0 1 1-1.02 1.1l-3.23-3a0.750.75 0 0 1 0-1.1l3.23-3a0.750.75 0 0 1 1.060.04Zm3.98 1.06a0.750.75 0 1 1 1.02-1.1l3.23 3a0.750.75 0 0 1 0 1.1l-3.23 3a0.750.75 0 1 1-1.02-1.1l2.64-2.45-2.64-2.45Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcFileCode24;
