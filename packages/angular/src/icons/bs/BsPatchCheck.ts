import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-patch-check",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsPatchCheck {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","d":"M10.35 6.15a0.50.5 0 0 1 0 0.71l-3 3a0.50.5 0 0 1-0.71 0l-1.5-1.5a0.50.5 0 1 1 0.71-0.71L7 8.79l2.65-2.65a0.50.5 0 0 1 0.71 0"}],["path",{"d":"m10.27 2.51-0.92-0.940.72-0.70.620.640.89-0.01a2.89 2.89 0 0 1 2.92 2.92l-0.010.890.640.62a2.89 2.89 0 0 1 0 4.13l-0.640.620.010.89a2.89 2.89 0 0 1-2.92 2.92l-0.89-0.01-0.620.64a2.89 2.89 0 0 1-4.13 0l-0.62-0.64-0.890.01a2.89 2.89 0 0 1-2.92-2.92l0.01-0.89-0.64-0.62a2.89 2.89 0 0 1 0-4.13l0.64-0.62-0.01-0.89a2.89 2.89 0 0 1 2.92-2.92l0.890.010.62-0.64a2.89 2.89 0 0 1 4.13 0l-0.710.7a1.89 1.89 0 0 0-2.7 0l-0.920.94-1.32-0.02a1.89 1.89 0 0 0-1.91 1.91l0.02 1.32-0.940.92a1.89 1.89 0 0 0 0 2.7l0.940.92-0.02 1.32a1.89 1.89 0 0 0 1.91 1.91l1.32-0.020.920.94a1.89 1.89 0 0 0 2.7 0l0.92-0.94 1.320.02a1.89 1.89 0 0 0 1.91-1.91l-0.02-1.320.94-0.92a1.89 1.89 0 0 0 0-2.7l-0.94-0.920.02-1.32a1.89 1.89 0 0 0-1.91-1.91z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsPatchCheck;
