import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-desktop-mac",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrDesktopMac {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M21 2H3c-1.1 0-2 0.9-2 2v12c0 1.10.9 2 2 2h7l-1.63 2.45c-0.440.660.03 1.550.83 1.55h5.6c0.8 0 1.28-0.890.83-1.55L14 18h7c1.1 0 2-0.9 2-2V4c0-1.1-0.9-2-2-2zm0 12H3V5c0-0.550.45-1 1-1h16c0.55 0 1 0.45 1 1v9z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrDesktopMac;
