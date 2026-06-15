import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tf-split-v",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TfSplitV {
  readonly viewBox = "0 0 17 17";
  readonly nodes: NodeTuple[] = [["path",{"d":"M10.65 13.15l0.71 0.71-2.85 2.85-2.85-2.85 0.71-0.71 1.65 1.65v-3.77h1v3.77l1.65-1.65zM8 2.21v3.77h1v-3.77l1.65 1.65 0.71-0.71-2.85-2.85-2.85 2.85 0.71 0.71 1.65-1.65zM0 8v1h17v-1h-17z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TfSplitV;
