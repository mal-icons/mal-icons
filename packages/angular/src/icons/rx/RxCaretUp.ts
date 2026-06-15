import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-rx-caret-up",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RxCaretUp {
  readonly viewBox = "0 0 15 15";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M4.18 8.82C4.01 8.64 4.01 8.36 4.18 8.18L7.18 5.18C7.27 5.1 7.38 5.05 7.5 5.05C7.62 5.05 7.73 5.1 7.82 5.18L10.82 8.18C10.99 8.36 10.99 8.64 10.82 8.82C10.64 8.99 10.36 8.99 10.18 8.82L7.5 6.14L4.82 8.82C4.64 8.99 4.36 8.99 4.18 8.82Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RxCaretUp;
