import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-settings-input-hdmi",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoSettingsInputHdmi {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M320-80v-120L200-439v-241h40v-140q0-23 18.5-41.5T300-880h360q23 0 41.5 18.5T720-820v140h40v241L640-200v120H320Zm-20-600h98v-82h34v82h96v-82h34v82h98v-140H300v140Zm80 540h200v-75l120-241v-164H260v164l120 241v75Zm100-240Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoSettingsInputHdmi;
