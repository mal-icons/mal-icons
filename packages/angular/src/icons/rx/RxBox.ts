import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-rx-box",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RxBox {
  readonly viewBox = "0 0 15 15";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M12.5 2H2.5C2.22 2 2 2.22 2 2.5V12.5C2 12.78 2.22 13 2.5 13H12.5C12.78 13 13 12.78 13 12.5V2.5C13 2.22 12.78 2 12.5 2ZM2.5 1C1.67 1 1 1.67 1 2.5V12.5C1 13.33 1.67 14 2.5 14H12.5C13.33 14 14 13.33 14 12.5V2.5C14 1.67 13.33 1 12.5 1H2.5Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RxBox;
