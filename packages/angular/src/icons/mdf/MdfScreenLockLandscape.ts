import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdf-screen-lock-landscape",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdfScreenLockLandscape {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M21 5H3c-1.1 0-2 0.9-2 2v10c0 1.10.9 2 2 2h18c1.1 0 2-0.9 2-2V7c0-1.1-0.9-2-2-2zm-2 12H5V7h14v10zm-9-1h4c0.55 0 1-0.45 1-1v-3c0-0.55-0.45-1-1-1v-1a2 2 0 1 0-4 0v1c-0.55 0-1 0.45-1 1v3c0 0.550.45 1 1 1zm0.8-6c0-0.660.54-1.2 1.2-1.20.66 0 1.20.54 1.2 1.2v1h-2.4v-1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdfScreenLockLandscape;
