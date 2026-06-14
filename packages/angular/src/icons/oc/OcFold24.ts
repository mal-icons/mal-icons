import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-fold-24",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcFold24 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 15c0.2 0 0.390.080.530.22l3.25 3.25a0.750.75 0 0 1-0.33 1.270.750.75 0 0 1-0.73-0.21L12 16.81l-2.72 2.72a0.750.75 0 0 1-1.04-0.020.750.75 0 0 1-0.02-1.04l3.25-3.25A0.750.75 0 0 1 12 15Z"}],["path",{"d":"M12.53 8.78a0.750.75 0 0 1-1.06 0L8.22 5.53a0.750.75 0 0 1 0.02-1.040.750.75 0 0 1 1.04-0.02L12 7.19l2.72-2.72a0.750.75 0 0 1 1.270.330.750.75 0 0 1-0.210.73ZM12 15.75a0.750.75 0 0 1 0.750.75v5.75a0.750.75 0 0 1-1.5 0V16.5a0.750.75 0 0 1 0.75-0.75Z"}],["path",{"d":"M12 8.5a0.750.75 0 0 1-0.75-0.75v-6a0.750.75 0 0 1 1.5 0v6a0.750.75 0 0 1-0.750.75ZM2.75 12a0.750.75 0 0 1 0.75-0.75h1a0.750.75 0 0 1 0 1.5h-1a0.750.75 0 0 1-0.75-0.75Zm4 0a0.750.75 0 0 1 0.75-0.75h1a0.750.75 0 0 1 0 1.5h-1a0.750.75 0 0 1-0.75-0.75Zm4 0a0.750.75 0 0 1 0.75-0.75h1a0.750.75 0 0 1 0 1.5h-1a0.750.75 0 0 1-0.75-0.75Zm4 0a0.750.75 0 0 1 0.75-0.75h1a0.750.75 0 0 1 0 1.5h-1a0.750.75 0 0 1-0.75-0.75Zm4 0a0.750.75 0 0 1 0.75-0.75h1a0.750.75 0 0 1 0 1.5h-1a0.750.75 0 0 1-0.75-0.75Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcFold24;
