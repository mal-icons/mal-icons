import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tf-pin-alt",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TfPinAlt {
  readonly viewBox = "0 0 17 17";
  readonly nodes: NodeTuple[] = [["path",{"d":"M5.4 10.89l0.71 0.71-5.26 5.26-0.71-0.71 5.26-5.26zM17 6.22l-2.19 0.64-3.68 5.25 0.43 1.12-1.55 1.56-7.78-7.78 1.56-1.56 1.12 0.43 5.25-3.68 0.25-0.85 0.39-1.34 6.22 6.22zM15.1 5.73l-3.83-3.83-0.16 0.57-0.1 0.34-5.97 4.19-1.01-0.39-0.39 0.39 6.36 6.36 0.39-0.39-0.19-0.51-0.19-0.5 0.31-0.44 3.88-5.53 0.34-0.1 0.57-0.16z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TfPinAlt;
