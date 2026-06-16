import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-settings-input-hdmi",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtSettingsInputHdmi {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8 9H7v3.53l2.79 5.580.210.42V20h4v-1.47l0.21-0.42L17 12.53V9h-1z","opacity":".3"}],["path",{"d":"M18 7V4c0-1.1-0.9-2-2-2H8c-1.1 0-2 0.9-2 2v3H5v6l3 6v3h8v-3l3-6V7h-1zM8 4h8v3h-2.01V5h-1v2H11V5h-1v2H8V4zm9 8.53-3 6V20h-4v-1.47l-3-6V9h10v3.53z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtSettingsInputHdmi;
