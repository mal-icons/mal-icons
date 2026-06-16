import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-tour",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssTour {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M200-80v-800h60v84h580l-81 193 81 193H260v330h-60Zm60-656v266-266Zm241.21 205Q531-531 552-552.21q21-21.21 21-51Q573-633 551.79-654q-21.21-21-51-21Q471-675 450-653.79q-21 21.21-21 51Q429-573 450.21-552q21.21 21 51 21ZM260-470h491l-55-133 55-133H260v266Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssTour;
