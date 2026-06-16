import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-text-select-move-forward-character",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoTextSelectMoveForwardCharacter {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M439-120v-60h83v60h-83Zm0-660v-60h83v60h-83Zm170 660v-60h83v60h-83Zm0-660v-60h83v60h-83Zm171 660v-60h60v60h-60Zm0-660v-60h60v60h-60ZM120-120v-60h86v-600h-86v-60h231v60h-85v600h85v60H120Zm574-214-42-42 73-74H414v-60h311l-73-74 42-42 146 146-146 146Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoTextSelectMoveForwardCharacter;
