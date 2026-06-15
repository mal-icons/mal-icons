import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-rx-width",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RxWidth {
  readonly viewBox = "0 0 15 15";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M4.82 4.68C4.99 4.86 4.99 5.14 4.82 5.32L3.09 7.05H11.91L10.18 5.32C10.01 5.14 10.01 4.86 10.18 4.68C10.36 4.51 10.64 4.51 10.82 4.68L13.32 7.18C13.49 7.36 13.49 7.64 13.32 7.82L10.82 10.32C10.64 10.49 10.36 10.49 10.18 10.32C10.01 10.14 10.01 9.86 10.18 9.68L11.91 7.95H3.09L4.82 9.68C4.99 9.86 4.99 10.14 4.82 10.32C4.64 10.49 4.36 10.49 4.18 10.32L1.68 7.82C1.51 7.64 1.51 7.36 1.68 7.18L4.18 4.68C4.36 4.51 4.64 4.51 4.82 4.68Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RxWidth;
