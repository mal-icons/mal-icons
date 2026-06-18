import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bx-message-alt-add",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxMessageAltAdd {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3 16c0 1.10.9 2 2 2h3.59L12 21.41 15.41 18H19c1.1 0 2-0.9 2-2V4c0-1.1-0.9-2-2-2H5c-1.1 0-2 0.9-2 2v12zM5 4h14v12h-4.41L12 18.59 9.41 16H5V4z"}],["path",{"d":"M11 14h2v-3h3V9h-3V6h-2v3H8v2h3z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxMessageAltAdd;
