import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-stoplights",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsStoplights {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m0 4a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m1.5 2.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"}],["path",{"d":"M4 2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2h2c-0.170.5-0.8 1.6-2 2v2h2c-0.170.5-0.8 1.6-2 2v2h2c-0.170.5-0.8 1.6-2 2v1a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-1c-1.2-0.4-1.83-1.5-2-2h2V8c-1.2-0.4-1.83-1.5-2-2h2V4c-1.2-0.4-1.83-1.5-2-2zm2-1a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsStoplights;
