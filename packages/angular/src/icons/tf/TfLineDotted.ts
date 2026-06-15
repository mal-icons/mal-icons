import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tf-line-dotted",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TfLineDotted {
  readonly viewBox = "0 0 17 17";
  readonly nodes: NodeTuple[] = [["path",{"d":"M0 8h0.5v1h-0.5v-1zM2.38 9h0.94v-1h-0.94v1zM5.21 9h0.94v-1h-0.94v1zM10.85 9h0.94v-1h-0.94v1zM8.03 9h0.94v-1h-0.94v1zM13.68 9h0.94v-1h-0.94v1zM16.5 8v1h0.5v-1h-0.5z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TfLineDotted;
