import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-forward-10",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssForward10 {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M360-310v-212h-54v-49h104v261h-50Zm103 0v-261h171v261H463Zm50-50h71v-162h-71v162ZM480-80q-75 0-140.5-28T225-185q-49-49-77-114.5T120-440q0-75 28-140.5T225-695q49-49 114.5-77T480-800h21l-78-78 41-41 147 147-147 147-41-41 74-74h-17q-125 0-212.5 87.5T180-440q0 125 87.5 212.5T480-140q125 0 212.5-87.5T780-440h60q0 75-28 140.5T735-185q-49 49-114.5 77T480-80Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssForward10;
