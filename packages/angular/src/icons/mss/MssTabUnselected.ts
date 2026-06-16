import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-tab-unselected",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssTabUnselected {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M568-160v-60h82v60h-82ZM310-740v-60h83v60h-83Zm170 174v-234h400v234H480Zm258 406v-60h82v-85h60v145H738Zm-340 0v-60h82v60h-82Zm422-233v-85h60v85h-60ZM80-309v-85h60v85H80Zm0-173v-85h60v85H80Zm0 322v-60h60v60H80Zm0-495v-145h143v60h-83v85H80Zm148 495v-60h82v60h-82Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssTabUnselected;
