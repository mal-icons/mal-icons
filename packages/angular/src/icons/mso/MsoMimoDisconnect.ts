import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-mimo-disconnect",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoMimoDisconnect {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"m138-840 59 60h-57v480h455L28-866l43-42 781 788-32 43-168-163 48 46v74H260v-73l47-47H140q-24 0-42-18t-18-42v-480q0-24 17.5-42t40.5-18Zm687 600-60-60h55v-480H285l-60-60h595q23 0 41.5 18.5T880-780v480q0 22.85-16.5 40.42T825-240ZM525-540Zm-158 13Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoMimoDisconnect;
