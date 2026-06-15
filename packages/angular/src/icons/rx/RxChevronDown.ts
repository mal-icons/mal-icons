import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-rx-chevron-down",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RxChevronDown {
  readonly viewBox = "0 0 15 15";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M3.14 6.16C3.32 5.96 3.64 5.95 3.84 6.14L7.5 9.56L11.16 6.14C11.36 5.95 11.68 5.96 11.86 6.16C12.05 6.36 12.04 6.68 11.84 6.86L7.84 10.61C7.65 10.8 7.35 10.8 7.16 10.61L3.16 6.86C2.96 6.68 2.95 6.36 3.14 6.16Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RxChevronDown;
