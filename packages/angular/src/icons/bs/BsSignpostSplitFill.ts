import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-signpost-split-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsSignpostSplitFill {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M7 16h2V6h5a1 1 0 0 0 0.8-0.4l0.98-1.3a0.50.5 0 0 0 0-0.6L14.8 2.4A1 1 0 0 0 14 2H9v-0.59a1 1 0 0 0-2 0V7H2a1 1 0 0 0-0.80.4L0.23 8.7a0.50.5 0 0 0 0 0.6l0.98 1.3a1 1 0 0 0 0.80.4h5z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsSignpostSplitFill;
