import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-flex-wrap",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssFlexWrap {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M40-80v-360h240v360H40Zm320 0v-360h240v360H360Zm320 0v-360h240v360H680Zm-260-60h120v-240H420v240ZM40-520v-360h240v360H40Zm320 0v-360h240v360H360Zm320 0v-360h240v360H680Zm-580-60h120v-240H100v240Zm640 0h120v-240H740v240Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssFlexWrap;
