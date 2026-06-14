import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-file-directory-symlink-16",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcFileDirectorySymlink16 {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M0 2.75C0 1.780.78 1 1.75 1H5a1.75 1.75 0 0 1 1.40.7l0.9 1.2a0.250.25 0 0 0 0.20.1h6.75c0.97 0 1.750.78 1.75 1.75v8.5A1.75 1.75 0 0 1 14.25 15H5.38a0.750.75 0 0 1 0-1.5h8.88a0.250.25 0 0 0 0.25-0.25v-8.5a0.250.25 0 0 0-0.25-0.25H7.5a1.75 1.75 0 0 1-1.4-0.7l-0.9-1.2a0.250.25 0 0 0-0.2-0.1H1.75a0.250.25 0 0 0-0.250.25v3a0.750.75 0 0 1-1.5 0v-3Z"}],["path",{"d":"M1.5 12.24a2.25 2.25 0 0 1 2.26-2.25L4 9.99v1.94c0 0.220.260.330.420.18l2.88-2.68a0.250.25 0 0 0 0-0.37L4.42 6.39a0.250.25 0 0 0-0.420.18v1.92l-0.230A3.75 3.75 0 0 0 0 12.24v1.01a0.750.75 0 0 0 1.5 0v-1.01Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcFileDirectorySymlink16;
