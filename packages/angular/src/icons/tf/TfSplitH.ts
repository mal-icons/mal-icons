import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tf-split-h",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TfSplitH {
  readonly viewBox = "0 0 17 17";
  readonly nodes: NodeTuple[] = [["path",{"d":"M2.21 8h3.77v1h-3.77l1.65 1.65-0.71 0.71-2.85-2.85 2.85-2.85 0.71 0.71-1.65 1.65zM13.85 5.65l-0.71 0.71 1.65 1.65h-3.77v1h3.77l-1.65 1.65 0.71 0.71 2.85-2.85-2.85-2.85zM8 17h1v-17h-1v17z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TfSplitH;
