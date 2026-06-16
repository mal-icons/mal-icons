import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-text-select-move-back-character",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssTextSelectMoveBackCharacter {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M438-780v-60h83v60h-83Zm0 660v-60h83v60h-83ZM268-780v-60h83v60h-83Zm0 660v-60h83v60h-83ZM120-780v-60h60v60h-60Zm0 660v-60h60v60h-60Zm489 0v-60h85v-600h-85v-60h231v60h-86v600h86v60H609ZM266-334 120-480l146-146 42 42-73 74h311v60H235l73 74-42 42Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssTextSelectMoveBackCharacter;
