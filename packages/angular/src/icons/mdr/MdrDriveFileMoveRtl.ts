import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-drive-file-move-rtl",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrDriveFileMoveRtl {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M20 6h-8l-1.41-1.41C10.21 4.21 9.7 4 9.17 4H4c-1.1 0-2 0.9-2 2v12c0 1.10.9 2 2 2h16c1.1 0 2-0.9 2-2V8c0-1.1-0.9-2-2-2zm-8.85 10.15-2.79-2.79c-0.2-0.2-0.2-0.51 0-0.71l2.79-2.79c0.31-0.320.85-0.10.850.35V12h3c0.55 0 1 0.45 1 1s-0.45 1-1 1h-3v1.79a0.50.5 0 0 1-0.850.36z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrDriveFileMoveRtl;
