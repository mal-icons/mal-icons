import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-tv-options-edit-channels",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoTvOptionsEditChannels {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M60-330v-60h60v60H60Zm0-165v-60h60v60H60Zm0-165v-60h60v60H60Zm155 330v-60h161v60H215Zm0-165v-60h541v60H215Zm0-165v-60h541v60H215Zm406 500L456-328l43-43 123 125 235-235 43 42-279 279Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoTvOptionsEditChannels;
