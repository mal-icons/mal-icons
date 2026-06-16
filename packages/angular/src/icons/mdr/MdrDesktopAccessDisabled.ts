import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-desktop-access-disabled",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrDesktopAccessDisabled {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M0.31 2a11 0 0 0 0 1.41l0.690.68V16c0 1.10.9 2 2 2h7v2H9c-0.55 0-1 0.45-1 1s0.45 1 1 1h6c0.55 0 1-0.45 1-1s-0.45-1-1-1h-1v-2h0.9l5.29 5.29a11 0 1 0 1.41-1.41L1.72 2A11 0 0 0 0.31 2zm2.68 13V6.09L12.9 16H3.99c-0.55 0-1-0.45-1-1zM4.55 2l2 2H20c0.55 0 1 0.45 1 1v10c0 0.55-0.45 1-1 1h-1.45l2 2h0.44c1.1 0 2-0.9 2-2V4c0-1.1-0.9-2-2-2H4.55z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrDesktopAccessDisabled;
