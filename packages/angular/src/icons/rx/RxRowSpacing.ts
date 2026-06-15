import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-rx-row-spacing",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RxRowSpacing {
  readonly viewBox = "0 0 15 15";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M7.82 0.68C7.64 0.51 7.36 0.51 7.18 0.68L5.18 2.68C5.01 2.86 5.01 3.14 5.18 3.32C5.36 3.49 5.64 3.49 5.82 3.32L7.05 2.09L7.05 5.5C7.05 5.75 7.25 5.95 7.5 5.95C7.75 5.95 7.95 5.75 7.95 5.5L7.95 2.09L9.18 3.32C9.36 3.49 9.64 3.49 9.82 3.32C9.99 3.14 9.99 2.86 9.82 2.68L7.82 0.68ZM7.95 12.91V9.5C7.95 9.25 7.75 9.05 7.5 9.05C7.25 9.05 7.05 9.25 7.05 9.5V12.91L5.82 11.68C5.64 11.51 5.36 11.51 5.18 11.68C5.01 11.86 5.01 12.14 5.18 12.32L7.18 14.32C7.27 14.4 7.38 14.45 7.5 14.45C7.62 14.45 7.73 14.4 7.82 14.32L9.82 12.32C9.99 12.14 9.99 11.86 9.82 11.68C9.64 11.51 9.36 11.51 9.18 11.68L7.95 12.91ZM1.5 7C1.22 7 1 7.22 1 7.5C1 7.78 1.22 8 1.5 8L13.5 8C13.78 8 14 7.78 14 7.5C14 7.22 13.78 7 13.5 7L1.5 7Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RxRowSpacing;
