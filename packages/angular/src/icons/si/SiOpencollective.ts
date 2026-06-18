import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-opencollective",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiOpencollective {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12c2.54 0 4.89-0.79 6.83-2.13l-3.11-3.11a7.72 7.72 0 1 1 0-13.51l3.11-3.11A11.94 11.94 0 0 0 12 0zm9.87 5.17l-3.11 3.11A7.67 7.67 0 0 1 19.72 12a7.68 7.68 0 0 1-0.96 3.73l3.11 3.11A11.94 11.94 0 0 0 24 12c0-2.54-0.79-4.89-2.13-6.83z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiOpencollective;
