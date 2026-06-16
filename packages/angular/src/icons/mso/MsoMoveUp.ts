import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-move-up",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoMoveUp {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M320-149q-117 0-198.5-81.5T40-429q0-123 87.5-200.5T323-700l-86-86 43-43 160 160-160 160-43-43 89-89q-95-2-160.5 58T100-429q0 91.3 64.35 155.65Q228.7-209 320-209h120v60H320Zm200-360v-280h360v280H520Zm0 360v-280h360v280H520Zm60-60h240v-160H580v160Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoMoveUp;
