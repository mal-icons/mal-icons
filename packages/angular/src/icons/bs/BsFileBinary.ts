import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-file-binary",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsFileBinary {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M5.53 13.09c0.98 0 1.52-0.79 1.52-2.2 0-1.41-0.55-2.2-1.52-2.2-0.98 0-1.530.79-1.53 2.2 0 1.420.55 2.21 1.53 2.21zm-0.83-2.2c0-1.050.29-1.610.83-1.610.36 0 0.610.250.730.72L4.7 11.14a7 7 0 0 1-0.01-0.25m0.83 1.61c-0.36 0-0.61-0.25-0.73-0.72l1.56-1.14q0.010.120.010.25c0 1.05-0.29 1.61-0.83 1.61m5.330.5v-0.59H9.73V8.77h-0.69l-1.190.79v0.69L8.99 9.5h0.05v2.91h-1.18V13h3z"}],["path",{"d":"M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsFileBinary;
