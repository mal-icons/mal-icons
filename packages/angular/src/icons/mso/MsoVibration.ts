import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-vibration",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoVibration {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M0-365v-230h60v230H0Zm120 88v-406h60v406h-60Zm780-88v-230h60v230h-60Zm-120 88v-406h60v406h-60ZM300-120q-24.75 0-42.37-17.62T240-180v-600q0-24.75 17.63-42.37T300-840h360q24.75 0 42.38 17.63T720-780v600q0 24.75-17.62 42.38T660-120H300Zm0-60h360v-600H300v600Zm0 0v-600 600Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoVibration;
