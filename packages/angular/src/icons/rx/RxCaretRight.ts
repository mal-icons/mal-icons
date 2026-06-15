import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-rx-caret-right",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RxCaretRight {
  readonly viewBox = "0 0 15 15";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M6.18 4.18C6.36 4.01 6.64 4.01 6.82 4.18L9.82 7.18C9.9 7.27 9.95 7.38 9.95 7.5C9.95 7.62 9.9 7.73 9.82 7.82L6.82 10.82C6.64 10.99 6.36 10.99 6.18 10.82C6.01 10.64 6.01 10.36 6.18 10.18L8.86 7.5L6.18 4.82C6.01 4.64 6.01 4.36 6.18 4.18Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RxCaretRight;
