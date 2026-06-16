import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-speaker",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoSpeaker {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M700-80H260q-24.75 0-42.37-17.62T200-140v-680q0-24.75 17.63-42.37T260-880h440q24.75 0 42.38 17.63T760-820v680q0 24.75-17.62 42.38T700-80Zm0-60v-680H260v680h440ZM481-604q32 0 54-22t22-54q0-32-22-54t-54-22q-32 0-54 22t-22 54q0 32 22 54t54 22Zm-1 408q69 0 116.5-47.5T644-360q0-69-47.5-116.5T480-524q-69 0-116.5 47.5T316-360q0 69 47.5 116.5T480-196Zm-0.07-60Q437-256 406.5-286.57t-30.5-73.5Q376-403 406.57-433.5t73.5-30.5Q523-464 553.5-433.43t30.5 73.5Q584-317 553.43-286.5t-73.5 30.5ZM260-820v680-680Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoSpeaker;
