import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-folder-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrFolderOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M2.81 2.81a11 0 0 0-1.41 0C1 3.2 1 3.83 1.39 4.22l0.850.85c-0.140.28-0.230.59-0.230.93L2 18c0 1.10.9 2 2 2h13.17l2.61 2.61a11 0 1 0 1.41-1.41L2.81 2.81zM20 6h-8l-1.41-1.41C10.21 4.21 9.7 4 9.17 4H6.83l14.93 14.93c0.15-0.280.24-0.590.24-0.93V8c0-1.1-0.9-2-2-2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrFolderOff;
