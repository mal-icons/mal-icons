import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-sd-card",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoSdCard {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M383-528h60v-157h-60v157Zm119 0h60v-157h-60v157Zm119 0h60v-157h-60v157ZM220-80q-24 0-42-18t-18-42v-501l239-239h341q24 0 42 18t18 42v680q0 24-18 42t-42 18H220Zm0-60h520v-680H426L220-613.87V-140Zm0 0h520-520Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoSdCard;
