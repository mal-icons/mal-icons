import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-rx-caret-left",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RxCaretLeft {
  readonly viewBox = "0 0 15 15";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M8.82 4.18C8.99 4.36 8.99 4.64 8.82 4.82L6.14 7.5L8.82 10.18C8.99 10.36 8.99 10.64 8.82 10.82C8.64 10.99 8.36 10.99 8.18 10.82L5.18 7.82C5.1 7.73 5.05 7.62 5.05 7.5C5.05 7.38 5.1 7.27 5.18 7.18L8.18 4.18C8.36 4.01 8.64 4.01 8.82 4.18Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RxCaretLeft;
