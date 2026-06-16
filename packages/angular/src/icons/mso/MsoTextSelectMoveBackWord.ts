import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-text-select-move-back-word",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoTextSelectMoveBackWord {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M438-780v-60h83v60h-83Zm0 660v-60h83v60h-83ZM268-780v-60h83v60h-83Zm0 660v-60h83v60h-83ZM120-780v-60h60v60h-60Zm0 660v-60h60v60h-60Zm146-214L120-480l146-146 42 42-73 74h286v60H235l73 74-42 42Zm403 154h111v-600H669v600Zm-60 60v-720h231v720H609Zm60-60h111-111Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoTextSelectMoveBackWord;
