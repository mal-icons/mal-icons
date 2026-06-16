import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-female",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoFemale {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M450-120v-80h-80v-60h80v-102q-82-11-136-73.71T260-581q0-91.42 64.5-155.21Q389-800 480-800t155.5 63.79Q700-672.42 700-581q0 82.59-54 145.29Q592-373 510-362v102h80v60h-80v80h-60Zm29.8-300Q546-420 593-466.8t47-113Q640-646 593.2-693t-113-47Q414-740 367-693.2t-47 113Q320-514 366.8-467t113 47Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoFemale;
