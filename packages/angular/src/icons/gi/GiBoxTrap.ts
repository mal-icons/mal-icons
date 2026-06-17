import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-box-trap",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiBoxTrap {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M246.25 280.55l71.99 97.83-166.21 48.29zm0.27-37.24L138.88 97.01 21 279.83l107.65 146.3 114.21-177.11zm162.63 9.73l34.46-53.46-38.66 11.23v33.43zm-115.1-2.12l-10.51-4.89-18.56 5.39-7.17 11.13 77.33 105.14 31.99-49.63-20.28-42.88zm45.55-88.33h65.41v27.44l44.9-13.06L342.25 30.57 154.83 85.02l107.71 146.39 77.06-22.45v-46.37zm45.45 86.06v-66.1h-25.51v49.49l-13.53-5.1-34.01 10.28 49.89 22.94 104.62 221.29 24.48-7.11z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiBoxTrap;
