import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-await",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiAwait {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 0c5.52 0 10 4.48 10 10v9a3.13 3.13 0 0 1-4.69 2.7A3.13 3.13 0 0 1 12 23a3.13 3.13 0 0 1-5.31-1.3A3.13 3.13 0 0 1 2 19v-9C2 4.48 6.48 0 12 0m-1.25 10.63a0.630.63 0 0 0-0.620.63 1.88 1.88 0 0 0 3.75 0 0.630.63 0 0 0-0.62-0.62zm-1.87-5c-0.69 0-1.250.56-1.25 1.25v1.25a1.25 1.25 0 0 0 2.5 0v-1.25c0-0.69-0.56-1.25-1.25-1.25m6.25 0c-0.69 0-1.250.56-1.25 1.25v1.25a1.25 1.25 0 0 0 2.5 0v-1.25c0-0.69-0.56-1.25-1.25-1.25"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiAwait;
