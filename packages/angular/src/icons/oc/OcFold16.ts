import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-fold-16",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcFold16 {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M10.9 2H8.75V0.75a0.750.75 0 0 0-1.5 0V2H5.1a0.250.25 0 0 0-0.180.43l2.9 2.9a0.250.25 0 0 0 0.35 0l2.9-2.9A0.250.25 0 0 0 10.9 2ZM8.75 15.25a0.750.75 0 0 1-1.5 0V14H5.1a0.250.25 0 0 1-0.18-0.43l2.9-2.9a0.250.25 0 0 1 0.35 0l2.9 2.9a0.250.25 0 0 1-0.180.43H8.75v1.25Zm-6.5-6.5a0.750.75 0 0 0 0-1.5h-0.5a0.750.75 0 0 0 0 1.5h0.5ZM6 8a0.750.75 0 0 1-0.750.75h-0.5a0.750.75 0 0 1 0-1.5h0.5A0.750.75 0 0 1 6 8Zm2.250.75a0.750.75 0 0 0 0-1.5h-0.5a0.750.75 0 0 0 0 1.5h0.5ZM12 8a0.750.75 0 0 1-0.750.75h-0.5a0.750.75 0 0 1 0-1.5h0.5A0.750.75 0 0 1 12 8Zm2.250.75a0.750.75 0 0 0 0-1.5h-0.5a0.750.75 0 0 0 0 1.5h0.5Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcFold16;
