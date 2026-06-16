import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-closed-caption-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtClosedCaptionOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M19 6H5v12h14V6zm-8 5H9.5v-0.5h-2v3h2V13H11v1c0 0.55-0.45 1-1 1H7c-0.55 0-1-0.45-1-1v-4c0-0.550.45-1 1-1h3c0.55 0 1 0.45 1 1v1zm7 0h-1.5v-0.5h-2v3h2V13H18v1c0 0.55-0.45 1-1 1h-3c-0.55 0-1-0.45-1-1v-4c0-0.550.45-1 1-1h3c0.55 0 1 0.45 1 1v1z","opacity":".3"}],["path",{"d":"M5 20h14c1.1 0 2-0.9 2-2V6c0-1.1-0.9-2-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2zM5 6h14v12H5V6z"}],["path",{"d":"M10 9H7c-0.55 0-1 0.45-1 1v4c0 0.550.45 1 1 1h3c0.55 0 1-0.45 1-1v-1H9.5v0.5h-2v-3h2v0.5H11v-1c0-0.55-0.45-1-1-1zm7 0h-3c-0.55 0-1 0.45-1 1v4c0 0.550.45 1 1 1h3c0.55 0 1-0.45 1-1v-1h-1.5v0.5h-2v-3h2v0.5H18v-1c0-0.55-0.45-1-1-1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtClosedCaptionOff;
