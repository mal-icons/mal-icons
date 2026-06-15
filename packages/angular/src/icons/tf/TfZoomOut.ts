import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tf-zoom-out",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TfZoomOut {
  readonly viewBox = "0 0 17 17";
  readonly nodes: NodeTuple[] = [["path",{"d":"M16.6 15.87l-5.17-5.17c0.98-1.14 1.57-2.61 1.57-4.22 0-3.58-2.92-6.5-6.5-6.5-1.74 0-3.37 0.68-4.6 1.9-1.23 1.23-1.9 2.86-1.9 4.6 0 3.58 2.92 6.5 6.5 6.5 1.61 0 3.09-0.59 4.22-1.57l5.17 5.17 0.71-0.71zM6.5 11.97c-3.03 0-5.5-2.47-5.5-5.50-1.47 0.57-2.85 1.61-3.89 1.04-1.04 2.42-1.61 3.89-1.61 3.03 0 5.5 2.47 5.5 5.5 0 3.03-2.47 5.5-5.5 5.5zM4 5.97h5v1h-5v-1z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TfZoomOut;
