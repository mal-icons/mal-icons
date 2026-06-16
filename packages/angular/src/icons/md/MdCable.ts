import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-md-cable",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdCable {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M20 5V4c0-0.55-0.45-1-1-1h-2c-0.55 0-1 0.45-1 1v1h-1v4c0 0.550.45 1 1 1h1v7c0 1.1-0.9 2-2 2s-2-0.9-2-2V7c0-2.21-1.79-4-4-4S5 4.79 5 7v7H4c-0.55 0-1 0.45-1 1v4h1v1c0 0.550.45 1 1 1h2c0.55 0 1-0.45 1-1v-1h1v-4c0-0.55-0.45-1-1-1H7V7c0-1.10.9-2 2-2s2 0.9 2 2v10c0 2.21 1.79 4 4 4s4-1.79 4-4v-7h1c0.55 0 1-0.45 1-1V5h-1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdCable;
