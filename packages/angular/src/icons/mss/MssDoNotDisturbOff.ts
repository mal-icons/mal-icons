import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-do-not-disturb-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssDoNotDisturbOff {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"m593-453-60-60h147v60h-87ZM813-61l-95-95q-50 36-110 56T480-80q-85 0-158-30.5T195-195q-54-54-84.5-127T80-480q0-68 20-128t56-110l-95-95 43-43 752 752-43 43Zm-9-181-43-43q28-42 43.5-91T820-480q0-145-97.5-242.5T480-820q-55 0-104 15.5T285-761l-43-43q50-36 110-56t128-20q84 0 157 31t127 85q54 54 85 127t31 157q0 68-20 128t-56 110Zm-129 43L427-453H280v-60h87L199-675q-28 42-43.5 91T140-480q0 145 97.5 242.5T480-140q55 0 104-15.5t91-43.5ZM533-513Zm-96 76Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssDoNotDisturbOff;
