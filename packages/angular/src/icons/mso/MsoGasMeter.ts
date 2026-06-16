import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-gas-meter",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoGasMeter {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M320-80q-66 0-113-47t-47-113v-400q0-66 47-113t113-47h50v-80h60v80h100v-80h60v80h50q66 0 113 47t47 113v400q0 66-47 113T640-80H320Zm0-60h320q42 0 71-29t29-71v-400q0-42-29-71t-71-29H320q-42 0-71 29t-29 71v400q0 42 29 71t71 29Zm0-440h320v-60H320v60Zm160 315q33 0 56.5-23.5T560-344q0-26-15-45t-65-76q-50 58-65 76.5T400-344q0 32 23.5 55.5T480-265ZM220-740v600-600Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoGasMeter;
