import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-file-directory-symlink-24",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcFileDirectorySymlink24 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M2 4.75C2 3.78 2.78 3 3.75 3h4.97a1.75 1.75 0 0 1 1.450.77l1.4 2.06a0.250.25 0 0 0 0.210.11h8.47c0.97 0 1.750.78 1.75 1.75V19.25A1.75 1.75 0 0 1 20.25 21H4.75a0.750.75 0 0 1 0-1.5h15.5a0.250.25 0 0 0 0.25-0.25V7.69a0.250.25 0 0 0-0.25-0.25h-8.47a1.75 1.75 0 0 1-1.45-0.77L8.93 4.61a0.250.25 0 0 0-0.21-0.11H3.75a0.250.25 0 0 0-0.250.25v3.5a0.750.75 0 0 1-1.5 0v-3.5Z"}],["path",{"d":"m9.31 12.5-2.1-2.24a0.750.75 0 1 1 1.09-1.03l3.29 3.5a0.750.75 0 0 1 0 1.03l-3.29 3.5a0.750.75 0 1 1-1.09-1.03L9.31 14H4.09a2.59 2.59 0 0 0-2.59 2.59v3.16a0.750.75 0 0 1-1.5 0v-3.16a4.09 4.09 0 0 1 4.09-4.09h5.22Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcFileDirectorySymlink24;
