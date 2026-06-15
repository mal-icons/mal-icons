import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tf-zoom-in",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TfZoomIn {
  readonly viewBox = "0 0 17 17";
  readonly nodes: NodeTuple[] = [["path",{"d":"M16.6 15.9l-5.17-5.17c0.98-1.14 1.57-2.61 1.57-4.22 0-3.58-2.92-6.5-6.5-6.5-1.74 0-3.37 0.68-4.6 1.9-1.23 1.23-1.9 2.86-1.9 4.6 0 3.58 2.92 6.5 6.5 6.5 1.61 0 3.09-0.59 4.22-1.57l5.17 5.17 0.71-0.71zM6.5 12c-3.03 0-5.5-2.47-5.5-5.5 0-1.47 0.57-2.85 1.61-3.89 1.04-1.04 2.42-1.61 3.89-1.61 3.03 0 5.5 2.47 5.5 5.5 0 3.03-2.47 5.5-5.5 5.5zM7 6h2v1h-2v2h-1v-2h-2v-1h2v-2h1v2z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TfZoomIn;
