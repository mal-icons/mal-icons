import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-sim-card",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrSimCard {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M19.99 4c0-1.1-0.89-2-1.99-2h-7.17c-0.53 0-1.040.21-1.420.59L4.59 7.41C4.21 7.79 4 8.3 4 8.83V20c0 1.10.9 2 2 2h12.01c1.1 0 1.99-0.9 1.99-2l-0.01-16zM8 19c-0.55 0-1-0.45-1-1s0.45-1 1-1 1 0.45 1 1-0.45 1-1 1zm8 0c-0.55 0-1-0.45-1-1s0.45-1 1-1 1 0.45 1 1-0.45 1-1 1zm-8-4c-0.55 0-1-0.45-1-1v-2c0-0.550.45-1 1-1s1 0.45 1 1v2c0 0.55-0.45 1-1 1zm4 4c-0.55 0-1-0.45-1-1v-2c0-0.550.45-1 1-1s1 0.45 1 1v2c0 0.55-0.45 1-1 1zm0-6c-0.55 0-1-0.45-1-1s0.45-1 1-1 1 0.45 1 1-0.45 1-1 1zm4 2c-0.55 0-1-0.45-1-1v-2c0-0.550.45-1 1-1s1 0.45 1 1v2c0 0.55-0.45 1-1 1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrSimCard;
