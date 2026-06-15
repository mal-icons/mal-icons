import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-rx-component-none",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RxComponentNone {
  readonly viewBox = "0 0 15 15";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M7.85 1.49C7.66 1.29 7.34 1.29 7.15 1.49L1.49 7.15C1.29 7.34 1.29 7.66 1.49 7.85L3.96 10.33L1.65 12.65C1.45 12.84 1.45 13.16 1.65 13.35C1.84 13.55 2.16 13.55 2.35 13.35L4.67 11.04L7.15 13.51C7.34 13.71 7.66 13.71 7.85 13.51L13.51 7.85C13.71 7.66 13.71 7.34 13.51 7.15L11.04 4.67L13.35 2.35C13.55 2.16 13.55 1.84 13.35 1.65C13.16 1.45 12.84 1.45 12.65 1.65L10.33 3.96L7.85 1.49ZM9.62 4.67L7.5 2.55L2.55 7.5L4.67 9.62L9.62 4.67ZM5.38 10.33L7.5 12.45L12.45 7.5L10.33 5.38L5.38 10.33Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RxComponentNone;
