import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-nutrition",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoNutrition {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M480-120q-117 0-198.5-81.5T200-400q0-100 61.5-176.5T420-674q-26-5-50-14.5T327-717q-28-29-37.5-67t-9.5-78v-18q86-2 148 56.5T489-680q14-43 39.5-80t57.5-69q9-9 21-9t21 9q9 9 9 21t-9 21q-25 25-45 54t-34 61q94 24 152.5 99.5T760-400q0 117-81.5 198.5T480-120Zm0-60q92 0 156-64t64-156q0-92-64-156t-156-64q-92 0-156 64t-64 156q0 92 64 156t156 64Zm0-220Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoNutrition;
