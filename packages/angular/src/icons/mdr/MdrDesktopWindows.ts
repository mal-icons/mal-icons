import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-desktop-windows",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrDesktopWindows {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M21 2H3c-1.1 0-2 0.9-2 2v12c0 1.10.9 2 2 2h7v2H9c-0.55 0-1 0.45-1 1s0.45 1 1 1h6c0.55 0 1-0.45 1-1s-0.45-1-1-1h-1v-2h7c1.1 0 2-0.9 2-2V4c0-1.1-0.9-2-2-2zm-1 14H4c-0.55 0-1-0.45-1-1V5c0-0.550.45-1 1-1h16c0.55 0 1 0.45 1 1v10c0 0.55-0.45 1-1 1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrDesktopWindows;
