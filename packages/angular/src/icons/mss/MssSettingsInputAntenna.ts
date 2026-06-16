import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-settings-input-antenna",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssSettingsInputAntenna {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M40-480q0-92 34.5-172T169-791.5q60-59.5 140-94T480-920q91 0 171 34.5t140 94Q851-732 885.5-652T920-480h-60q0-79.19-29.97-148.36t-81.5-120.9Q697-801 627.5-830.5 558-860 479.88-860q-78.12 0-147.27 29.46-69.15 29.45-120.88 81Q160-698 130-628.68 100-559.37 100-480H40Zm175 0q0-111 77.65-188 77.65-77 187.5-77Q590-745 667.5-668 745-591 745-480h-60q0-86-59.95-145.5t-145-59.5Q395-685 335-625.5T275-480h-60ZM360-64l-42-42 132-132v-156q-27-12-43.5-35.5T390-480q0-37.8 26.14-63.9t64-26.1Q518-570 544-543.9t26 63.9q0 27-16.5 50.5T510-394v156l132 132-42 42-120-120L360-64Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssSettingsInputAntenna;
