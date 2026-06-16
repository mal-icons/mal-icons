import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-md-closed-caption-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdClosedCaptionOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M19 4H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14c1.1 0 2-0.9 2-2V6c0-1.1-0.9-2-2-2zm0 14H5V6h14v12z"}],["path",{"d":"M7 15h3c0.55 0 1-0.45 1-1v-1H9.5v0.5h-2v-3h2v0.5H11v-1c0-0.55-0.45-1-1-1H7c-0.55 0-1 0.45-1 1v4c0 0.550.45 1 1 1zm7 0h3c0.55 0 1-0.45 1-1v-1h-1.5v0.5h-2v-3h2v0.5H18v-1c0-0.55-0.45-1-1-1h-3c-0.55 0-1 0.45-1 1v4c0 0.550.45 1 1 1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdClosedCaptionOff;
