import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mds-screen-lock-portrait",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdsScreenLockPortrait {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M9 16h6v-5h-1v-0.9c0-1-0.69-1.92-1.68-2.08C11.07 7.83 10 8.79 10 10v1H9v5zm1.8-6c0-0.660.54-1.2 1.2-1.2s1.20.54 1.2 1.2v1h-2.4v-1zM19 1H5v22h14V1zm-2 18H7V5h10v14z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdsScreenLockPortrait;
