import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-wi-hurricane-warning",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class WiHurricaneWarning {
  readonly viewBox = "0 0 30 30";
  readonly nodes: NodeTuple[] = [["path",{"d":"M7.8,24.6V7.45h1.13V24.6H7.8z M9.73,21.52v-6.6h8.55v6.6H9.73z M9.73,14.05v-6.6h8.55v6.6H9.73z M12.09,19.52h3.81v-2.51 h-3.81V19.52z M12.09,12.05h3.81v-2.5h-3.81V12.05z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default WiHurricaneWarning;
