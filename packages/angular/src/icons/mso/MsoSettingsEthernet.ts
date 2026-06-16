import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-settings-ethernet",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoSettingsEthernet {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"m680-240-42-42 196-198-196-198 42-42 240 240-240 240Zm-400 0L40-480l240-240 42 42-196 198 196 198-42 42Zm40-205q-14 0-24.5-10.5T285-480q0-14 10.5-24.5T320-515q14 0 24.5 10.5T355-480q0 14-10.5 24.5T320-445Zm160 0q-14 0-24.5-10.5T445-480q0-14 10.5-24.5T480-515q14 0 24.5 10.5T515-480q0 14-10.5 24.5T480-445Zm160 0q-14 0-24.5-10.5T605-480q0-14 10.5-24.5T640-515q14 0 24.5 10.5T675-480q0 14-10.5 24.5T640-445Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoSettingsEthernet;
