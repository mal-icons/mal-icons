import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bx-border-radius",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxBorderRadius {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M19 19h2v2h-2zM7 19h2v2H7zm8 0h2v2h-2zm-4 0h2v2h-2zm-8 0h2v2H3zm0-4h2v2H3zm0-8h2v2H3zm0 4h2v2H3zm0-8h2v2H3zm4 0h2v2H7zm12 12h2v2h-2zM16 3h-5v2h5c1.65 0 3 1.35 3 3v5h2V8c0-2.76-2.24-5-5-5z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxBorderRadius;
