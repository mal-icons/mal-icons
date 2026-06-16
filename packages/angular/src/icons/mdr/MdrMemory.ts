import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-memory",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrMemory {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M14 9h-4c-0.55 0-1 0.45-1 1v4c0 0.550.45 1 1 1h4c0.55 0 1-0.45 1-1v-4c0-0.55-0.45-1-1-1zm-1 4h-2v-2h2v2zm8-3c0-0.55-0.45-1-1-1h-1V7c0-1.1-0.9-2-2-2h-2V4c0-0.55-0.45-1-1-1s-1 0.45-1 1v1h-2V4c0-0.55-0.45-1-1-1s-1 0.45-1 1v1H7c-1.1 0-2 0.9-2 2v2H4c-0.55 0-1 0.45-1 1s0.45 1 1 1h1v2H4c-0.55 0-1 0.45-1 1s0.45 1 1 1h1v2c0 1.10.9 2 2 2h2v1c0 0.550.45 1 1 1s1-0.45 1-1v-1h2v1c0 0.550.45 1 1 1s1-0.45 1-1v-1h2c1.1 0 2-0.9 2-2v-2h1c0.55 0 1-0.45 1-1s-0.45-1-1-1h-1v-2h1c0.55 0 1-0.45 1-1zm-5 7H8c-0.55 0-1-0.45-1-1V8c0-0.550.45-1 1-1h8c0.55 0 1 0.45 1 1v8c0 0.55-0.45 1-1 1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrMemory;
