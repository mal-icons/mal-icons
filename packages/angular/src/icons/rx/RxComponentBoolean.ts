import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-rx-component-boolean",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RxComponentBoolean {
  readonly viewBox = "0 0 15 15";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M7.85 1.49C7.66 1.29 7.34 1.29 7.15 1.49L1.49 7.15C1.29 7.34 1.29 7.66 1.49 7.85L7.15 13.51C7.34 13.71 7.66 13.71 7.85 13.51L13.51 7.85C13.71 7.66 13.71 7.34 13.51 7.15L7.85 1.49ZM7.5 2.55L2.55 7.5L7.5 12.45V2.55Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RxComponentBoolean;
