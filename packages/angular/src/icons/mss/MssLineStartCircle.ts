import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-line-start-circle",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssLineStartCircle {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M320-300q75 0 127.5-52.5T500-480q0-75-52.5-127.5T320-660q-75 0-127.5 52.5T140-480q0 75 52.5 127.5T320-300Zm0 60q-100 0-170-70T80-480q0-100 70-170t170-70q92 0 159.5 60.5T558-510h322v60H558q-11 89-78.5 149.5T320-240Zm0-240Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssLineStartCircle;
