import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-gas-meter",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrGasMeter {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M320-80q-66 0-113-47t-47-113v-400q0-66 47-113t113-47h50v-50q0-12.75 8.68-21.37 8.68-8.62 21.5-8.62 12.83 0 21.33 8.63T430-850v50h100v-50q0-12.75 8.68-21.37 8.68-8.62 21.5-8.62 12.83 0 21.33 8.63T590-850v50h50q66 0 113 47t47 113v400q0 66-47 113T640-80H320Zm0-60h320q42 0 71-29t29-71v-400q0-42-29-71t-71-29H320q-42 0-71 29t-29 71v400q0 42 29 71t71 29Zm30-440h260q12.75 0 21.38-8.68 8.63-8.68 8.63-21.5 0-12.82-8.62-21.32T610-640H350q-12.75 0-21.37 8.68-8.62 8.68-8.62 21.5 0 12.83 8.63 21.33T350-580Zm130 315q33 0 56.5-23.5t23.5-55.93q0-20.57-9-35.07T514-426l-23-26q-5-5-11-5t-11 5l-23 26q-27.76 32.23-36.88 46.78Q400-364.68 400-344.23 400-312 423.5-288.5T480-265ZM220-740v600-600Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrGasMeter;
