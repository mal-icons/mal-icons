import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-folder",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsFolder {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M0.54 3.870.5 3a2 2 0 0 1 2-2h3.67a2 2 0 0 1 1.410.59l0.830.83A2 2 0 0 0 9.83 3h3.98a2 2 0 0 1 1.99 2.18l-0.64 7A2 2 0 0 1 13.17 14H2.83a2 2 0 0 1-1.99-1.82l-0.64-7a2 2 0 0 1 0.34-1.31zM2.19 4a1 1 0 0 0-1 1.09l0.64 7a1 1 0 0 0 10.91h10.35a1 1 0 0 0 1-0.91l0.64-7A1 1 0 0 0 13.81 4zm4.69-1.71A1 1 0 0 0 6.17 2H2.5a1 1 0 0 0-1 0.98l0.010.14q0.32-0.120.68-0.12h5.4z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsFolder;
