import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-fold-down-16",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcFoldDown16 {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"m8.18 14.32 2.9-2.9a0.250.25 0 0 0-0.18-0.43H8.75V7.76a0.750.75 0 1 0-1.5 0V11H5.1a0.250.25 0 0 0-0.180.43l2.9 2.9a0.250.25 0 0 0 0.35 0ZM2.25 5a0.750.75 0 0 0 0-1.5h-0.5a0.750.75 0 0 0 0 1.5h0.5ZM6 4.25a0.750.75 0 0 1-0.750.75h-0.5a0.750.75 0 0 1 0-1.5h0.5a0.750.75 0 0 1 0.750.75ZM8.25 5a0.750.75 0 0 0 0-1.5h-0.5a0.750.75 0 0 0 0 1.5h0.5ZM12 4.25a0.750.75 0 0 1-0.750.75h-0.5a0.750.75 0 0 1 0-1.5h0.5a0.750.75 0 0 1 0.750.75Zm2.250.75a0.750.75 0 0 0 0-1.5h-0.5a0.750.75 0 0 0 0 1.5h0.5Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcFoldDown16;
