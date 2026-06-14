import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-file-directory-open-fill-24",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcFileDirectoryOpenFill24 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M2 4.75C2 3.78 2.78 3 3.75 3h4.97c0.58 0 1.120.29 1.450.77l1.4 2.06a0.250.25 0 0 0 0.210.11h6.22c0.97 0 1.750.78 1.75 1.75v0.12H5.41a0.850.85 0 0 0 0 1.7h15.48a1 1 0 0 1 1 1.1L21 19.25c-0.11 1.05-0.78 1.75-1.75 1.75H3.75A1.75 1.75 0 0 1 2 19.25V4.75Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcFileDirectoryOpenFill24;
