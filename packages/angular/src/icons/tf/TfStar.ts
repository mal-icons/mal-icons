import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tf-star",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TfStar {
  readonly viewBox = "0 0 17 17";
  readonly nodes: NodeTuple[] = [["path",{"d":"M16.65 7.02h-6.22l-1.92-5.92-1.92 5.92h-6.22l5.04 3.66-1.92 5.92 5.03-3.66 5.04 3.66-1.92-5.92 5.03-3.66zM11.63 13.98l-3.13-2.28-3.13 2.28 1.2-3.68-3.13-2.27h3.87l1.2-3.68 1.2 3.68h3.87l-3.13 2.28 1.2 3.69z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TfStar;
