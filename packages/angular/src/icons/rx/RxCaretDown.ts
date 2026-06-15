import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-rx-caret-down",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RxCaretDown {
  readonly viewBox = "0 0 15 15";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M4.18 6.18C4.36 6.01 4.64 6.01 4.82 6.18L7.5 8.86L10.18 6.18C10.36 6.01 10.64 6.01 10.82 6.18C10.99 6.36 10.99 6.64 10.82 6.82L7.82 9.82C7.73 9.9 7.62 9.95 7.5 9.95C7.38 9.95 7.27 9.9 7.18 9.82L4.18 6.82C4.01 6.64 4.01 6.36 4.18 6.18Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RxCaretDown;
