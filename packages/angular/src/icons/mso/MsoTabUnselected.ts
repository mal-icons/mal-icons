import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-tab-unselected",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoTabUnselected {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M140-160q-24 0-42-18t-18-42h60v60ZM80-309v-85h60v85H80Zm0-173v-85h60v85H80Zm0-173v-85q0-24 18-42t42-18h83v60h-83v85H80Zm148 495v-60h82v60h-82Zm82-580v-60h83v60h-83Zm88 580v-60h82v60h-82Zm82-406v-234h340q24 0 42 18t18 42v174H480Zm88 406v-60h82v60h-82Zm170 0v-60h82v-85h60v85q0 24-18 42t-42 18h-82Zm82-233v-85h60v85h-60Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoTabUnselected;
