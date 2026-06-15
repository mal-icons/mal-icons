import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tf-envelope",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TfEnvelope {
  readonly viewBox = "0 0 17 17";
  readonly nodes: NodeTuple[] = [["path",{"d":"M2 0v17h13v-17h-13zM4.7 4l-1.41-3h10.43l-1.41 3h-7.61zM4.06 5h3.94v9h-4l-1 1.16v-12.41l1.06 2.26zM4.46 15h8.09l0.86 1h-9.82l0.86-1zM13.01 14h-4.01v-9h3.94l1.06-2.26v12.42l-0.99-1.15z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TfEnvelope;
