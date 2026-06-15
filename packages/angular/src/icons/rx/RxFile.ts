import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-rx-file",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RxFile {
  readonly viewBox = "0 0 15 15";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M3.5 2C3.22 2 3 2.22 3 2.5V12.5C3 12.78 3.22 13 3.5 13H11.5C11.78 13 12 12.78 12 12.5V6H8.5C8.22 6 8 5.78 8 5.5V2H3.5ZM9 2.71L11.29 5H9V2.71ZM2 2.5C2 1.67 2.67 1 3.5 1H8.5C8.63 1 8.76 1.05 8.85 1.15L12.85 5.15C12.95 5.24 13 5.37 13 5.5V12.5C13 13.33 12.33 14 11.5 14H3.5C2.67 14 2 13.33 2 12.5V2.5Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RxFile;
