import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-rx-height",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RxHeight {
  readonly viewBox = "0 0 15 15";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M7.18 1.68C7.36 1.51 7.64 1.51 7.82 1.68L10.32 4.18C10.49 4.36 10.49 4.64 10.32 4.82C10.14 4.99 9.86 4.99 9.68 4.82L7.95 3.09L7.95 11.91L9.68 10.18C9.86 10.01 10.14 10.01 10.32 10.18C10.49 10.36 10.49 10.64 10.32 10.82L7.82 13.32C7.73 13.4 7.62 13.45 7.5 13.45C7.38 13.45 7.27 13.4 7.18 13.32L4.68 10.82C4.51 10.64 4.51 10.36 4.68 10.18C4.86 10.01 5.14 10.01 5.32 10.18L7.05 11.91L7.05 3.09L5.32 4.82C5.14 4.99 4.86 4.99 4.68 4.82C4.51 4.64 4.51 4.36 4.68 4.18L7.18 1.68Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RxHeight;
