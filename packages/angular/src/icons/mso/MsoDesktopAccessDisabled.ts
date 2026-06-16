import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-desktop-access-disabled",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoDesktopAccessDisabled {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"m140-840 60 60h-60v480h455L28-866l43-43 790 789-43 43-163-163H540v100h86v60H334v-60h86v-100H140q-24 0-42-18t-18-42v-480q0-24 18.5-42t41.5-18Zm685 599-60-59h56v-480H285l-60-60h596q23 0 41.5 18.5T881-780v480q0 23.64-16.5 41.82T825-241ZM525-540Zm-158 13Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoDesktopAccessDisabled;
