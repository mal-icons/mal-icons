import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-remove-from-queue",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrRemoveFromQueue {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M21 3H3c-1.1 0-2 0.9-2 2v12c0 1.10.9 2 2 2h5v1c0 0.550.45 1 1 1h6c0.55 0 1-0.45 1-1v-1h5c1.1 0 2-0.9 2-2V5a2 2 0 0 0-2-2zm-1 14H4c-0.55 0-1-0.45-1-1V6c0-0.550.45-1 1-1h16c0.55 0 1 0.45 1 1v10c0 0.55-0.45 1-1 1zm-4-6c0 0.55-0.45 1-1 1H9c-0.55 0-1-0.45-1-1s0.45-1 1-1h6c0.55 0 1 0.45 1 1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrRemoveFromQueue;
