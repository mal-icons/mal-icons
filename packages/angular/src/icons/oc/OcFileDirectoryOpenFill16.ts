import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-file-directory-open-fill-16",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcFileDirectoryOpenFill16 {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M0.51 1.51A1.75 1.75 0 0 1 1.75 1h3.5c0.55 0 1.070.26 1.40.7l0.9 1.2a0.250.25 0 0 0 0.20.1H13a1 1 0 0 1 1 1v0.5H2.75a0.750.75 0 0 0 0 1.5h11.98a1 1 0 0 1 0.99 1.12L15 13.25A1.75 1.75 0 0 1 13.25 15H1.75A1.75 1.75 0 0 1 0 13.25V2.75c0-0.460.18-0.910.51-1.24Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcFileDirectoryOpenFill16;
