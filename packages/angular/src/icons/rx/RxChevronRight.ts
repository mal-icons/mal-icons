import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-rx-chevron-right",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RxChevronRight {
  readonly viewBox = "0 0 15 15";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M6.16 3.14C6.36 2.95 6.68 2.96 6.87 3.16L10.62 7.16C10.8 7.35 10.8 7.65 10.62 7.84L6.87 11.84C6.68 12.04 6.36 12.05 6.16 11.86C5.96 11.68 5.95 11.36 6.14 11.16L9.57 7.5L6.14 3.84C5.95 3.64 5.96 3.32 6.16 3.14Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RxChevronRight;
