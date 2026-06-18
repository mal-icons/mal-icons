import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bx-message-alt-dots",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxMessageAltDots {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M19 2H5c-1.1 0-2 0.9-2 2v12c0 1.10.9 2 2 2h3.59L12 21.41 15.41 18H19c1.1 0 2-0.9 2-2V4c0-1.1-0.9-2-2-2zm0 14h-4.41L12 18.59 9.41 16H5V4h14v12z"}],["circle",{"cx":"15","cy":"10","r":"2"}],["circle",{"cx":"9","cy":"10","r":"2"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxMessageAltDots;
