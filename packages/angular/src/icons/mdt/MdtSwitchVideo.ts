import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-switch-video",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtSwitchVideo {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4 17h12V7H4v10zm4-8v2h4V9l3 3-3 3v-2H8v2l-3-3 3-3z","opacity":".3"}],["path",{"d":"M8 13h4v2l3-3-3-3v2H8V9l-3 3 3 3zm10-3.5V6c0-0.55-0.45-1-1-1H3c-0.55 0-1 0.45-1 1v12c0 0.550.45 1 1 1h14c0.55 0 1-0.45 1-1v-3.5l4 4v-13l-4 4zM16 17H4V7h12v10z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtSwitchVideo;
