import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-settings-voice",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtSettingsVoice {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 11c0.56 0 0.99-0.440.99-1L13 4c0-0.55-0.45-1-1-1s-1 0.45-1 1v6c0 0.550.45 1 1 1z","opacity":".3"}],["path",{"d":"M7 22h2v2H7zm5-9c1.66 0 2.99-1.34 2.99-3L15 4c0-1.66-1.34-3-3-3S9 2.34 9 4v6c0 1.66 1.34 3 3 3zm-1-9c0-0.550.45-1 1-1s1 0.45 1 1v6c0 0.56-0.44 1-1 1-0.55 0-1-0.45-1-1V4zm0 18h2v2h-2zm4 0h2v2h-2zm4-12h-1.7c0 3-2.54 5.1-5.3 5.1S6.7 13 6.7 10H5c0 3.41 2.72 6.23 6 6.72V20h2v-3.28c3.28-0.49 6-3.31 6-6.72z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtSettingsVoice;
