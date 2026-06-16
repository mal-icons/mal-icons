import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-screen-lock-landscape",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrScreenLockLandscape {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M21 5H3c-1.1 0-1.990.9-1.99 2L1 17c0 1.10.9 2 2 2h18c1.1 0 2-0.9 2-2V7c0-1.1-0.9-2-2-2zm-3 12H6V7h12v10zm-4-6v-1c0-1.1-0.9-2-2-2s-2 0.9-2 2v1c-0.55 0-1 0.45-1 1v3c0 0.550.45 1 1 1h4c0.55 0 1-0.45 1-1v-3c0-0.55-0.45-1-1-1zm-1 0h-2v-1c0-0.550.45-1 1-1s1 0.45 1 1v1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrScreenLockLandscape;
