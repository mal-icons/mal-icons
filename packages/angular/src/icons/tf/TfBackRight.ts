import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tf-back-right",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TfBackRight {
  readonly viewBox = "0 0 17 17";
  readonly nodes: NodeTuple[] = [["path",{"d":"M14.58 15v1h-7.08c-3.03 0-5.5-2.47-5.5-5.5s2.47-5.5 5.5-5.5h2.91l-2.65-2.65 0.71-0.71 3.85 3.85-3.85 3.85-0.71-0.71 2.65-2.65h-2.91c-2.48 0-4.5 2.02-4.5 4.5s2.02 4.5 4.5 4.5h7.08z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TfBackRight;
